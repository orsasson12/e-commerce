import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button, Box, Paper } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartReducer';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { BoxStyles, CardContainerStyle, CardContentStyles,PriceBoxStyles } from './CartStyles';
const CartModalItem = ({ cartItem }: any) => {


    const dispatch = useDispatch()
    const removeItemHandler = () => {

        dispatch(cartActions.removeItemFromCart(cartItem.id))
    }
    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id: cartItem.id,
            title: cartItem.title,
            price: cartItem.price,
            image: cartItem.image,
            quantity: cartItem.quantity,
            totalPrice: cartItem.totalPrice

        }))
    }
    return (
        <>
            <Card sx={CardContainerStyle}>
    

                <Box>
                    <CardContent sx={CardContentStyles}>
                        <Typography component="div" variant="h5">
                            {cartItem.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {cartItem.description}
                        </Typography>
                        <Box sx={PriceBoxStyles}>
                            ${cartItem.totalPrice.toFixed(2)}{' '}
                            <span>(${cartItem.price.toFixed(2)}/item)</span>
                        </Box >
                        <Box sx={BoxStyles}>
                            <Button variant='contained' size='medium'><AddCircleOutlineIcon fontSize='medium' onClick={addItemHandler} /></Button>
                            <span>{cartItem.quantity}</span>
                            <Button variant='contained' size="medium"><RemoveIcon fontSize='medium' onClick={removeItemHandler} /></Button>
                        </Box>
                    </CardContent>
                </Box>

                <CardMedia
                    component="img"
                    sx={{ width: '30%' }}
                    image={cartItem.image}
                    alt="Live from space album cover"
                />
            </Card>
        </>

    )
}

export default CartModalItem