import React from 'react'
import { Box, AppBar, Toolbar } from '@mui/material'
import CartButton from '../cart/CartButton';
import shopLogo from '../../assets/Sassi_shop.png'
import { AppBarBoxStyles, ImageStyles } from './Styles';
import { useNavigate } from 'react-router-dom';
function Appbar() {
    const navigate = useNavigate()
    return (
        <Box >
            <AppBar position="fixed">
                <Toolbar sx={AppBarBoxStyles}>

                    <Box component={'img'} src={shopLogo} sx={ImageStyles} onClick={() => navigate('/')} />
                    <CartButton />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Appbar