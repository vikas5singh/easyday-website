import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "./Banner";
import StoreList from "./StoreList";


export default function hometheme() {
    return (
        <div>
            <Header />
            <Banner />
            <StoreList />
            <Footer />
        </div>
    );
}
