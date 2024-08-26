import React from 'react'
import BasicButtons from '@/app/components/BasicButtons';
import UserField from '@/app/components/UserField';

const Profile = () => {
  return (
    <div>
      <h1>ユーザー情報変更</h1>

      <div>
        <h2>YourName</h2>
        <UserField label="YourName" defaultValue="" />
      </div>
      <div>
        <h2>MailAddress</h2>
        <UserField label="MailAddress" defaultValue="" />
      </div>
      <BasicButtons buttonText="保存する" />
    </div>
  );
}

export default Profile


