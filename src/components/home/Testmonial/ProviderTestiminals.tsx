/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";

const ProviderTestimonials = ({ testimonials }: any) => {
  return (
    <div
      className="provider-testimonials"
      data-aos="fade-up"
      style={{ maxWidth: "1280px", margin: "40px auto", paddingInline: "20px" }}
    >
      <h2 style={{ textAlign: "center", margin: "20px 0 10px 0" }}>
        Provider Testimonials
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial: any) => (
          <SwiperSlide key={testimonial.id}>
            <Card hoverable>
              <Avatar
                size={64}
                icon={<UserOutlined />}
                src={testimonial.imageUrl}
                alt={testimonial.fullName}
              />
              <Card.Meta
                title={testimonial.fullName}
                description={testimonial.title}
              />
              <p>{testimonial.description}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProviderTestimonials;
