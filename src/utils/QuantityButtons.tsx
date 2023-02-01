import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';
const QuantityBtn = ({ quantity, setQuantity }: any) => {
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }
    const subtractQuantity = () => {
        if (quantity <= 1) {
            return
        }
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }
    return (
        <Box>
            <AddCircleOutlineIcon onClick={addQuantity} />
            <span>{quantity}</span>
            <RemoveIcon onClick={subtractQuantity} />
        </Box>
    )
}

export default QuantityBtn