import React from 'react';
import { Box } from '@mui/material';
import Appbar from './components/appbar/Appbar';
import Cart from './components/cart/Cart';
import ItemsContainer from './components/items/ItemsContainer';
function App() {
  return (
    <Box>
      <Appbar />
      <Cart />
      <ItemsContainer />
    </Box>
  );
}

export default App;
