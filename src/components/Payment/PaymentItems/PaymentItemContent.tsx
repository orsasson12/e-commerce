import { Box, Card, CardContent, CardMedia } from '@mui/material'
import { FC } from 'react'
import { Item } from '../../../store/cartReducer'
import { paymentItemStyle, CardMediaStyle, CardContentSpanStyle } from './PaymentItemStyles'

type PropsType = {
    item: Item
}
const PaymentItemContent: FC<PropsType> = ({ item }) => {
    return (
        <Box >
            <Card sx={paymentItemStyle} >
                <CardMedia
                    sx={CardMediaStyle}
                    image={item.image}
                    title={item.title}
                >
                </CardMedia>
                <CardContent sx={{display:{xs:'flex',lg:'block'}, flexDirection:'column'}}>
                    <span style={CardContentSpanStyle}>{item.title}</span>
                    <span style={CardContentSpanStyle}><strong>{item.category}</strong></span>
                    <span style={CardContentSpanStyle}>{item.price} X {item.quantity} = {item.totalPrice}$</span>
                </CardContent>
            </Card>
        </Box>
    )
}

export default PaymentItemContent