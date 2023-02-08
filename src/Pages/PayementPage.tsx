import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { cartSliceState } from "../store/cartReducer"
import PaymentItems from "../components/Payment/PaymentItems/PaymentItems"
import Payment from "../components/Payment/Payment"
const PayementPage = () => {
    const paymentItemsData = useSelector((state: cartSliceState) => state.cart.items)
    const paymentContainerStyle = {
        display: 'flex',
        backgroundColor: '#f4f4f4',
        borderRadius: '20px',
        boxShadow: '0 7px 29px 0 hsl(240deg 5% 41% / 20%)',
        gap: '20px',
        padding: '10px',
        flexDirection: { xs: 'column', md: 'row' },
        marginTop: '5rem'
    }
    return (
        <Box sx={{ maxWidth: '1400px', margin: '0 auto', minHeight: '90vh', padding: '10px' }}>
            <Typography variant="h4" sx={{ marginTop: '10rem', textAlign: 'center' }}>Proceed to Payment</Typography>
            <Box sx={paymentContainerStyle}>
                <PaymentItems paymentItemsData={paymentItemsData} />
                <Payment paymentItemsData={paymentItemsData}/>
            </Box>
        </Box>
    )
}

export default PayementPage