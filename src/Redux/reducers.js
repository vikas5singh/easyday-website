import { combineReducers } from "redux";
import LoginReducer from "./Login/reducer";
import NearbyRestaurantReducer from "./Restaurant/reducer";
import SignupReducer from "./Signup/reducer";
import ProfileReducer from "./Profile/reducer";
import AddressReducer from "./Dashboard/reducer";
import BannerReducer from "./Banner/reducer";
import PrivacyReducer from "./privacyPolicy/reducer";
import BlogReducer from "./Blog/reducer";
import VehicleReducer from "./Vehicles/reducer";
import AboutUsReducer from "./About/reducer";
import securityGuidanceReducer from "./SecurityGuidance/reducer";
import termConditionReducer from "./TermCondition/reducer";
import refundPolicyReducer from "./RefundPolicy/reducer";
import benefitsReducer from "./Benefits/reducer";
import constactUsReducer from "./ContactUs/reducer";
const rootReducer = combineReducers({
  login: LoginReducer,
  signup: SignupReducer,
  restaurant: NearbyRestaurantReducer,
  profile: ProfileReducer,
  address: AddressReducer,
  banner: BannerReducer,
  policy: PrivacyReducer,
  Blog: BlogReducer,
  Vehicle: VehicleReducer,
  aboutUs: AboutUsReducer,
  security: securityGuidanceReducer,
  tac: termConditionReducer,
  refund: refundPolicyReducer,
  benefit: benefitsReducer,
  contact: constactUsReducer,
});

export default rootReducer;
