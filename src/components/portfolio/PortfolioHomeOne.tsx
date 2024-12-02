"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import portfolio_img_1 from "@/assets/img/portfolio/p-ai-1.png";
import portfolio_img_2 from "@/assets/img/portfolio/p-ai-2.png";
import portfolio_img_3 from "@/assets/img/portfolio/p-ai-3.png";
import portfolio_img_4 from "@/assets/img/portfolio/p-ai-4.png";
import portfolio_img_5 from "@/assets/img/portfolio/p-ai-5.png";
import portfolio_img_6 from "@/assets/img/portfolio/p-cw.png";

interface DataType {
  img: StaticImageData;
  title: string;
  category: string;
}
[];

const portfolio_slider: DataType[] = [
  {
    img: portfolio_img_1,
    title: `Custom Knowledge Chatbot LLM`,
    category: `AI Development / LLM`,
  },
  // {
  //   img: portfolio_img_2,
  //   title: `AI Traffic Detection`,
  //   category: `AI Development / AI Detection`,
  // },
  {
    img: portfolio_img_3,
    title: `Plant Detection`,
    category: `AI Development / AI Detection`,
  },
  {
    img: portfolio_img_4,
    title: `AI Telemedicine Dashboard`,
    category: `AI & Software Development / Dashboard`,
  },
  {
    img: portfolio_img_5,
    title: `AI SAAS Dashboard`,
    category: `AI & Software Development / SAAS`,
  },
  {
    img: portfolio_img_6,
    title: `Construction Website`,
    category: `Software Development / Construction`,
  },
];

const PortfolioHomeOne = () => {
  return (
    <>
      <div className="cs_horizontal_scroll_wrap">
        <div className="cs_height_145 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Portfolio
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
        <Swiper
          loop={true}
          speed={1000}
          slidesPerView="auto"
          pagination={{
            el: ".cs_pagination",
            clickable: true,
          }}
          className="cs_horizontal_scrolls anim_div_ShowDowns"
        >
          {portfolio_slider.map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="cs_horizontal_scroll">
                <div
                  // href="/portfolio-details"
                  className="cs_portfolio cs_style_1"
                >
                  <div className="cs_portfolio_img">
                    <Image src={item.img} alt="Thumb" />
                  </div>
                  <div className="cs_portfolio_overlay"></div>
                  <div className="cs_portfolio_info">
                    <h2
                      className="cs_portfolio_title"
                      style={{ color: "#007aff", fontSize: "20px" }}
                    >
                      {item.title}
                    </h2>
                    <div className="cs_portfolio_subtitle">{item.category}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default PortfolioHomeOne;
