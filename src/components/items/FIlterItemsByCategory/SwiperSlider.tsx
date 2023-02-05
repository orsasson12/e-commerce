import React, { FC } from 'react'
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import BlenderRoundedIcon from '@mui/icons-material/BlenderRounded';
import DeckRoundedIcon from '@mui/icons-material/DeckRounded';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';
import ShopIcon from '@mui/icons-material/Shop';
import { Button } from '@mui/material'

type Props = {
    handleCategory(value: string): void
    slidesPerView: number
}
const SwiperSlider: FC<Props> = ({ handleCategory, slidesPerView }) => {
    return (
        <Swiper
            style={{ width: '100%', height: '50px' }}
            modules={[Navigation, Pagination, Scrollbar]}
            slidesPerView={slidesPerView}
            spaceBetween={30}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            slidesPerGroup={slidesPerView}>
            <SwiperSlide >
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
        </Swiper>
    )
}

export default SwiperSlider