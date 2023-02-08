import { Box } from '@mui/material'
import { FC } from 'react'
import { Item } from '../../store/cartReducer'
import { productActions } from '../../store/productsReducer'
import { useNavigate } from 'react-router-dom'
import { containerStyle, productContainerStyle } from './ProductStyle'
import { useDispatch } from 'react-redux'
import ProductCategoryArray from './ProductCategoryArray'
import { cartActions } from '../../store/cartReducer'
import ProductContent from './ProductContent'
type PropType = {
  product: Item
  categoryProductsArray: Item[]
}
const Product: FC<PropType> = ({ product, categoryProductsArray }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeProduct = (newId: string) => {
    dispatch(productActions.fetchProduct(newId));
    navigate(`/product/${newId}`);
    window.scrollTo({
      top: 10,
      behavior: 'smooth'
    })
  };

  const addProductToCart = () => {
    dispatch(cartActions.addItemToCart(product))
  }

  return (
    <>
      <Box sx={containerStyle}>
        <ProductCategoryArray changeProduct={changeProduct} categoryProductsArray={categoryProductsArray} />
        <Box sx={productContainerStyle}>
          <ProductContent product={product} addProductToCart={addProductToCart} />
        </Box>
      </Box>

    </>
  )
}

export default Product