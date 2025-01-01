import React from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Trackorderpage from "../Pages/Trackorderpage/Trackorderpage";
import { useParams } from "react-router-dom";

export default function TRackordertheme() {
  const { Id } = useParams();

  return (
    <div>
      <Header />
      <Trackorderpage Id={Id} />
      <Footer />
    </div>
  );
}
