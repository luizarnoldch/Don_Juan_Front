import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation} from "swiper";

import mesas from '../../assets/json/slides/mesasData.json';

import './mesas.scss';

const SlideMesas = () => {
  return (
    <div className="carrusel-mesa">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        modules={[Autoplay, FreeMode, Navigation]}
        grabCursos={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="mySwiper"
      >
        {
          mesas.map((item, i) => (
            <SwiperSlide key={i}>
              <SlideMesasItem
                icon={item.icon}
                title={item.title}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

const SlideMesasItem = props => {
  return (
    <div className="mesa-slide__item">
      <div className="mesa-slide__item__content">
        <div className="mesa-slide__item__content__info">
          <span>{props.title}</span>
          <i className={props.icon}></i>
        </div>
      </div>
    </div>
  )
}

export default SlideMesas
