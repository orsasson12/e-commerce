import React from 'react'
import { Modal, Box, Typography, List, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../../store/uiReducer'
import CartModalItem from './CartModalItem'
import { cartActions } from '../../store/cartReducer'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
// styles 
import { listStyle, BoxStyleModal, BoxModalTitleStyle, ModalStyle, TotalPriceStyle } from './CartStyles'
const CartModal = () => {
    const open = useSelector((state: any) => state.ui.cartModalIsVisible)
    const cartItems = useSelector((state: any) => state.cart.items)
    const dispatch = useDispatch()
    const handleToggle = () => {
        dispatch(uiActions.toggleCart())
    }

    let totalShopPrice = cartItems.reduce(
        (accumulator: any, currentValue: any) => accumulator + currentValue.totalPrice,
        0
    );

    const handleClearShop = () => {
        dispatch(cartActions.clearStore())
    }
    return (
        <Modal open={open} onClose={handleToggle} sx={ModalStyle}>
            <Box width={'50%'} margin='0 auto'>
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

                {cartItems.length > 0 && <Typography sx={TotalPriceStyle}>totalPrice: {totalShopPrice}$</Typography>}
            </Box>
        </Modal>


    )
}

export default CartModal