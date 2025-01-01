import React from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Addcartbanner from "../Component/Addcart/Addcartbanner";
import Securecheckout from "../Pages/Securecheckout/Securecheckout";

export default function SEcurecheckouttheme() {
  return (
    <div>
      <Header />
      {/* <Addcartbanner /> */}
      <Securecheckout />
      <Footer />
    </div>
  );
}
