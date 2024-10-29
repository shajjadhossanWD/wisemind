// app/not-found.js
"use client";

import React from "react";
import Wrapper from "@/layouts/Wrapper";
import Error from "@/components/error";

const NotFound = () => {
  return (
    <Wrapper>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Error />
          </main>
        </div>
      </div>
    </Wrapper>
  );
};

export default NotFound;
