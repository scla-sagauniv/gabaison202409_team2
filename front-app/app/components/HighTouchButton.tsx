"use client"

import * as React from 'react';
import Fab from '@mui/material/Fab';
import PanToolTwoToneIcon from '@mui/icons-material/PanToolTwoTone';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { CardMedia, Icon } from '@mui/material';
import AutorenewTwoToneIcon from '@mui/icons-material/AutorenewTwoTone';
import Box from '@mui/material/Box';
import { QRCodeCanvas } from "qrcode.react"
import { useState, useEffect, useRef } from 'react'
import jsQR from 'jsqr'


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const HighTouch = () => {

    const [open, setOpen] = useState(false);
    const [change, setChange] = useState<string>("カメラ")
    const [qrCodeData, setQrCodeData] = useState<string | null>(null); // QRコードデータを保存するためのstate

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [qrStatus, setQrStatus] = useState<boolean>(true)

    //QRコード　user_idを仕込む
    const user_id: string = "172.27.117.148:3000"

    const handleChange = () => {
        //カメラへの切替　メソッド
        //QRコードの時，true
        if (qrStatus === true) {
            setQrStatus(false)
            setChange("QRコード")
        } else {
            setQrStatus(true)
            setChange("カメラ")
        }

        navigator.mediaDevices
            .getUserMedia({
                video: {
                    // facingMode: 'environment',
                    facingMode: 'user', // 内カメラを指定
                    width: { ideal: 278 },
                    height: { ideal: 278 },
                },
            })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                    scanQrCode(); // スキャンを再度開始
                }
            })
            .catch((err) => console.error('Error accessing media devices:', err));
    }

    //カメラ読み取り
    const videoRef = useRef<HTMLVideoElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [result, setResult] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        const constraints = {
            video: {
                // facingMode: 'environment',
                facingMode: 'user', // 内カメラを指定
                width: { ideal: 300 },
                height: { ideal: 300 },
            },
        }

        const handleCanPlay = () => {
            if (videoRef.current) {
                videoRef.current.play();
                scanQrCode();
            }
        };

        // デバイスのカメラにアクセスする
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                // デバイスのカメラにアクセスすることに成功したら、video要素にストリームをセットする
                if (videoRef.current) {
                    videoRef.current.srcObject = stream
                    videoRef.current.play()
                    scanQrCode()
                }
            })
            .catch((err) => console.error('Error accessing media devices:', err))

        const currentVideoRef = videoRef.current

        // コンポーネントがアンマウントされたら、カメラのストリームを停止する
        return () => {
            if (currentVideoRef && currentVideoRef.srcObject) {
                const stream = currentVideoRef.srcObject as MediaStream
                const tracks = stream.getTracks()
                tracks.forEach((track) => track.stop())
            }
        }
    }, [])

    // const scanQrCode = () => {
    //     const canvas = canvasRef.current;
    //     const video = videoRef.current;
    //     if (canvas && video) {
    //         const ctx = canvas.getContext('2d', { willReadFrequently: true });
    //         if (ctx) {
    //             ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    //             const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //             const qrCodeData = jsQR(imageData.data, imageData.width, imageData.height);
    //             setTimeout(scanQrCode, 100);
    //         }
    //     }
    // };

    const scanQrCode = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        if (canvas && video) {
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (ctx) {
                // ctx.setTransform(-1, 0, 0, 1, canvas.width, 0);
                // ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const qrResult = jsQR(imageData.data, imageData.width, imageData.height);
                if (qrResult) {
                    if (qrCodeData !== qrResult.data) {
                        setQrCodeData(qrResult.data); // QRコードのデータが変更されたときだけ更新
                    }
                } else {
                    setTimeout(scanQrCode, 1000);
                }
            }
        }
    };
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                left: 0,
                right: 0,
                bottom: 75,
                zIndex: 10,
            }}>
                <Fab color="primary" aria-label="add" sx={{ padding: 5 }} onClick={handleClickOpen}>
                    <PanToolTwoToneIcon />
                </Fab>
            </div>

            <React.Fragment>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"ハイタッチ機能"}</DialogTitle>
                    <DialogContent>
                        {
                            qrStatus ?
                                (
                                    <QRCodeCanvas value={user_id} size={280}></QRCodeCanvas>
                                ) :

                                (
                                    <div>
                                        <video
                                            autoPlay
                                            playsInline={true}
                                            ref={videoRef}
                                            style={{
                                                width: '100%',
                                                /*transform: 'scaleX(-1)',*/
                                            }}
                                        >
                                            <canvas width="300" height="300" ref={canvasRef} />
                                        </video>
                                        {qrCodeData && (
                                            <div>
                                                <p>user_id: {qrCodeData}</p>
                                            </div>
                                        )}
                                    </div>
                                )
                        }
                    </DialogContent>
                    <DialogActions>
                        <Box sx={{ flexGrow: 1 }}>
                            <Button onClick={handleChange} sx={{ justifyContent: 'flex-start' }}>
                                <AutorenewTwoToneIcon />
                                {change}
                            </Button>
                        </Box>
                        <Button onClick={handleClose}>キャンセル</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>

        </div>
    )
}


export default HighTouch