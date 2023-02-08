import { Box } from '@mui/material'
import { FC } from 'react'
import { Item } from '../../../store/cartReducer'
import { ItemContainerStyle } from '../PaymentStyles'
import PaymentItemContent from './PaymentItemContent'


type PropsType = {
    paymentItemsData: Item[]
}
const PaymentItems: FC<PropsType> = ({ paymentItemsData }) => {
    return (
        <Box sx={ItemContainerStyle}>
            {paymentItemsData?.map((item) => {
              return  <PaymentItemContent item={item} />
            })}
        </Box>
    )
}

export default PaymentItems