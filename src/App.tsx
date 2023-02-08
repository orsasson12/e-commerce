import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ItemPage from './Pages/ItemPage';
import Appbar from './components/appbar/Appbar';
import Cart from './components/cart/Cart';
import PayementPage from './Pages/PayementPage';
function App() {
  return (
    <Box>
      <Appbar />
      <Cart />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/product/:id' element={<ItemPage />} />
        <Route path='/payment' element={<PayementPage />} />
      </Routes>
    </Box>
  );
}

export default App;
