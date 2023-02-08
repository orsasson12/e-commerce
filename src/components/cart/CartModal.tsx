import React from 'react'
import { Modal, Box, Typography, List, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../../store/uiReducer'
import CartModalItem from './cartModal/CartModalItem'
import { cartActions } from '../../store/cartReducer'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { cartItemType } from '../../store/cartReducer'
import { uiSliceState } from '../../store/uiReducer'
// styles 
import { listStyle, BoxStyleModal, BoxModalTitleStyle, ModalStyle, TotalPriceStyle } from './CartStyles'
import PaymentButton from './Payment/PaymentButton'
const CartModal = () => {
    const open = useSelector((state: uiSliceState) => state.ui.cartModalIsVisible)
    const cartItems = useSelector((state: cartItemType) => state.cart.items)
    const dispatch = useDispatch()
    const handleToggle = () => {
        dispatch(uiActions.toggleCart())
    }
    let totalShopPrice = cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.totalPrice,
        0
    );
    const handleClearShop = () => {
        dispatch(cartActions.clearStore())
    }
    return (
        <Modal open={open} onClose={handleToggle} sx={ModalStyle}>
            <Box width={{xs:'90%',sm:'50%'}} margin='0 auto'>
                {cartItems.length <= 0 && <Typography sx={BoxModalTitleStyle} variant='h1'>No Items In Your'e Cart</Typography>}
                <List sx={listStyle}>
                    {cartItems.length > 0 && <Button variant='contained' sx={{ backgroundColor: '#48abe5f7' }} endIcon={<CleaningServicesIcon />} onClick={handleClearShop} >Clean the Shop</Button>}
                    <Box sx={BoxStyleModal}>
                        {
                            cartItems?.map((cartItem: any) => {
                                return (
                                    <CartModalItem cartItem={cartItem} key={cartItem.id} />
                                )
                            })
                        }
                    </Box>
                </List>

                {cartItems.length > 0 && <Typography sx={TotalPriceStyle}>Cart Total: <strong>{totalShopPrice}</strong>$</Typography> &&
                    <PaymentButton />
                }

            </Box>

        </Modal>


    )
}

export default CartModal