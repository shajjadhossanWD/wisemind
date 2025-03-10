"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroHomeOne from "@/components/hero/HeroHomeOne";
import AboutHomeOne from "@/components/about/AboutHomeOne";
import ServiceHomeOne from "@/components/service/ServiceHomeOne";
import MarqueeAreaHomeOne from "@/components/brand/MarqueeAreaHomeOne";
import PortfolioHomeOne from "@/components/portfolio/PortfolioHomeOne";
import AwardsHomeOne from "@/components/awards/AwardsHomeOne";
import Testimonial from "@/components/testimonial/Testimonial";
import FunFactHomeOne from "@/components/funfact/FunFactHomeOne";
import VideoHomeOne from "@/components/video/VideoHomeOne";
import BlogHomeOne from "@/components/blog/BlogHomeOne";
import SubscribeHomeOne from "@/components/subscribe/SubscribeHomeOne";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import VideoPopup from "@/components/modals/VideoPopup";

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  useEffect(() => {
    // Google Tag Manager script
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P4ZPMJQB');
    `;
    document.head.appendChild(script);

    // Google Tag Manager (noscript)
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P4ZPMJQB"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertBefore(noscript, document.body.firstChild);
  }, []);

  return (
    <Wrapper>
      {/* Google Search Console Meta Tag */}
      <Head>
        <meta name="google-site-verification" content="_hNoKKxhdt_ZFloN1oXkw3f3cxH0AaA8ALghwAYakkI" />
      </Head>

      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeOne />
            <MarqueeAreaHomeOne />
            <AboutHomeOne />
            <ServiceHomeOne />
            <PortfolioHomeOne />
            {/* <AwardsHomeOne />  */}
            <Testimonial />
            <FunFactHomeOne />
            <VideoHomeOne setIsVideoOpen={setIsVideoOpen} />
            <BlogHomeOne /> 
            <SubscribeHomeOne />
            <BrandHomeOne style_2={false} />
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"auz_pYskYNY"}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;



// "use client";

// import React, { useState } from "react";
// import HeaderOne from "@/layouts/headers/HeaderOne";
// import HeroHomeOne from "@/components/hero/HeroHomeOne";
// import AboutHomeOne from "@/components/about/AboutHomeOne";
// import ServiceHomeOne from "@/components/service/ServiceHomeOne";
// import MarqueeAreaHomeOne from "@/components/brand/MarqueeAreaHomeOne";
// import PortfolioHomeOne from "@/components/portfolio/PortfolioHomeOne";
// import AwardsHomeOne from "@/components/awards/AwardsHomeOne";
// import Testimonial from "@/components/testimonial/Testimonial";
// import FunFactHomeOne from "@/components/funfact/FunFactHomeOne";
// import VideoHomeOne from "@/components/video/VideoHomeOne";
// import BlogHomeOne from "@/components/blog/BlogHomeOne";
// import SubscribeHomeOne from "@/components/subscribe/SubscribeHomeOne";
// import BrandHomeOne from "@/components/brand/BrandHomeOne";
// import FooterOne from "@/layouts/footers/FooterOne";
// import Wrapper from "@/layouts/Wrapper";
// import VideoPopup from "@/components/modals/VideoPopup";

// // export const metadata = {
// //   title: "Wisemind - Digital  Creative Wisemind Next js Template",
// // };

// const index = () => {
//   const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

//   return (
//     <Wrapper>
//       <HeaderOne />
//       <div id="smooth-wrapper">
//         <div id="smooth-content">
//           <main>
//             <HeroHomeOne />
//             <MarqueeAreaHomeOne />
//             <AboutHomeOne />
//             <ServiceHomeOne />
//             <PortfolioHomeOne />
//             {/* <AwardsHomeOne />  */}
//             <Testimonial />
//             <FunFactHomeOne />
//             <VideoHomeOne setIsVideoOpen={setIsVideoOpen} />
//             {/* <BlogHomeOne />  */}
//             <SubscribeHomeOne />
//             <BrandHomeOne style_2={false} />
//           </main>
//           <FooterOne />
//         </div>
//       </div>

//       {/* video modal start */}
//       <VideoPopup
//         isVideoOpen={isVideoOpen}
//         setIsVideoOpen={setIsVideoOpen}
//         videoId={"auz_pYskYNY"}
//       />
//       {/* video modal end */}
//     </Wrapper>
//   );
// };

// export default index;
