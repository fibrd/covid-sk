import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios";
import place from "./place";
import slot from "./slot";
import snackbar from "./snackbar";
import result from "./result";

Vue.use(Vuex);

const debugStrict = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    axios,
    place,
    snackbar,
    slot,
    result,
  },
  strict: debugStrict,
});
