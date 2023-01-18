import React from 'react'
import { appbarData } from './appbarData'
import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CartButton from '../cart/CartButton';
function Appbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Shopping Cart
                    </Typography>
                    <CartButton />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Appbar