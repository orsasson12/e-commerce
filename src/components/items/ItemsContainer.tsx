import React from 'react'
import { Box, Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import ItemList from './ItemList'
import FilterItemByCategory from './FilterItemByCategory'
import FilterItemByPrice from './FilterItemByPrice'
import { GridStyles } from './ItemsStyles'
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
              (item: { quantity: number; title: string; price: number; image: string; description: string; id: string; totalPrice: number; category: string }) => {
                return (
                  <ItemList
                    quantity={item.quantity}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    description={item.description}
                    key={item.id}
                    id={item.id}
                    totalPrice={item.totalPrice}
                    category={item.category}
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