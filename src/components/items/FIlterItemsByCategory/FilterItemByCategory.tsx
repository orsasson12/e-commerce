import SwiperContainer from './SwiperContainer';
import useSlidesHook from '../../../hooks/useSlides';
const FilterItemByCategory = () => {
    const slidesPerView = useSlidesHook(3)
    return (
        <SwiperContainer slidesPerView={slidesPerView} />
    )
}

export default FilterItemByCategory