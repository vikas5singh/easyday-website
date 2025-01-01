import { useEffect, Component } from "react";
import Axios from "../../services/Axios";
import { GET_PROFILE } from "../../services/URLS";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { logoutSuccess } from "../../Redux/actions";

export default function LoginChecker() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      Axios.get(GET_PROFILE).then((response) => {
        if (response.data && response.data.error_code === 5004) {
          dispatch(logoutSuccess());
          localStorage.clear();
          setTimeout(() => {
            navigate("/");
          }, 400);
        }
      });
    }
  }, []);

  return null;
}
