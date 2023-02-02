import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { Navigation, Pagination, Scrollbar } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';

import { productActions } from '../../store/productsReducer'
import BlenderRoundedIcon from '@mui/icons-material/BlenderRounded';
import DeckRoundedIcon from '@mui/icons-material/DeckRounded';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';
import ShopIcon from '@mui/icons-material/Shop';
const FilterItemByCategory = () => {
    const [slidesPerView, setSlidsPerView] = useState(3);

    useEffect(() => {
        const changeView = () => {
            console.log(window.innerWidth, slidesPerView);

            if (window.innerWidth <= 650) {
                setSlidsPerView(1);
            }
            else if (window.innerWidth <= 768) {
                setSlidsPerView(2) 
            } else {
                setSlidsPerView(3)
            }
        };
        window.addEventListener("resize", changeView);
        changeView()
        return () => {
            window.removeEventListener('resize', changeView)
        }
    }, [slidesPerView]);

    const dispatch = useDispatch()
    const handleCategory = (value: string) => {
        dispatch(productActions.filterByCategory(value))
    }

    return (
        <Swiper
            style={{ width: '100%', height: '50px' }}
            modules={[Navigation, Pagination, Scrollbar]}
            slidesPerView={slidesPerView}
            spaceBetween={30}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            slidesPerGroup={slidesPerView}
        >
            <SwiperSlide>
                <Button variant='contained' onClick={() => handleCategory('all')} startIcon={<ShopIcon />}>Products</Button>
            </SwiperSlide>
            <SwiperSlide>
                <Button variant='contained' onClick={() => handleCategory('garden')} startIcon={<DeckRoundedIcon />}>Garden</Button>
            </SwiperSlide>
            <SwiperSlide>
                <Button variant='contained' onClick={() => handleCategory('electricity')} startIcon={<BlenderRoundedIcon />}>Electricity</Button>
            </SwiperSlide>
            <SwiperSlide>
                <Button variant='contained' onClick={() => handleCategory('phone')} startIcon={<PhoneIphoneTwoToneIcon />}>Phone's</Button>
            </SwiperSlide>
            <SwiperSlide>
                <Button variant='contained' onClick={() => handleCategory('phone')} startIcon={<PhoneIphoneTwoToneIcon />}>Phone's</Button>
            </SwiperSlide>
        </Swiper >
    )
}

export default FilterItemByCategory