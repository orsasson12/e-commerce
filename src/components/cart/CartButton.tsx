import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Badge } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/uiReducer'
import { CartIconStyle } from './CartStyles'
function CartButton() {
    const dispatch = useDispatch()
    const cartQuantity = useSelector((state: any) => state.cart.totalQuantity)

    const handleToggle = () => {
        dispatch(uiActions.toggleCart())
    }
    return (
        <Badge badgeContent={cartQuantity} color='primary' style={{ margin: '0 auto' }} max={10}>
            <LocalMallIcon sx={CartIconStyle} onClick={handleToggle} />
        </Badge>
    )
}

export default CartButton