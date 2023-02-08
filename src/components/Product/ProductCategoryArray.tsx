import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import { productCardStyle, productImageCategoryStyle, productsStyle } from './ProductStyle'
import { Item } from '../../store/cartReducer'
import { FC } from 'react'

type PropsType = {
    categoryProductsArray: Item[]
    changeProduct: (id: string) => void
}
const ProductCategoryArray: FC<PropsType> = ({ categoryProductsArray, changeProduct }) => {
    return <Box sx={productsStyle}>
        {categoryProductsArray.map((product) => {
            return (
                <Card sx={productCardStyle} key={product.id}>
                    <CardActionArea onClick={() => changeProduct(product.id)}>
                        <CardMedia
                            sx={productImageCategoryStyle}
                            component="img"
                            height="150px"
                            image={product.image}
                            alt="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                <strong>{product.price}$</strong>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )
        })}
    </Box>
}


export default ProductCategoryArray