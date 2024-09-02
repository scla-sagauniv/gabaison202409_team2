import React from 'react'
import HomeBar from '../../components/HomeBar'
import HeaderBar from '@/app/components/HeaderBar'

const page = () => {
    return (
        <div>
            <HeaderBar></HeaderBar>

            <HomeBar status="participation"></HomeBar>
        </div>
    )
}

export default page