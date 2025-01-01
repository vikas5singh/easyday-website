import axios from "axios";
import { API_URL, API_VERSION, API_TOKEN } from "./URLS";

class Axios {
  defaultOptions = () => {
    if (typeof window === "undefined") {
      return {
        baseURL: `${API_URL}`,
        headers: {
          token: "",
          customerid: "",
          apiKey: "ae2007d1-f92b-46d3-a793-e93eb9d812fc",
          Authorization: "",
        },
      };
    }
    return {
      baseURL: `${API_URL}`,
      headers: {
        token: (localStorage && localStorage.getItem("authToken")) || "",
        customerid: (localStorage && localStorage.getItem("userId")) || "",
        apiKey: "ae2007d1-f92b-46d3-a793-e93eb9d812fc",
        Authorization: (localStorage && localStorage.getItem("authToken")) || "",
      },
    };
  };

  LogoutUser = (url) => {
    if (url.response !== undefined && url.response.status === 401) {

      // localStorage.clear();
      // window.location.replace("/");
    } else {

    }
  };

  get = (url, options = {}) => {
    return axios
      .get(url, { ...this.defaultOptions(), ...options })
      .then((res) => {
        if (res.data.message && res.data.message.includes("Not Authorized")) {
          let err = {
            response: {
              status: 401,
            },
          };
          this.LogoutUser(err);
          return res;
        } else {
          return res;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.LogoutUser(err);
          return err;
        } else {
          return err;
        }
      });
  };

  post = (url, data, options = {}) => {

    return axios
      .post(url, data, { ...this.defaultOptions(), ...options })
      .then((res) => {
        if (res.data.message && res.data.message.includes("Not Authorized")) {
          let err = {
            response: {
              status: 401,
            },
          };
          this.LogoutUser(err);
          return res;
        } else {
          return res;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.LogoutUser(err);
          return err;
        } else {
          return err;
        }
      });
  };

  put = (url, data, options = {}) => {
    return axios
      .put(url, data, { ...this.defaultOptions(), ...options })
      .then((res) => {
        if (res.data.message && res.data.message.includes("Not Authorized")) {
          let err = {
            response: {
              status: 401,
            },
          };
          this.LogoutUser(err);
          return res;
        } else {
          return res;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.LogoutUser(err);
          return err;
        } else {
          return err;
        }
      });
  };

  delete = (url, options = {}) => {
    return axios
      .delete(url, { ...this.defaultOptions(), ...options })
      .then((res) => {
        if (res.data.message && res.data.message.includes("Not Authorized")) {
          let err = {
            response: {
              status: 401,
            },
          };
          this.LogoutUser(err);
          return res;
        } else {
          return res;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.LogoutUser(err);
          return err;
        } else {
          return err;
        }
      });
  };
}

export default new Axios();
