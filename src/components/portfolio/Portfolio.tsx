"use client";

import React, { useState } from "react";
// import portfolio_data from '@/data/portfolio_data';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import portfolio_img_1 from "@/assets/img/portfolio/p-ai-1.png";
import portfolio_img_2 from "@/assets/img/portfolio/p-ai-2.png";
import portfolio_img_3 from "@/assets/img/portfolio/p-ai-3.png";
import portfolio_img_4 from "@/assets/img/portfolio/p-ai-4.png";
import portfolio_img_5 from "@/assets/img/portfolio/p-ai-5.png";
import portfolio_img_6 from "@/assets/img/portfolio/p-cw.png";
import portfolio_img_7 from "@/assets/img/portfolio/p-cw-2.png";
import portfolio_img_8 from "@/assets/img/portfolio/p-ec-1.png";
import portfolio_img_9 from "@/assets/img/portfolio/p-hotel.png";
import portfolio_img_10 from "@/assets/img/portfolio/p-tw.png";

interface DataType {
  id: number;
  category: string;
  img: StaticImageData;
  title: string;
  des: string;
}

const portfolio_data: DataType[] = [
  // portfolio pages
  {
    id: 1,
    category: "AI/ML",
    img: portfolio_img_1,
    title: `Custom Knowledge Chatbot LLM`,
    des: "AI Development / AI Detection",
  },
  // {
  //   id: 2,
  //   category: "AI/ML",
  //   img: portfolio_img_2,
  //   title: `AI Traffic Detection`,
  //   des: "AI Development / AI Detection",
  // },
  {
    id: 3,
    category: "AI/ML",
    img: portfolio_img_3,
    title: "Plant Detection",
    des: "AI Development / AI Detection",
  },
  {
    id: 4,
    category: "AI & Software",
    img: portfolio_img_4,
    title: "AI Telemedicine Dashboard",
    des: "AI & Software Development / Dashboard",
  },
  {
    id: 5,
    category: "AI & Software",
    img: portfolio_img_5,
    title: "AI SAAS Dashboard",
    des: "AI & Software Development / SAAS",
  },
  {
    id: 6,
    category: "Software Development",
    img: portfolio_img_6,
    title: "Construction Website",
    des: "Software Development / Web App",
  },
  {
    id: 7,
    category: "Software Development",
    img: portfolio_img_7,
    title: "Construction Website",
    des: "Software Development / Web App",
  },
  {
    id: 8,
    category: "Software Development",
    img: portfolio_img_8,
    title: "E-Commerce Website",
    des: "Software Development / Web App",
  },
  {
    id: 9,
    category: "Software Development",
    img: portfolio_img_9,
    title: "Hotel Management Website",
    des: "Software Development / Web App",
  },
  {
    id: 10,
    category: "Software Development",
    img: portfolio_img_10,
    title: "Tech Website",
    des: "Software Development / Web App",
  },
];

// data
const categories = [
  "All",
  ...new Set(portfolio_data.map((item) => item.category)),
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_50 cs_height_lg_25"></div>
      <section className="cs_ui_design">
        <div className="container">
          <div>
            <div className="row">
              <div className="cs_isotop_item_menu col-md-12">
                <ul className="anim_div_ShowZoom style_active">
                  {categories.map((cate, i) => (
                    <React.Fragment key={i}>
                      <li
                        onClick={() => filterItems(cate)}
                        className={`${cate === activeCategory ? "active" : ""}`}
                      >
                        {cate}
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs_isotop_items_details row">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="col-md-4 cs_item cs_ui_design cs_development"
                >
                  <div
                    // href="/portfolio-details"
                    className="cs_portfolio cs_style_1"
                  >
                    <div className="cs_portfolio_img">
                      <Image src={item.img} className="img-fluid" alt="Thumb" />
                    </div>
                    <div className="cs_portfolio_overlay"></div>
                    <div className="cs_portfolio_info">
                      <h2
                        className="cs_portfolio_title"
                        style={{ color: "#007aff", fontSize: "20px" }}
                      >
                        {item.title}
                      </h2>
                      <div className="cs_portfolio_subtitle">{item.des}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cs_height_70 cs_height_lg_30"></div>
          <div>
            <div className="cs_hero_btn_wrap text-center">
              <div className="cs_round_btn_wrap">
                <a href="#" className="cs_hero_btn cs_round_btn btn-item">
                  <span></span> Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
