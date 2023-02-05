import { Grid } from '@mui/material'
import { Item } from '../../../store/cartReducer'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cartReducer';
import { useSelector } from "react-redux";
import { FC } from 'react';
import ItemListContent from './ItemListContent';


type Props = {
    item: Item
}
const ItemList: FC<Props> = ({ item }) => {

    const sortIsVisible = useSelector((state: any) => state.ui.sortIsVisible)
    const dispatch = useDispatch()
    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart(item))
    }
    return (
        <Grid item xs={12} sm={6} md={4} gap={5} sx={sortIsVisible && { ":first-of-type": { marginTop: { xs: '6rem', sm: '0' } } }} >
            <ItemListContent item={item} addItemHandler={addItemHandler} />
        </Grid>
    )
}

export default ItemList