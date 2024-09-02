import * as React from 'react';
import Fab from '@mui/material/Fab';
import PanToolTwoToneIcon from '@mui/icons-material/PanToolTwoTone';

const HighTouch = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 75,
            zIndex: 1000,
        }}>
            <Fab color="primary" aria-label="add" sx={{ padding: 5 }}>
                <PanToolTwoToneIcon />
            </Fab>
        </div>
    )
}

export default HighTouch