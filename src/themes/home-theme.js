import React from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Homeslider from "../Component/Home/Homeslider";
import Hometabbing from "../Component/Home/Hometabbing";


export default function hometheme() {
  return (
    <div>
      <Header />
      <Homeslider />
      <Hometabbing />
      <Footer />
    </div>
  );
}
