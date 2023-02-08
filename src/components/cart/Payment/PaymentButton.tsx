import { Box, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
const Payment = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => navigate('/payment')} color='warning' variant='contained' endIcon={<ArrowForwardIcon />} sx={{ borderRadius: '20px' }} >
                Proceed to Checkout
            </Button>
        </Box>
    )
}

export default Payment