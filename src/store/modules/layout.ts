export interface LayoutState {
  siderClose: any;
  menu: any;
}

const state = {
  siderClose: localStorage.getItem("siderClose"),
  menu: localStorage.getItem("menu"),
};

const getters = {
  siderClose: (state: LayoutState) => state.siderClose,
  menu: (state: LayoutState) => state.menu,
};

const actions = {
  setSiderAction({ commit }: any, params: unknown) {
    commit("setSider", params);
  },
  setMenuAction({ commit }: any, params: unknown) {
    commit("setMenu", params);
  },
};

const mutations = {
  setSider(state: LayoutState, siderClose: boolean) {
    localStorage.setItem("siderClose", siderClose.toString());
    state.siderClose = siderClose;
  },
  setMenu(state: LayoutState, menu: number) {
    localStorage.setItem("menu", menu.toString());
    state.menu = menu;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
