import React from "react";
import Link from "next/link";

interface DataType {
  id: number;
  title: string;
  description: string;
}

const banner_data: DataType[] = [
  {
    id: 1,
    title: `AI/ML Solutions`,
    description: `Unlock the potential of Artificial Intelligence and Machine Learning to drive innovation and optimize business processes. We deliver tailored AI/ML solutions that enhance decision-making, improve operational efficiency, and foster growth.`,
  },
  {
    id: 2,
    title: `Web Development`,
    description: `We specialize in creating high-performing, responsive websites that provide a seamless user experience across all devices. Our web development services focus on functionality, speed, and scalability to meet your business goals.`,
  },
  {
    id: 3,
    title: `Mobile Application Development`,
    description: `We design and develop custom mobile applications for both Android and iOS, ensuring robust performance, security, and an intuitive user experience. Our apps are built to drive engagement and meet the evolving needs of your business.`,
  },
  {
    id: 4,
    title: `UI/UX Design`,
    description: `Our UI/UX design services focus on delivering user-centric designs that are both visually appealing and highly functional. We aim to optimize user experiences, improve usability, and ensure that your digital products are intuitive and easy to navigate.`,
  },
  {
    id: 5,
    title: `Brand Design`,
    description: `We create compelling brand identities that resonate with your target audience. Our brand design services include logo creation, typography, color schemes, and messaging, all designed to build a strong, cohesive brand presence in the market.`,
  },
  {
    id: 6,
    title: `2D/3D Animation`,
    description: `We produce high-quality 2D and 3D animations that effectively communicate your brand story. From explainer videos to promotional content, our animations capture attention and engage your audience, enhancing your digital presence.`,
  },
  {
    id: 7,
    title: `E-commerce Solutions`,
    description: `Our e-commerce solutions are designed to provide secure, user-friendly platforms that enhance the online shopping experience. We build scalable, custom e-commerce sites that drive sales, streamline transactions, and improve customer satisfaction.`,
  },
  {
    id: 8,
    title: `ERP Solutions`,
    description: `We implement integrated Enterprise Resource Planning (ERP) systems to streamline your business operations. Our ERP solutions enable you to efficiently manage resources, improve data accessibility, and make informed decisions across departments.`,
  },
  {
    id: 9,
    title: `DevOps`,
    description: `We help bridge the gap between development and operations, implementing DevOps practices to automate processes and improve collaboration. Our solutions enable faster software delivery, enhanced system reliability, and continuous integration.`,
  },
  {
    id: 10,
    title: `Digital Marketing`,
    description: `Our digital marketing services are designed to increase your online visibility and drive business growth. We provide comprehensive strategies, including SEO, SEM, social media marketing, and email campaigns, to effectively engage your target audience and generate leads.`,
  },
];

const HeroService = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section className="position-relative">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_word_writting">
                Transform Your Business with WiseMind’s IT Solutions
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_1_list">
            {banner_data.map((item, i) => (
              <div key={i} className="cs_card cs_style_1 anim_div_ShowDowns">
                <div className="cs_card_left">
                  <div
                    className="cs_card_number cs_primary_font"
                    style={{
                      backgroundImage: `url('/assets/img/hero_img_1.jpg')`,
                    }}
                  >
                    {i < 9 ? `0${i + 1}` : i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href="/service-details">{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle">{item.description}</div>
                  </div>
                </div>
                {/* <div className="cs_card_link_wrap">
                  <Link href="/service-details" className="cs_card_link">
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroService;
