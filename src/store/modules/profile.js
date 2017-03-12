
export default {
  state: {
    profile: {
      total: 20000,
      current: 0,
      cards:[],
      record: []
    }
  },
  actions: {
    initProfile(context) {
      context.commit('INITPROFILE');
    },
    addCard(context, card) {
      context.commit('ADD_CARD', card);
    },
    readProfile(context) {
      context.commit('READ_PROFILE');
    },
    saveLoanNum(context) {
      context.commit('SAVE_LOAN_NUM');
    },
  },
  mutations: {
    ['INITPROFILE'](state) {
      state.profile = {
        total: 20000,
        current: 0,
        cards:[],
        record: []
      };
      localStorage.demoApp = JSON.stringify(state.profile);
    },
    ['READ_PROFILE'](state) {
      state.profile = JSON.parse(localStorage.demoApp);
    },
    ['ADD_CARD'](state, card) {
      state.profile.cards.push(card);
      localStorage.demoApp = JSON.stringify(state.profile);
    },
    ['SAVE_LOAN_NUM'](state) {
      state.profile.current += state.loanData.loanNum;
      localStorage.demoApp = JSON.stringify(state.profile);
      state.loanData = {
        loanType: null,
        loanTime: 0,
        loanNum: 0,
      };
      state.interestNum = 0;
    },
  }
}
