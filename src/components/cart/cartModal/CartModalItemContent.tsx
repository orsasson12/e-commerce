import React, { FC } from 'react'
import { CardContent, Typography, Button, Box } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import { BoxStyles, CardContentStyles, PriceBoxStyles } from '../CartStyles';
import { Item } from '../../../store/cartReducer';

type Props = {
    cartItem: Item
    addItemHandler: () => void
    removeItemHandler: () => void
}
const CartModalItemContent: FC<Props> = ({ cartItem, addItemHandler, removeItemHandler }) => {
    return (
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
    )
}

export default CartModalItemContent