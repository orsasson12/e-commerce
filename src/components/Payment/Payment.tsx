import { Box, Typography, Button } from '@mui/material'
import React, { FC } from 'react'
import { Item } from '../../store/cartReducer'
import { paymentContainerStyle } from './PaymentStyles'

type PropsType = {
  paymentItemsData: Item[]
}
const Payment: FC<PropsType> = ({ paymentItemsData }) => {
  let totalShopPrice = paymentItemsData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalPrice,
    0
  );
  return (
    <Box sx={paymentContainerStyle}>
      <Typography variant='h5'>Order Summary</Typography>
      <Typography component='span'>Items Price : {totalShopPrice}$ </Typography>
      <Typography component='span'>Shipping Price : 0$</Typography>
      <Typography variant="h3">Order Total : {totalShopPrice}</Typography>
      <Button variant="contained">Give Me Your'e Money</Button>
      <Typography component='p'>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online. </Typography>
    </Box>
  )
}

export default Payment