import React from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Tacosbanner from "../Component/Tacos/Tacosbanner";
import Tacostabbing from "../Component/Tacos/Tacostabbing";
import { useParams } from "react-router-dom";
export default function Tacostheme() {
  const { storeId, editId } = useParams();

  return (
    <div>
      <Header />
      <Tacosbanner storeId={storeId} editId={editId} />
      <Tacostabbing storeId={storeId} editId={editId} />
      <Footer />
    </div>
  );
}
