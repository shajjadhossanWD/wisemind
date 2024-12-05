import React from "react";
import agency_story_1 from "@/assets/img/agency_story_1.jpg";
import agency_story_2 from "@/assets/img/agency_story_2.jpg";
import agency_story_4 from "@/assets/img/agency_story_4.jpg";
import agency_story_3 from "@/assets/img/agency_story_3.jpg";
import Image from "next/image";

interface DataType {
  subtitle: string;
  title: string;
  des: string;
  des2: string;
}
const about_content: DataType = {
  subtitle: `Our Company Story`,
  title: `Our Company Mission And Vision`,
  des: `At WiseMind, we are dedicated to crafting digital experiences that simplify and elevate the lives of our clients. Our mission is to deliver innovative, scalable, and efficient IT solutions powered by the passion and talent of our dedicated team.`,
  des2: `We aim to be a global leader in IT and software outsourcing, renowned for delivering solutions that drive business success and enhance user experiences worldwide.`,
};
const { subtitle, title, des, des2 } = about_content;

const About = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="cs_primary_bg">
          <div className="container">
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_section_heading_hr cs_style_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">
                    {subtitle}
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text">
                      <h3 className="cs_section_title_3 anim_div_ShowLeftSide">
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="anim_div_ShowRightSide">
                    <p className="cs_ternary_color">{des}</p>
                    <p className="cs_ternary_color">{des2}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_385 cs_height_lg_120"></div>
          </div>
        </div>
        <div className="container">
          <div className="cs_agency agency_about_images_posation">
            <div className="cs_img_section_1">
              <Image src={agency_story_1} alt="image-here" className="w-100" />
            </div>
            <div className="cs_img_section_2">
              <Image src={agency_story_2} alt="image-here" className="w-100" />
            </div>
            <div className="cs_img_section_3">
              <div className="text-end">
                <Image src={agency_story_4} alt="image-here" />
                <Image
                  src={agency_story_3}
                  className="w-100"
                  alt="image-here"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
