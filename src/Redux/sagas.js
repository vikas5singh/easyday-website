import { all, fork } from "redux-saga/effects";

import LoginSaga from "./Login/saga";
import NearbyRestaurantSaga from "./Restaurant/saga";
import SignupSaga from "./Signup/saga";
import ProfileSaga from "./Profile/saga";
import AddAddressSaga from "./Dashboard/saga";
import BannerSaga from "./Banner/saga";
import PrivacyPolicySaga from "./privacyPolicy/saga";
import BlogSaga from "./Blog/saga";
import VehicleSaga from "./Vehicles/saga";
import AboutSaga from "./About/saga";
import SecurityGuidanceSaga from "./SecurityGuidance/saga";
import TermConditionSaga from "./TermCondition/saga";
import RefundPolicySaga from "./RefundPolicy/saga";
import BenefitsSaga from "./Benefits/saga";
import ContactUsSaga from "./ContactUs/saga";
const root = function* rootSaga() {
  yield all([
    fork(LoginSaga),
    fork(SignupSaga),
    fork(NearbyRestaurantSaga),
    fork(ProfileSaga),
    fork(AddAddressSaga),
    fork(BannerSaga),
    fork(PrivacyPolicySaga),
    fork(BlogSaga),
    fork(VehicleSaga),
    fork(AboutSaga),
    fork(SecurityGuidanceSaga),
    fork(TermConditionSaga),
    fork(RefundPolicySaga),
    fork(BenefitsSaga),
    fork(ContactUsSaga),
  ]);
};
export default root;
