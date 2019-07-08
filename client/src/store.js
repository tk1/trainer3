import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // <1>
    answerCount: {
      correct: 0,
      wrong: 0
    }
  },
  mutations: { // <2>
    increment (state, correct) {
      if (correct) {
        state.answerCount.correct++
      } else {
        state.answerCount.wrong++
      }
    }
  }
})
