"use client"
import { useState, useEffect } from 'react';

const DeviceMotion = () => {
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false);
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const [teststate, setTeststate] = useState("test");

  const requestPermission = async () => {
    if (typeof DeviceMotionEvent !== 'undefined' && (DeviceMotionEvent as any).requestPermission) {
      try {
        const state: PermissionState = await (DeviceMotionEvent as any).requestPermission();
        setTeststate(state);
        if (state === 'granted') {
          setPermissionGranted(true);
          setDeviceMotionEvent();
        } else {
          alert('動作と方向へのアクセスを許可してください');
        }
      } catch (error) {
        console.error('Permission request error:', error);
      }
    } else {
      setPermissionGranted(true);
      setDeviceMotionEvent();
    }
  };

  const setDeviceMotionEvent = () => {
    window.addEventListener('devicemotion', (evt: DeviceMotionEvent) => {
      if (evt.accelerationIncludingGravity) {
        setAcceleration({
          x: evt.accelerationIncludingGravity.x ?? 0,
          y: evt.accelerationIncludingGravity.y ?? 0,
          z: evt.accelerationIncludingGravity.z ?? 0,
        });
      }
    });
  };

  return (
    <div data-index={permissionGranted ? '1' : '0'}>
      {!permissionGranted ? (
        <div className="box">
          <button id="btn" onClick={requestPermission}>START</button>
        </div>
      ) : (
        <div className="box">
          <div>
            <p id="x">x: {acceleration.x.toFixed(2)}</p>
            <p id="y">y: {acceleration.y.toFixed(2)}</p>
            <p id="z">z: {acceleration.z.toFixed(2)}</p>
          </div>
        </div>
      )}
      <div>
        {teststate}
        <p id="x">x: {acceleration.x.toFixed(2)}</p>
        <p id="y">y: {acceleration.y.toFixed(2)}</p>
        <p id="z">z: {acceleration.z.toFixed(2)}</p>
      </div>
      <style jsx>{`
        .box {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        [data-index='0'] .box:nth-child(2) {
          display: none;
        }

        [data-index='1'] .box:nth-child(1) {
          display: none;
        }

        #x:before {
          content: 'x: ';
        }

        #y:before {
          content: 'y: ';
        }

        #z:before {
          content: 'z: ';
        }
      `}</style>
    </div>
  );
};

export default DeviceMotion;
