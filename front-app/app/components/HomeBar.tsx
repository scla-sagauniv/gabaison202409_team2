"use client";

import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

interface HomeBarProps {
    status: string;
}

export default function HomeBar({ status }: HomeBarProps) {
    //初期値がホームになっているので，あとでページのルートによって初期値を変更する
    const [value, setValue] = React.useState(status);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: "100%", bgcolor: '#b2ebf2' }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="MyPage"
                value="mypage"
                icon={<PersonRoundedIcon />}
                href={"../user/profile"}
            />

            <BottomNavigationAction
                label="Participation"
                value="participation"
                icon={<CheckRoundedIcon />}
                href={"../participation/join"}
            />

            <BottomNavigationAction
                label="Home"
                value="home"
                icon={<HomeRoundedIcon />}
                href={"/"}
            />

            <BottomNavigationAction
                label="Reservation"
                value="reservation"
                icon={<AddCircleOutlineRoundedIcon />}
                href={"../reservations/executive-page"}
            />

            <BottomNavigationAction
                label="Friends"
                value="friends"
                icon={<GroupRoundedIcon />}
                href={"../friends"}
            />
        </BottomNavigation>
    );
}
