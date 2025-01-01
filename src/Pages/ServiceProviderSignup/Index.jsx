import React, { useEffect, useState } from "react";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerSec from "./Bannersec/Index";
import DriverNavigation from "../../Component/DriverSignUP/DriverNavigation/Index";
import IconSec from "../../Component/DriverSignUP/IconSec/Index";
import HowItWork from "../../Component/DriverSignUP/HowItWork/Index";
import DeliveryRequirement from "../../Component/DriverSignUP/DeliveryRequirement/Index";
import AppLink from "../../Component/DriverSignUP/Applink/Index";
import { getHomePage, getHomeData, faqList } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import WelcomeSection from "../../Component/Home/WelcomeSection";
import Features from "../../Component/Home/Features";
import OurService from "../../Component/Home/OurService";
import Faq from "../../Component/DriverSignUP/Faq";
import SignUpForm from "./Bannersec/SignUpForm";
import BlogSection from "../../Component/Home/BlogSection";
export const DriverSignUp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomePage())
    dispatch(faqList({}));
    dispatch(getHomeData({
      "customerLocation": {
        "lng": 77.10249019999999,
        "lat": 28.7040592
      },
    }))
  }, [])
  const homePage = useSelector((s) => s.restaurant.homePage)
  const homeData = useSelector((s) => s.restaurant?.homeData)
  const faqlist = useSelector((s) => s.address.faqs);
  return (
    <>
      {/* <Header /> */}
      <div className="py-2">
        <DriverNavigation title="Service Provider" isApp={true} SignUpForm={SignUpForm} />
        <BannerSec title="Service Provider" isApp={true} image="serviceprovider.jpg" />
        <WelcomeSection />
        <OurService data={homeData?.resdata} />
        <IconSec title="Service Provider" text="service" desc=" Grab your car, bike, scooter, or even shoes and deliver
                  whenever you want—for an hour, a weekend, or throughout the
                  week."/>
        <HowItWork title="Service Provider" isApp={true} />
        <DeliveryRequirement title="Service Provider" isApp={true} />
        <Features data={homePage?.sections} cls={true} />
        <AppLink isApp={true} />
        <BlogSection />
        <Faq data={faqlist} />
      </div>
      <Footer />
    </>
  );
};
export default DriverSignUp;
