import React from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Addcartbanner from "../Component/Addcart/Addcartbanner";
import Addcarttabbing from "../Component/Addcart/Addcarttabbing";

export default function addcarttheme() {
  return (
    <div>
      <Header />
      <Addcartbanner />
      <Addcarttabbing />
      <Footer />
    </div>
  );
}
