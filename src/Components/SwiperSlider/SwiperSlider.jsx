import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";

const SwiperSlider = ({ images }) => {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500, // Time between slides (in milliseconds)
          disableOnInteraction: false, // Allow autoplay even after user interaction
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {images.map((hero, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src={hero.img}
                alt="hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
              <div className="absolute top-1/2 md:right-32 transform -translate-y-1/2 text-white text-right max-w-lg flex flex-col md:justify-end justify-center items-center md:items-end w-full">
                <h2 className="md:text-4xl text-3xl font-bold text-center md:text-end">
                  {hero?.heading}
                </h2>
                <p className="mt-4 mb-8 text-lg">{hero?.para}</p>
                <NavLink
                  className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
                  to={hero.url}
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
