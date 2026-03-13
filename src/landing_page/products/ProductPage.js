import React from "react";
import LeftSection from "./LeftSection";
import Hero from "./Hero";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite (1).png"
        productName="Kite"
        productDescription="Our ultra-fast trading platform with streaming market data, advanced charting tools, and a seamless trading experience."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console (1).png"
        productName="Console"
        productDescription="The central deshboard for your Niveshika account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/coin (1).png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commissition-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
       imageURL="media/images/kiteconnect (1).png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build investment products with our APIs and get free access to market data and order execution."
        learnMore=""
        />
      <LeftSection
        imageURL="media/images/varsity (1).png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stack market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="fs-5 text-center text-muted mt-5 mb-5">Want to know more about our technology stack? Check out the Niveshika.tech blog.</p>
      <Universe />
    </>
  );
}

export default ProductPage;
