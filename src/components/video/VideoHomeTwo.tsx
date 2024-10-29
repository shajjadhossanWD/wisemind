'use client';

import React from 'react';
const VideoHomeTwo = ({ setIsVideoOpen }: any) => {

  return (
    <>
      <div className="cs_height_100 cs_height_lg_60"></div>
      <div className="cs_parallax">
        <a onClick={() => setIsVideoOpen(true)}
          className="cs_digital_agency cs_video_block cs_style1 cs_video_open cs_bg cs_parallax_bg"
          style={{ backgroundImage: `url(/assets/img/video_block_2.jpg)`, cursor: "pointer" }}>
          <span className="cs_player_btn cs_accent_color">
            <span></span>
          </span>
        </a>
      </div>

    </>
  );
};

export default VideoHomeTwo;