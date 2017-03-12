
export default {
  state: {
    title: "",
    leftText: "",
    leftType: ""
  },
  actions: {
    setTitle(context, title) {
      context.commit('SET_TITLE', title);
    },
    setLeftText(context, text) {
      context.commit('SET_LEFT_TEXT', text)
    },
    setLeftType(context, type) {
      context.commit('SET_LEFT_TYPE', type)
    }
  },
  mutations: {
    ['SET_TITLE'](state, title) {
      state.title = title;
    },
    ['SET_LEFT_TEXT'](state, text) {
      state.leftText = text;
    },
    ['SET_LEFT_TYPE'](state, type) {
      state.leftType = type;
    }
  },
}
