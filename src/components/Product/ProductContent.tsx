import React, { FC } from 'react'
import { productImageStyle, productStyle, productPriceStyle } from './ProductStyle'
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography, Button } from '@mui/material'
import { Item } from '../../store/cartReducer'
type PropsType = {
    product: Item
    addProductToCart: () => void
}
const ProductContent: FC<PropsType> = ({ product, addProductToCart }) => {
    return (
        <>
            <Box sx={productStyle}>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            sx={productImageStyle}
                            component="img"
                            height="250px"
                            image={product.image}
                            alt={product.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.category}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
            <Box sx={productPriceStyle}>
                <Box >
                    <Typography variant='h3'>{product.price}$</Typography>
                    <Button variant='contained' color='warning' onClick={() => addProductToCart()}>Add To Cart</Button>
                </Box>
            </Box >
        </>
    )
}

export default ProductContent