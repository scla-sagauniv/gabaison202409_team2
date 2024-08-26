import React from 'react'
import BasicButtons from '@/app/components/BasicButtons';
import UserField from '@/app/components/UserField';

const Login = () => {
  return (
    <div>
      <h1>ログイン</h1>

      <div>
        <h2>UserId</h2>
        <UserField label="UserId" defaultValue="" />
      </div>
      <div>
        <h2>Password</h2>
        <UserField label="Password" defaultValue="" />
      </div>
      <BasicButtons buttonText="ログイン" />
    </div>
  );
}

export default Login