import { createStore } from "vuex";
// import auth from "./modules/auth";
import loading from "./modules/loading";
import layout from "./modules/layout";

export interface StateType {
  auth: { user: object; permissions: object };
  loading: { loading: object };
  layout: { siderOpen: any; menu: any };
}

export default createStore({
  modules: {
    // auth,
    loading,
    layout,
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : [],
});
