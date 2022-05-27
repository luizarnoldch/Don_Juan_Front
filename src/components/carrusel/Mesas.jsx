import React from 'react'

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import mesas from '../../assets/json/slides/mesasData.json';

import './mesas.scss';

const SlideMesas = () => {

  SwiperCore.use([Autoplay]);

  return (
    <div className="carrusel-mesa">
      <Swiper
        modules={[Autoplay]}
        grabCursos={true}
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{delay: 3000}}
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
