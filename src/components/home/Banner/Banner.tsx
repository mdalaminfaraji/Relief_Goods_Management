// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/j60BTd7/boat.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/r2SMHmt/rice-1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/6F9cPtC/Relief1.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
