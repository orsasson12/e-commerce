import { Box } from '@mui/material'
import Product from '../components/Product/Product'
import { useSelector } from 'react-redux'
const ItemPage = () => {
    const product = useSelector((state: any) => state.product.product)
    const categoryProductsArray = useSelector((state: any) => state.product.categoryProducts)

    return (
        <Box sx={{ maxWidth: '1400px', margin: '0 auto', minHeight: '90vh', padding: '10px' }}>
            <Product product={product} categoryProductsArray={categoryProductsArray} />
        </Box>
    )
}

export default ItemPage