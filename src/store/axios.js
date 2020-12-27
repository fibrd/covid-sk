import axios from "axios";

function getLang() {
  switch (localStorage.getItem("lang")) {
    case "sk":
      return "sk";
    case "cs":
      return "cs";
    case "en":
      return "en";
    case "de":
      return "de";
  }
}

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      // handle error: inform user, go to login, etc
      console.log("401", error);
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

const actions = {
  async get({ dispatch }, { url, params }) {
    let response = null;
    try {
      let shown = false;
      if (this.state.user.authJWT) {
        axios.defaults.headers.common.Authorization =
          "Bearer " + this.state.user.authJWT;
      } else {
        if (localStorage.getItem("jwt")) {
          axios.defaults.headers.common.Authorization =
            "Bearer " + localStorage.getItem("jwt");
        }
      }

      var lang = getLang();

      if (lang) {
        if (axios.defaults.headers.common["Accept-Language"] !== lang) {
          axios.defaults.headers.common["Accept-Language"] = lang;
        }
      }

      response = await axios.get(url, { params }).catch(function (error) {
        if (error.response.status == 401) {
          dispatch("snackbar/openError", "Session timeout - unauthenticated", {
            root: true,
          });
          shown = true;
          dispatch(
            "user/Logout",
            {},
            {
              root: true,
            }
          );
        }

        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          for (const index in error.response.data.errors) {
            for (const index2 in error.response.data.errors[index]) {
              const err = error.response.data.errors[index][index2];
              if (err) {
                shown = true;
                dispatch("snackbar/openError", err, {
                  root: true,
                });
              }
            }
          }
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.detail
        ) {
          shown = true;
          dispatch("snackbar/openError", error.response.data.detail, {
            root: true,
          });
        }
        if (!shown) {
          shown = true;
          dispatch(
            "snackbar/openError",
            "Error occured, please try again later",
            { root: true }
          );
        }
      });
      if (response && response.status === 200) {
        return response.data;
      }
      if (response && response.status === 204) {
        return false; // no content
      }

      if (!shown) {
        dispatch(
          "snackbar/openError",
          "Error occured, please try again later",
          { root: true }
        );
      }
    } catch (e) {
      console.log("catch.e", e);
      dispatch("snackbar/openError", e.message, { root: true });
    }
  },
  async post({ dispatch }, { url, params, body }) {
    let response = null;
    // console.log('post', url, params)
    try {
      let fd = new FormData();
      for (const index in params) {
        fd.append(index, params[index]);
      }
      if (body) {
        fd = body;
      }
      if (this.state.user.authJWT) {
        axios.defaults.headers.common.Authorization =
          "Bearer " + this.state.user.authJWT;
      } else {
        if (localStorage.getItem("jwt")) {
          axios.defaults.headers.common.Authorization =
            "Bearer " + localStorage.getItem("jwt");
        }
      }
      var lang = getLang();
      if (lang) {
        if (axios.defaults.headers.common["Accept-Language"] !== lang) {
          axios.defaults.headers.common["Accept-Language"] = lang;
        }
      }
      let shown = false;
      response = await axios.post(url, fd).catch(function (error) {
        if (error.response.status == 401) {
          dispatch("snackbar/openError", "Session timeout - unauthenticated", {
            root: true,
          });
          shown = true;
          dispatch(
            "user/Logout",
            {},
            {
              root: true,
            }
          );
        }
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          for (const index in error.response.data.errors) {
            for (const index2 in error.response.data.errors[index]) {
              const err = error.response.data.errors[index][index2];
              if (err) {
                shown = true;
                dispatch("snackbar/openError", err, {
                  root: true,
                });
              }
            }
          }
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.detail
        ) {
          shown = true;
          dispatch("snackbar/openError", error.response.data.detail, {
            root: true,
          });
        } else if (error.response && error.response.status === 401) {
          shown = true;
          dispatch(
            "snackbar/openError",
            "401 Unauthorized, authentication is needed",
            { root: true }
          );
        }
        if (!shown) {
          shown = true;
          dispatch(
            "snackbar/openError",
            "Error occured, please try again later",
            { root: true }
          );
        }
      });

      if (response && response.status === 200 && response.data) {
        return response.data;
      }

      if (!shown) {
        dispatch(
          "snackbar/openError",
          "Error occured, please try again later",
          { root: true }
        );
      }
    } catch (e) {
      console.log("catch.e", e);
      dispatch("snackbar/openError", e.message, { root: true });
    }
  },
};

export default {
  namespaced: true,
  actions,
};
