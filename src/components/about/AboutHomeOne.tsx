"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}
[];

const about_slider: DataType[] = [
  {
    img: "/assets/img/about1.jpg",
    sub_title: "Our Mission",
    title: `Empowering Businesses with Innovation and Creativity`,
    des: `At Wisemind, our mission is to help businesses unlock their full potential through innovative digital solutions. From software development and AI integration to UI/UX design, 2D/3D animation, and video editing, we bring your vision to life. Let us be your partner in navigating the evolving digital landscape.`,
  },
  {
    img: "/assets/img/about2.jpg",
    sub_title: "Our Vision",
    title: `Shaping the Future of Digital Transformation`,
    des: `We envision a future where businesses thrive by embracing technology and creativity. With expertise in cloud solutions, cybersecurity, software development, and creative services like animation and graphic design, we aim to redefine how businesses connect with their audiences.`,
  },
  {
    img: "/assets/img/about3.jpg",
    sub_title: "Why Choose Us",
    title: `Your Trusted Partner for Comprehensive Solutions`,
    des: `At Wisemind, we offer a unique blend of technical expertise and creative brilliance. From building secure, scalable software to crafting stunning designs and immersive animations, we provide end-to-end solutions tailored to your needs. Let us help you excel in the digital era.`,
  },
];

const AboutHomeOne = () => {
  return (
    <>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        pagination={{
          el: ".cs_pagination",
          clickable: true,
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> 
             ${" / "}
             <span class="${totalClass}"></span>`;
          },
        }}
        className="cs_slider cs_slider_2"
      >
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_about cs_style_1">
              <div
                className="cs_about_bg cs_bg"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="container">
                <div className="cs_about_text">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <div className="cs_section_subtitle">
                        {item.sub_title}
                      </div>
                      <h2 className="cs_section_title">{item.title}</h2>
                    </div>
                  </div>
                  <div className="cs_height_40 cs_height_lg_30"></div>
                  <p className="cs_m0">{item.des}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">
              <div
                style={{ cursor: "pointer" }}
                className="cs_swiper_button_prev"
              >
                <svg
                  width="82"
                  height="24"
                  viewBox="0 0 82 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="cs_swiper_button_next"
              >
                <svg
                  width="82"
                  height="24"
                  viewBox="0 0 82 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutHomeOne;
