import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, styled, Alert } from '@mui/material'
import { Item } from '../../store/cartReducer'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartReducer';
import { lightBlue } from "@mui/material/colors";
import { CardStyles, CardMediaStyles } from './ItemsStyles'
import { useSelector } from "react-redux";
export const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(lightBlue['A400']),
    backgroundColor: lightBlue['A400'],
    transition: 'all 0.5s',
    "&:hover": {
        backgroundColor: lightBlue['A200'],
        transform: 'scale(1.1, 1.1)',
        cursor: 'pointer',
    },

}
));

const ItemList = ({ title, price, image, quantity, description, id, totalPrice }: Item) => {
    const sortIsVisible = useSelector((state: any) => state.ui.sortIsVisible)
    const dispatch = useDispatch()
    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,
            image,
            quantity,
            totalPrice
        }))
    }
    return (
        <Grid item xs={12} sm={6} md={4} gap={5} sx={sortIsVisible && { ":first-child": { marginTop: { xs: '6rem', sm: '0' } } }} >

            <Card sx={CardStyles}>
                <CardMedia
                    sx={CardMediaStyles}
                    image={image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography>Cost: ${price.toFixed(2)}</Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                    <StyledButton variant='contained' onClick={addItemHandler}>ADD TO CART</StyledButton>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ItemList