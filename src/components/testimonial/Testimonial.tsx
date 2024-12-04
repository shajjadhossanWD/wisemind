"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import avatar_img1 from "@/assets/img/clients/sara.jpeg";
import avatar_img2 from "@/assets/img/clients/ankit.jpeg";
import avatar_img3 from "@/assets/img/clients/María.jpeg";
import avatar_img4 from "@/assets/img/clients/Connor.jpeg";
import avatar_img5 from "@/assets/img/clients/Liu.jpeg";
import avatar_img6 from "@/assets/img/clients/Fatima.png";
import avatar_img7 from "@/assets/img/clients/Giulia.jpeg";
import avatar_img8 from "@/assets/img/clients/Oliver.jpeg";
import avatar_img9 from "@/assets/img/clients/Klara.jpeg";
import avatar_img10 from "@/assets/img/clients/Hans.jpeg";
import testimonial_thumb from "@/assets/img/client.jpg";
import Image, { StaticImageData } from "next/image";

interface DataType {
  img: StaticImageData;
  name: string;
  location: string;
  des: string;
}
[];
const testimonial_data: DataType[] = [
  {
    img: avatar_img1,
    name: `Sarah Johnson`,
    location: `From US`,
    des: `“Wisemind’s AI-driven solution optimized our operations and provided deep insights. Their dedication to innovation is truly commendable.”`,
  },
  {
    img: avatar_img2,
    name: `Ankit Sharma`,
    location: `From India`,
    des: `“Their expertise in software development transformed our workflow. Wisemind delivered a scalable product that exceeded all expectations!”`,
  },
  {
    img: avatar_img3,
    name: `María López`,
    location: `From Spain`,
    des: `“El diseño de UI/UX de Wisemind fue intuitivo y atractivo. A nuestros usuarios les encanta la nueva interfaz, y ha mejorado nuestras tasas de retención.”`,
  },
  {
    img: avatar_img4,
    name: `Connor Walsh`,
    location: `From Ireland`,
    des: `“Wisemind developed a cutting-edge machine learning model for us. Their technical skills and understanding of our business needs were impressive.”`,
  },
  {
    img: avatar_img5,
    name: `Liu Zhang`,
    location: `From China`,
    des: `“他们的AI驱动推荐系统彻底改变了我们与客户互动的方式。Wisemind的方法既具有战略性，又高效。”`,
  },
  {
    img: avatar_img6,
    name: `Fatima Al-Mansoori`,
    location: `From UAE`,
    des: `“The custom software Wisemind built for us is fast and reliable. Their focus on efficient, user-friendly design was exactly what we needed.”`,
  },
  {
    img: avatar_img7,
    name: `Giulia Romano`,
    location: `From Italy`,
    des: `“Wisemind’s UI/UX revamp made our app visually stunning and easy to navigate. The team’s creativity and professionalism were outstanding!”`,
  },
  {
    img: avatar_img8,
    name: `Oliver Evans`,
    location: `From Australia`,
    des: `“Their AI/ML solutions automated our data analysis processes. Wisemind’s insights have significantly improved our decision-making capabilities.”`,
  },
  {
    img: avatar_img9,
    name: `Klara Horvat`,
    location: `From Croatia`,
    des: `“Wisemind’s software development team built us a robust, scalable platform. Their attention to detail and seamless delivery were impressive.”`,
  },
  {
    img: avatar_img10,
    name: `Hans Fischer`,
    location: `From Germany`,
    des: `“Die neu gestaltete UI/UX-Erfahrung von Wisemind war ein Wendepunkt. Sie verstehen es wirklich, die Benutzerzufriedenheit durch Design zu verbessern.”`,
  },
];

const Testimonial = ({ style_service }: any) => {
  return (
    <>
      <section
        className={`${
          style_service ? "cs_shape_wrap_3" : "cs_primary_bg cs_shape_wrap_2"
        }`}
      >
        {style_service ? null : (
          <>
            <div className="cs_shape_1">
              <svg
                width="1041"
                height="1005"
                viewBox="0 0 1041 1005"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.3"
                  cx="538.5"
                  cy="502.5"
                  r="501.5"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="501.5"
                  cy="526.5"
                  r="458.5"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="453"
                  cy="570"
                  r="424"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="396"
                  cy="591"
                  r="377"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="330"
                  cy="630"
                  r="329"
                  stroke="#454545"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="cs_shape_2">
              <svg
                width="149"
                height="149"
                viewBox="0 0 149 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.23">
                  <path
                    d="M54.7532 1.16162C47.1932 42.2265 41.0646 48.3548 0 55.9147C41.065 63.4746 47.1932 69.6029 54.7532 110.668C62.3131 69.6029 68.4414 63.4746 109.506 55.9147C68.4414 48.3548 62.3128 42.2265 54.7532 1.16162Z"
                    fill="#454545"
                  />
                  <path
                    d="M114.179 78.1968C109.372 104.312 105.474 108.21 79.3584 113.018C105.474 117.825 109.372 121.723 114.179 147.838C118.987 121.723 122.885 117.825 149 113.018C122.884 108.21 118.987 104.312 114.179 78.1968Z"
                    fill="#454545"
                  />
                </g>
              </svg>
            </div>
          </>
        )}

        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div>
                <Image src={testimonial_thumb} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div
                className={`cs_testimonial ${
                  style_service ? "cs_style_2" : "cs_style_1 cs_color_1"
                }`}
              >
                <h2 className="cs_testimonial_title">
                  Some Of Our Respected Happy Clients Says
                </h2>
                <Swiper
                  loop={true}
                  speed={1000}
                  autoplay={true}
                  modules={[Autoplay]}
                  pagination={{
                    el: ".cs_pagination",
                    clickable: true,
                  }}
                  className="cs_slider cs_slider_4"
                >
                  {testimonial_data.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div className="cs_testimonial_box">
                        <div className="cs_testimonial_quote_icon">
                          <svg
                            width="61"
                            height="44"
                            viewBox="0 0 61 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 26.2855H12.9844L4.32807 43.4283H17.3125L25.9689 26.2855V0.571289H0V26.2855Z"
                              fill="#007AFF"
                            />
                            <path
                              d="M34.625 0.571289V26.2855H47.6094L38.9531 43.4283H51.9375L60.5939 26.2855V0.571289H34.625Z"
                              fill="#007AFF"
                            />
                          </svg>
                        </div>
                        <blockquote className="cs_testimonial_text">
                          {item.des}
                        </blockquote>
                        <div className="cs_testimonial_meta">
                          <div className="cs_testimonial_avatar">
                            <Image src={item.img} alt="Avatar" />
                          </div>
                          <div className="cs_testimonial_meta_right">
                            <h3 className="cs_testimonial_avatar_name">
                              {item.name}
                            </h3>
                            <div className="cs_testimonial_avatar_designation">
                              {item.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="cs_pagination cs_style1"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {style_service ? null : (
          <div className="cs_height_150 cs_height_lg_60"></div>
        )}
      </section>
      {style_service ? null : (
        <div className="cs_height_115 cs_height_lg_60"></div>
      )}
    </>
  );
};

export default Testimonial;
