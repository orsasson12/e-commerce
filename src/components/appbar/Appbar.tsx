import React from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CartButton from '../cart/CartButton';
import shopLogo from '../../assets/Sassi_shop.png'
import { AppBarBoxStyles, ImageStyles } from './Styles';
function Appbar() {
    return (
        <Box >
            <AppBar position="fixed">
                <Toolbar sx={AppBarBoxStyles}>
                  
                    <Box component={'img'} src={shopLogo} sx={ImageStyles} />
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Shopping Cart
                    </Typography> */}
                    <CartButton />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Appbar