import { FC } from 'react'
import { Card, CardMedia } from '@mui/material'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cartReducer';
import { CardContainerStyle } from '../CartStyles';
import { Item } from '../../../store/cartReducer';
import CartModalItemContent from './CartModalItemContent';

type Props = {
    cartItem: Item
}
const CartModalItem: FC<Props> = ({ cartItem }) => {

    const dispatch = useDispatch()
    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(cartItem.id))
    }
    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart(cartItem))
    }
    return (
        <>
            <Card sx={CardContainerStyle}>
                <CartModalItemContent addItemHandler={addItemHandler} cartItem={cartItem} removeItemHandler={removeItemHandler} />
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