"use client"
import { useState, useEffect } from 'react';

const DeviceMotion = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const [teststate, setTeststate] = useState("test");

  const requestPermission = async () => {
    if (typeof DeviceMotionEvent !== 'undefined' && (DeviceMotionEvent as any).requestPermission) {
      try {
        const state: PermissionState = await (DeviceMotionEvent as any).requestPermission();
        setTeststate(state);
        if (state === 'granted') {
          setDeviceMotionEvent();
        } else {
          alert('動作と方向へのアクセスを許可してください');
        }
      } catch (error) {
        console.error('Permission request error:', error);
      }
    } else {
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
    <div>
      <div className="box">
        <button id="btn" onClick={requestPermission}>START</button>
      </div>
      {teststate}
      <p id="x">x: {acceleration.x.toFixed(2)}</p>
      <p id="y">y: {acceleration.y.toFixed(2)}</p>
      <p id="z">z: {acceleration.z.toFixed(2)}</p>
    </div>
  );
};

export default DeviceMotion;
