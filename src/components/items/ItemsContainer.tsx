import React from 'react'
import { Box, Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import ItemList from './ItemList/ItemList'
import FilterItemByCategory from './FIlterItemsByCategory/FilterItemByCategory'
import FilterItemByPrice from './FilterItemByPrice'
import { GridStyles } from './ItemsStyles'
import { Item } from '../../store/cartReducer'
const ItemsContainer = () => {
  const products = useSelector((state: any) => state.product.products)
  const sortedProducts = useSelector((state: any) => state.product.sortedProducts)



  return (
    <Box>
      <Grid sx={GridStyles} container>
        <FilterItemByPrice />
        <FilterItemByCategory />
      </Grid >
      <Grid container rowSpacing={1} mx='auto' my='10rem' >
        {
          products && (
            (sortedProducts.length === 0 ? products : sortedProducts).map(
              (item: Item) => {
                return (
                  <ItemList
                    item={item}
                  />
                );
              }
            )
          )
        }
      </Grid>
    </Box >
  )
}

export default ItemsContainer