/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Row, Col, Card } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

const { Meta } = Card;

const ProviderTestimonials = ({ testimonials }: any) => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation only once
    });
  }, []);

  return (
    <div className="provider-testimonials" data-aos="fade-up">
      <h2>Top 6 Provider Testimonials</h2>
      <Row gutter={[16, 16]}>
        {testimonials.map((testimonial: any) => (
          <Col key={testimonial.id} xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card hoverable>
              <img
                src={testimonial.imageUrl}
                alt={testimonial.fullName}
                style={{ width: "100%" }}
              />
              <Meta
                title={testimonial.fullName}
                description={testimonial.title}
              />
              <p>{testimonial.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProviderTestimonials;
