import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: '',
    session: {
      authenticated: false,
      token: '',
      userId: undefined
    },
    answerCount: {
      correct: 0,
      wrong: 0
    }
  },
  mutations: {
    setLogin (state, data) { // <3>
      state.session.authenticated = true
      state.session.token = data.id
      state.session.userId = data.userId
      // set http-header token
      axios.defaults.headers.common['Authorization'] = state.session.token // <4>
    },
    setError (state, error) {
      state.error = error
    },
    increment (state, correct) {
      if (correct) {
        state.answerCount.correct++
      } else {
        state.answerCount.wrong++
      }
    }
  },
  actions: {
    login (context, creds) {
      return axios.post('/api/users/login', creds) // <1>
        .then(response => {
          context.commit('setLogin', response.data) // <2>
          console.dir(response.data)
        })
        .catch(error => {
          // context.error = error.response.status
          context.commit('setError', 'Log in failed: ' + error.toString())
          console.error(error)
        })
    }
  }
})
