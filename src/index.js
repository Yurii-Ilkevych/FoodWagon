import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
 
const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 5,
    loop: true,
  });

swiper.slideNext()
swiper.slidePrev();

const searchSwiper = new Swiper(".search-swiper", {
    modules: [Navigation],
    speed: 500,
    navigation: {
      nextEl: '.search-swiper-button-next',
      prevEl: '.search-swiper-button-prev',
    },
    slidesPerView: 6,
    loop: true,
}) 

searchSwiper.slideNext()
searchSwiper.slidePrev()