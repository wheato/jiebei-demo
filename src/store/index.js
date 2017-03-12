import Vue from 'vue'
import Vuex from 'vuex'
import nav from './modules/nav'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    profile: {},
    loanData: {
      loanType: null,
      loanTime: 0,
      loanNum: 0,
    },
    interestNum: 0,
    chosenCard: null,
    cardPhotoSrc: '',
  },

  actions: {
    initProfile(context) {
      context.commit('INITPROFILE');
    },
    addCard(context, card) {
      context.commit('ADD_CARD', card);
    },
    switchType(context, type) {
      context.commit('SWITCHTYPE', type);
    },
    updateLoanNum(context, value) {
      context.commit('UPDATE_LOAN_NUM', value);
    },
    computeInterest(context) {
      context.commit('COMPUTE_INTEREST');
    },
    updateLoanTime(context) {
      context.commit('UPDATE_LOAN_TIME');
    },
    setChosenCard(context, card) {
      context.commit('SET_CHOSEN_CARD', card)
    },
    readProfile(context) {
      context.commit('READ_PROFILE');
    },
    saveLoanNum(context) {
      context.commit('SAVE_LOAN_NUM');
    },
    updatePhotoSrc(context, str) {
      context.commit('UPDATE_PHOTO_SRC', str);
    },
    clearPhotoSrc(context) {
      context.commit('UPDATE_PHOTO_SRC', '');
    }
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
    ['SET_CHOSEN_CARD'](state, card) {
      state.chosenCard = card;
    },
    ['COMPUTE_INTEREST'](state) {
      let interestBase = state.loanData.loanType ? 0.00015 : .0002;
      state.interestNum = (state.loanData.loanNum * interestBase * state.loanData.loanTime).toFixed(2);
    },
    ['UPDATE_LOAN_TIME'](state) {
      state.loanData.loanTime = state.loanData.loanType ? 180 : 45;
    },
    ['UPDATE_LOAN_NUM'](state, value) {
      state.loanData.loanNum = parseFloat(value);
    },
    ['SWITCHTYPE'](state, type) {
      state.loanData.loanType = type;
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
    ['UPDATE_PHOTO_SRC'](state, str) {
      state.cardPhotoSrc = str;
    }
  },

  modules: {
    nav
  },

  strict: debug,
})
