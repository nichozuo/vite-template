import { axiosConfig } from "../../config/axios";
import { requests } from "../../utils/requests";
import { useLocalStorage } from "@vueuse/core";
import router from "../../router";

export interface AuthStateType {
  user: object;
  permissions: object;
}

const token = useLocalStorage("local." + axiosConfig.tokenName, "");

const state = {
  user: {},
  permissions: {},
};

const getters = {
  user: (state: AuthStateType) => state.user,
  permissions: (state: AuthStateType) => state.permissions,
};

const actions = {
  loginAction({ commit }: any, params: unknown) {
    requests({ url: "auth/login", data: params }).then((res) => {
      commit("setLogin", res.data.user);
      commit("setMenu", res.data.permissions);
      token.value = res.data.token.access_token;
      if (location.pathname == "/login") {
        router.push("/admin/welcome");
      }
    });
  },

  meAction({ commit }: any) {
    requests({ url: "auth/me" }).then((res) => {
      commit("setLogin", res.data.user);
      commit("setMenu", res.data.permissions);
      if (location.pathname == "/login" || location.pathname == "/") {
        router.push("/admin/welcome");
      }
    });
  },
  logoutAction({ commit }: any) {
    requests({ url: "auth/logout" }).then((res) => {
      commit("setLogin", null);
      token.value = "";
      router.push("/login");
    });
  },
};

const mutations = {
  setLogin(state: AuthStateType, user: object) {
    state.user = user;
  },
  setMenu(state: AuthStateType, menu: object) {
    state.permissions = menu;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
