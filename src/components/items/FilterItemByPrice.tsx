import { useDispatch, useSelector } from "react-redux";
import {  MenuItem, Box, Button } from "@mui/material";
import { productActions } from "../../store/productsReducer";
import SortIcon from '@mui/icons-material/Sort';
import { uiActions } from "../../store/uiReducer";
import { filterByItemBoxStyles, menuItemStyle } from "./ItemsStyles";
const FilterItemByPrice = () => {
  const dispatch = useDispatch();
  const visible = useSelector((state: any) => state.ui.sortIsVisible)
  const handleShowSort = () => {
    dispatch(uiActions.toggleSort())
  }
  const handlePrice = (value: "low" | "high" | "normal") => {
    dispatch(productActions.sortProductsByPrice(value));
  };
  return (
    <Box sx={filterByItemBoxStyles}>
      <Button  startIcon={<SortIcon />} variant='contained' id='demo-simple-select-label' onClick={handleShowSort}>Sort by</Button>
      {
        visible && (
          <>
            <MenuItem sx={menuItemStyle} value="normal" onClick={() => handlePrice("normal")}>
              normal
            </MenuItem>
            <MenuItem sx={menuItemStyle} value="low" onClick={() => handlePrice("low")}>
              low
            </MenuItem>
            <MenuItem sx={menuItemStyle} value="high" onClick={() => handlePrice("high")}>
              high
            </MenuItem>
          </>
        )
      }
    </Box>
  );
};

export default FilterItemByPrice;