import "./App.css";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyRouts from "./Routers/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savedata, userCart } from "./Redux/actions";
// import LoadingSpinner from "./Component/Loader/Loading";
import BasicExample from "./Component/Loader/Loading";
import "./css/style.css";

function App() {
  const RestID = useSelector((s) => s.address?.restaurantId);
  const dispatch = useDispatch();
  useEffect(() => {
    const cartCallback = (response) => {
      if (response.data.status === "success") {
        const data = {
          allItem: response.data.data,
          restId: RestID,
        };
        dispatch(savedata(data));
      } else {
        const data = {
          allItem: [],
          restId: "",
        };
        dispatch(savedata(data));
      }
    };
    dispatch(
      userCart(
        {
          promocode: "none",
          tip: "no",
          tipAmount: 0,
          //items: data?.itemId,
          //restaurantId: data?.restaurantId,
        },
        cartCallback
      )
    );
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<BasicExample />}>
        <MyRouts />
      </Suspense>

      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;

//
