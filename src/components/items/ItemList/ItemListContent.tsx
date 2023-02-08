import React, { FC } from 'react'
import { Item } from '../../../store/cartReducer'
import { Card, CardMedia, CardContent, Typography, styled, Button } from '@mui/material'
import { CardStyles, CardMediaStyles, categoryStyle } from '../ItemsStyles'
import { lightBlue } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';
import { productActions } from '../../../store/productsReducer'
import { useDispatch } from 'react-redux'
type Props = {
    item: Item
    addItemHandler: (item: Item) => void
}
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
const ItemListContent: FC<Props> = ({ item, addItemHandler }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const go = (id: string) => {
        dispatch(productActions.fetchProduct(id))
        navigate(`/product/${id}`)
    }
    return (

        <>
            <Button variant='outlined' sx={categoryStyle}>{item.category}</Button>
            <Card sx={CardStyles} onClick={() => go(item.id)}>
                <CardMedia
                    sx={CardMediaStyles}
                    image={item.image}
                    title={item.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant='h6'><strong>${item.price.toFixed(2)}</strong></Typography>
                </CardContent>
                {/* <CardActions style={{ justifyContent: 'center' }}>
               <StyledButton variant='contained' onClick={() => addItemHandler(item)}>ADD TO CART</StyledButton>
            </CardActions> */}
            </Card>
        </>
        // <Card sx={CardStyles}>
        //     <CardMedia
        //         sx={CardMediaStyles}
        //         image={item.image}
        //         title={item.title}
        //     />
        //     <CardContent>
        //         <Typography gutterBottom variant="h5" component="div">
        //             {item.title}
        //         </Typography>
        //         <Typography variant="body2" color="text.secondary">
        //             {item.description}
        //         </Typography>
        //         <Typography>Cost: ${item.price.toFixed(2)}</Typography>
        //     </CardContent>
        //     <CardActions style={{ justifyContent: 'center' }}>
        //         <StyledButton variant='contained' onClick={() => addItemHandler(item)}>ADD TO CART</StyledButton>
        //     </CardActions>
        // </Card>
    )
}

export default ItemListContent