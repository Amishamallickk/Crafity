import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../constants/images';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Slides = () => {
  return (
    <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
    >
        {
            bannerData.map(images => (
                <img src={images.url} alt="banner" className='w-[100%] h-[260px] mt-1 py-2 px-2 bg-orange-100'/>
            ))
        }
    </Carousel>
  )
}

export default Slides

