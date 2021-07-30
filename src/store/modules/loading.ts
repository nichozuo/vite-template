export interface LoadingState {
  count: number;
}

const state = {
  count: 0,
};

const getters = {};

const actions = {
  addLoadingAction({ commit }: any) {
    commit("addLoading");
  },
  subLoadingAction({ commit }: any) {
    commit("subLoading");
  },
};

const mutations = {
  addLoading(state: LoadingState) {
    state.count = state.count + 1;
  },
  subLoading(state: LoadingState) {
    state.count = state.count - 1;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
