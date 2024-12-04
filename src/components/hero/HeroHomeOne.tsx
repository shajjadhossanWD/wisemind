"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}

const hero_slider: DataType[] = [
  {
    img: `/assets/img/hero_img_1.jpg`,
    sub_title: "Software Development & Solutions Company",
    title: "Expert Digital & Creative Services for Your Business",
    des: `Welcome to our versatile solutions company! We specialize in empowering businesses to thrive in the digital age. From cutting-edge software development and cloud solutions to captivating 2D/3D animations, UI/UX design, video editing, and graphics, we offer a wide range of services tailored to your unique needs. Let us help you innovate, design, and excel in today’s ever-evolving digital landscape.`,
  },
  {
    img: `/assets/img/hero_img_1.jpg`,
    sub_title: "Software Development & Solutions Company",
    title: "Expert Digital & Creative Services for Your Business",
    des: `Welcome to our versatile solutions company! We specialize in empowering businesses to thrive in the digital age. From cutting-edge software development and cloud solutions to captivating 2D/3D animations, UI/UX design, video editing, and graphics, we offer a wide range of services tailored to your unique needs. Let us help you innovate, design, and excel in today’s ever-evolving digital landscape.`,
  },
  {
    img: `/assets/img/hero_img_1.jpg`,
    sub_title: "Software Development & Solutions Company",
    title: "Expert Digital & Creative Services for Your Business",
    des: `Welcome to our versatile solutions company! We specialize in empowering businesses to thrive in the digital age. From cutting-edge software development and cloud solutions to captivating 2D/3D animations, UI/UX design, video editing, and graphics, we offer a wide range of services tailored to your unique needs. Let us help you innovate, design, and excel in today’s ever-evolving digital landscape.`,
  },
];

const HeroHomeOne = () => {
  return (
    <>
      <section className="dark">
        <Swiper
          loop={true}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="cs_slider cs_slider_1"
        >
          {hero_slider.map((item, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div
                className="cs_hero cs_style1 cs_center cs_parallax cs_bg"
                // style={{ backgroundColor: "#181818", color: "#fff" }}
                style={{
                  backgroundImage: "url(/assets/img/bg-img.jpg)",
                }}
              >
                <div className="container">
                  <div className="cs_hero_text">
                    <div
                      className="cs_hero_mini_title"
                      style={{ color: "#fff" }}
                    >
                      <svg
                        width="134"
                        height="12"
                        viewBox="0 0 134 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M133.53 6.53033C133.823 6.23744 133.823 5.76256 133.53 5.46967L128.757 0.696699C128.464 0.403806 127.99 0.403806 127.697 0.696699C127.404 0.989593 127.404 1.46447 127.697 1.75736L131.939 6L127.697 10.2426C127.404 10.5355 127.404 11.0104 127.697 11.3033C127.99 11.5962 128.464 11.5962 128.757 11.3033L133.53 6.53033ZM0 6.75H133V5.25H0V6.75Z"
                          fill="#fff"
                        />
                      </svg>
                      {item.sub_title}
                    </div>
                    <div className="cs_height_20 cs_height_lg_20"></div>
                    <h1 className="cs_hero_title">{item.title}</h1>
                    <div className="cs_height_70 cs_height_lg_60"></div>
                    <div className="cs_hero_text_in d-flex">
                      <div
                        className="cs_hero_btn_wrap"
                        style={{ marginRight: "100px" }}
                      >
                        <div className="cs_round_btn_wrap">
                          <Link
                            href="/contact"
                            className="cs_hero_btn cs_round_btn btn-item"
                          >
                            <span></span>
                            Get Quotation
                          </Link>
                        </div>
                      </div>
                      <div
                        className="cs_hero_subtitle"
                        style={{ color: "#fff" }}
                      >
                        {item.des}
                      </div>
                      {/* <div className="cs_height_65 cs_height_lg_40"></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="cs_pagination cs_style1"></div>
        </Swiper>
      </section>
    </>
  );
};

export default HeroHomeOne;
