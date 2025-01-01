import React from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

import Dashboard from "../Pages/Dashboard/Dashboard";

export default function dashboardtheme() {
  return (
    <div>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}
