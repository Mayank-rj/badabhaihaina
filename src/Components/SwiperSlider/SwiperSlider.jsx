import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
          <SwiperSlide key={hero}>
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src={hero.img}
                alt="hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
              <div className="absolute top-1/2 left-16 transform -translate-y-1/2 text-white max-w-lg">
                <h2 className="text-4xl font-bold">{hero?.heading}</h2>
                <p className="mt-4 text-lg">{hero?.para}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
