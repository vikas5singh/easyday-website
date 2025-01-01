import React, { useState, useEffect, lazy, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// importing all the themes
// import Hometheme from "../themes/home-theme";

// import Tacostheme from "../themes/tacos-theme";

// import TacosthemeForFreshItem from "../themes/tacos-theme-freshItem";
// import Addcarttheme from "../themes/addcart-theme";
// import Securecheckouttheme from "../themes/secure-checkouttheme";
// import TRackordertheme from "../themes/trackorder-theme";
// import Pickedordertheme from "../themes/pickedorder-theme";
// import Arrivedordertheme from "../themes/arrivedorder-theme";
import useSocket from "../Common/Socket";
// import Dashboardtheme from "../themes/dashboard-theme";
// import Faq from "../Pages/Faq/faq";
// import PrivacyPolicy from "../Pages/termsAndPolicy/privacyPolicy";
import LoginChecker from "../Common/LoginChecker";
import Bloglist from "../Pages/Blog/Bloglist";
import BlogDetail from "../Pages/Blog/BlogDetail";
import DriverSignUp from "../Pages/DriverSignup/Index";
import RestaurantSignup from "../Pages/RestaurantSignup/Index";
import VendorSignup from "../Pages/VendorSignup/Index";
import ServiceProviderSignup from "../Pages/ServiceProviderSignup/Index";
const Hometheme = lazy(() => import("../themes/home-theme"));
const Tacostheme = lazy(() => import("../themes/tacos-theme"));
const TacosthemeForFreshItem = lazy(() =>
  import("../themes/tacos-theme-freshItem")
);
const Addcarttheme = lazy(() => import("../themes/addcart-theme"));

const Securecheckouttheme = lazy(() =>
  import("../themes/secure-checkouttheme")
);
const TRackordertheme = lazy(() => import("../themes/trackorder-theme"));
const Pickedordertheme = lazy(() => import("../themes/pickedorder-theme"));
const Arrivedordertheme = lazy(() => import("../themes/arrivedorder-theme"));
// const useSocket = lazy(() => import("../Common/Socket"));
const Dashboardtheme = lazy(() => import("../themes/dashboard-theme"));
const Faq = lazy(() => import("../Pages/Faq/faq"));
const PrivacyPolicy = lazy(() =>
  import("../Pages/privacyPolicy/privacyPolicy")
);
const About = lazy(() =>
  import("../Pages/About/Index")
);

const Security = lazy(() =>
  import("../Pages/SecurityGuidance/Index")
);
const TermCondition = lazy(() =>
  import("../Pages/termsAndPolicy/Index")
);

const RefundPolicy = lazy(() =>
  import("../Pages/RefundPolicy/Index")
);
const Benefits = lazy(() =>
  import("../Pages/Benefits/Index")
);
const ContactUs = lazy(() =>
  import("../Pages/ContactUs/Index")
);
const CareersList = lazy(() =>
  import("../Pages/Career/Index")
);
const CareersDetails = lazy(() =>
  import("../Pages/Career/CareerDetail")
);
const StoreType = lazy(() =>
  import("../Pages/StoreType/Index")
);
const ProductDetails = lazy(() =>
  import("../Pages/ProductDetails/Index")
);
const Pages404 = lazy(() =>
  import("../Pages/Pages404/index")
);
// const LoginChecker = lazy(() => import("../themes/home-theme"));
const ProtectedRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/" replace />;
};
const MyRouts = () => {
  const [socket, connectSocket] = useSocket();
  const [socketConnect, setsocketConnect] = useState(false);
  const { success, io } = socket;
  const isAutH = useSelector((s) => s.login?.token);
  const [_isAuth, setIsAuth] = useState(false);
  const isAuth = useMemo(() => isAutH, [isAutH]);
  useEffect(() => {
    setIsAuth(!!isAuth);
  }, [isAuth]);
  useEffect(() => { }, [socket]);

  useEffect(() => {
    if (success) {
      io.on("order_customer_socket", (socket) => { });
    }
  }, [io]);

  return (
    <div>
      <BrowserRouter>
        <LoginChecker />
        <Routes>
          <Route exact path="/" element={<Hometheme />} />
          <Route exact path="/tacos/:editId" element={<Tacostheme />} />
          <Route exact path="/providers/:storeId/:editId" element={<Tacostheme />} />
          <Route exact path="/chefs/:editId" element={<Tacostheme />} />
          <Route exact path="/foodtrucks/:editId" element={<Tacostheme />} />
          <Route
            exact
            path="/freshMarket/:editId"
            element={<TacosthemeForFreshItem />}
          />
          <Route exact path="/addcart" element={<Addcarttheme />} />
          <Route
            exact
            path="/secure-checkout"
            element={<ProtectedRoute isAuth={isAuth}> <Securecheckouttheme /> </ProtectedRoute>}
          />
          <Route exact path="/track-order/:Id" element={<ProtectedRoute isAuth={isAuth}><TRackordertheme /> </ProtectedRoute>} />
          <Route exact path="/picked-order" element={<Pickedordertheme />} />
          <Route exact path="/arrived-order" element={<Arrivedordertheme />} />
          <Route exact path="/dashboard/:tab?" element={<ProtectedRoute isAuth={isAuth}> <Dashboardtheme /> </ProtectedRoute>} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/blog" element={<Bloglist />} />
          <Route exact path="/driversignup" element={<DriverSignUp />} />
          <Route exact path="/restaurantsignup" element={<RestaurantSignup />} />
          <Route exact path="/vendorsignup" element={<VendorSignup />} />
          <Route exact path="/serviceprovidersignup" element={<ServiceProviderSignup />} />
          <Route exact path="/blog-detail/:editId" element={<BlogDetail />} />
          <Route exact path="/privacy" element={<PrivacyPolicy />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/security" element={<Security />} />
          <Route exact path="/term-condition" element={<TermCondition />} />
          <Route exact path="/refund-policy" element={<RefundPolicy />} />
          <Route exact path="/benefits" element={<Benefits />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/careers" element={<CareersList />} />
          <Route exact path="/career/:editId" element={<CareersDetails />} />
          <Route exact path="/store/:editId" element={<StoreType />} />
          <Route exact path="/product/:storeId/:editId" element={<ProductDetails />} />
          <Route exact path="*" element={<Pages404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MyRouts;
