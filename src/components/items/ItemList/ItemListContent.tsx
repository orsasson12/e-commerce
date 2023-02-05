import React, { FC } from 'react'
import { Item } from '../../../store/cartReducer'
import { Card, CardMedia, CardContent, Typography, CardActions, styled, Button } from '@mui/material'
import { CardStyles, CardMediaStyles } from '../ItemsStyles'
import { lightBlue } from "@mui/material/colors";
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
    return (
        <Card sx={CardStyles}>
            <CardMedia
                sx={CardMediaStyles}
                image={item.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
                <Typography>Cost: ${item.price.toFixed(2)}</Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
                <StyledButton variant='contained' onClick={() => addItemHandler(item)}>ADD TO CART</StyledButton>
            </CardActions>
        </Card>
    )
}

export default ItemListContent