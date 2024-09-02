"use client"

import * as React from 'react';
import Fab from '@mui/material/Fab';
import PanToolTwoToneIcon from '@mui/icons-material/PanToolTwoTone';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { CardMedia, Icon } from '@mui/material';
import AutorenewTwoToneIcon from '@mui/icons-material/AutorenewTwoTone';
import Box from '@mui/material/Box';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const HighTouch = () => {

    const [open, setOpen] = React.useState(false);
    const [change, setChange] = React.useState<string>("カメラ")

    const user_id: string = "172.27.117.148:3000"
    const [img, setImg] = React.useState<string>(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${user_id}`)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = () => {
        //カメラへの切替　メソッド
        if (change == "カメラ") {
            setChange("QRコード")
            setImg("https://cdn-ak.f.st-hatena.com/images/fotolife/c/cruller/20190516/20190516214640.png")
        } else {
            setChange("カメラ")
            setImg(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${user_id}`)
        }



    }

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
                <Tooltip title="ハイタッチ" arrow>
                    <Fab color="primary" aria-label="add" sx={{ padding: 5 }} onClick={handleClickOpen}>
                        <PanToolTwoToneIcon />
                    </Fab>
                </Tooltip>
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
                        <CardMedia
                            component="img"
                            sx={{ width: 700 }}
                            image={img}
                            alt="QRコード"
                        />
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