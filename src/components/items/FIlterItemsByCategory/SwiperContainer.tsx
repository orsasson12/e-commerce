import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { productActions } from '../../../store/productsReducer'

import SwiperSlider from './SwiperSlider';

type Props = {
    slidesPerView: number
}
const SwiperContainer: FC<Props> = ({ slidesPerView }) => {
    const dispatch = useDispatch()
    const handleCategory = (value: string) => {
        dispatch(productActions.filterByCategory(value))
    }

    return (
        <SwiperSlider handleCategory={handleCategory} slidesPerView={slidesPerView} />
    )
}

export default SwiperContainer