import React from 'react'
import '../Slider/Slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import kodaikanal from "./videos/kodaikanal.mp4"; 
import madurai from "./videos/madurai.mp4";  
import kerala from "./videos/kerala.mp4";  
import bangalore from "./videos/bangalore.mp4"; 
export const Slider = () => {
  return (
    <>
    <Swiper
        spaceBetween={4}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="swiper-slide">
                    <div className="content" data-swiper-parallax="-40 ">
                        <video loop autoPlay autoFocus style={{width:"100%"}} id="clips" src={kodaikanal} />
                        <div id="title" data-swiper-parallax="-200 ">
                            <h2>KODAIKANAL</h2>
                        </div>
                        <div id="text" data-swiper-parallax="-600 ">
                            <p>Kodaikanal is a popular hill station located in the Dindigul district of the southern Indian state of Tamil Nadu. Nestled in the Western Ghats at an elevation of about 7,200 feet (2,200 meters) above sea level.
                            </p>
                        </div>
                        <div id="submit" data-swiper-parallax="-300">
                            <Link to="/filteredcars">Search Cars</Link>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide">
                    <div className="content" data-swiper-parallax="-40 ">
                            <video loop autoFocus autoPlay style={{width:"100%"}} id="clips" src={madurai} />
                        <div id="title" data-swiper-parallax="-900">
                            <h2>MADURAI</h2>
                        </div>
                        <div id="text" data-swiper-parallax="-500">
                            <p>Madurai is one of the many temple towns in the state which is named after the groves, clusters or forests dominated by a particular variety of a tree or shrub and the same variety of tree or shrub sheltering the presiding deity.
                            </p>
                        </div>
                        <div id="submit" data-swiper-parallax="-500">
                            <Link to="/filteredcars">Search Cars</Link>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide">
                    <div className="content" data-swiper-parallax="-40 ">
                            <video loop autoFocus autoPlay style={{width:"100%"}} id="clips " src={kerala} />
                        <div id="title" data-swiper-parallax="-700 ">
                            <h2>KERALA</h2>
                        </div>
                        <div id="text" data-swiper-parallax="-600">
                            <p>Kerala, a small beautiful state situated in the southwest corner of India is one of the most popular tourist destinations in the country. Kerala has 14 districts with Thiruvananthapuram.
                            </p>
                        </div>
                        <div id="submit" data-swiper-parallax="-500">
                            <Link to="/filteredcars">
                                coming soon...
                            </Link>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide">
                    <div className="content" data-swiper-parallax="-40">
                            <video loop autoFocus autoPlay style={{width:"100%"}} id="clips" src={bangalore} />
                        <div id="title" data-swiper-parallax="-700 ">
                            <h1>BANGALORE</h1>
                        </div>
                        <div id="text" data-swiper-parallax="-600 ">
                            <p>Having evolved gradually from being the Garden city to the Silicon Valley of India, Bangalore is India's third-largest city. Bangalore is loved for its pleasant weather, beautiful parks and the many lakes here.
                            </p>
                        </div>
                        <div id="submit" data-swiper-parallax="-500">
                            <Link to="/filteredcars">
                                Coming soon...
                            </Link>
                        </div>
                    </div>
                </div>
        </SwiperSlide> 
      </Swiper>
    <section id="home">
        <div className="swiper-container">
            <div className="parallax-bg" data-swiper-parallax="-23% "></div>
            <div className="swiper-wrapper">
            </div>
        </div>
    </section>
    </>
  )
} 

