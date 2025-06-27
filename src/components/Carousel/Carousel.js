import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from './Carousel.module.css';

const Carousel = ({ data = [], renderCard }) => {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation]}
      spaceBetween={20}
      navigation
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide className={styles.swiperSlide} key={item.id || index}>
          {renderCard(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
