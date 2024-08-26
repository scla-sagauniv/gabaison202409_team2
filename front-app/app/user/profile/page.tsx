import React from 'react'
import BasicButtons from '@/app/components/BasicButtons';
import UserField from '@/app/components/UserField';

const Profile = () => {
  return (
    <div style={{padding: "20px", maxWidth: "600px", margin: "auto"}}>
      <h1 style={{ fontSize: "24px" }}>ユーザー情報変更</h1>

        <div>
          <h2 style={{ fontSize: "20px" }}>YourName</h2>
          <UserField label="YourName" defaultValue=""/>
        </div>
        <div>
          <h2 style={{ fontSize: "20px" }}>MailAddress</h2>
          <UserField label="MailAddress" defaultValue=""/>
        </div>
      <BasicButtons buttonText="保存する"/>
    </div>
  );
}

export default Profile