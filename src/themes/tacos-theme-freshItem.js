import React from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Tacosbanner from "../Component/FreshMarket/Tacosbanner";
import Tacostabbing from "../Component/FreshMarket/Tacostabbing";
import { useParams } from "react-router-dom";
export default function TacosthemeforFreshItem() {
  const { editId } = useParams();

  return (
    <div>
      <Header />
      <Tacosbanner editId={editId} />
      <Tacostabbing editId={editId} />
      <Footer />
    </div>
  );
}
