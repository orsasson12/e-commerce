import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Badge } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
function CartButton() {
    const dispatch = useDispatch()
    const cartQuantity = useSelector(state => state)
    console.log(cartQuantity);
    
    return (
        <Badge badgeContent={1} color='primary'>
            <LocalMallIcon />
        </Badge>
    )
}

export default CartButton