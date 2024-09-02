"use client";
import { useEffect, useState } from 'react';
import * as React from 'react';

const SensorDisplay: React.FC = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const [orientation, setOrientation] = useState({ alpha: 0, beta: 0, gamma: 0 });

  useEffect(() => {
    const handleDeviceMotion = (event: DeviceMotionEvent) => {
      if (event.accelerationIncludingGravity) {
        setAcceleration({
          x: event.accelerationIncludingGravity.x ?? 0,
          y: event.accelerationIncludingGravity.y ?? 0,
          z: event.accelerationIncludingGravity.z ?? 0,
        });
      }
    };

    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      setOrientation({
        alpha: event.alpha ?? 0,
        beta: event.beta ?? 0,
        gamma: event.gamma ?? 0,
      });
    };

    window.addEventListener('devicemotion', handleDeviceMotion);
    window.addEventListener('deviceorientation', handleDeviceOrientation);

    return () => {
      window.removeEventListener('devicemotion', handleDeviceMotion);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  return (
    <div>
      <div id="result_acc">
        <h3>重力加速度</h3>
        <p>X: {acceleration.x.toFixed(2)} (m/s²)</p>
        <p>Y: {acceleration.y.toFixed(2)} (m/s²)</p>
        <p>Z: {acceleration.z.toFixed(2)} (m/s²)</p>
      </div>
      <br />
      <div id="result_gyro">
        <h3>ジャイロセンサー</h3>
        <p>alpha: {orientation.alpha.toFixed(2)}°</p>
        <p>beta: {orientation.beta.toFixed(2)}°</p>
        <p>gamma: {orientation.gamma.toFixed(2)}°</p>
      </div>
    </div>
  );
};

export default SensorDisplay;
