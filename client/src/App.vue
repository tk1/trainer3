<template>
  <!-- make div to a bootstrap container -->
  <div id="app" class="container">
    <img alt="htwsaar logo" src="./assets/htwsaar_ingwi_logo.png" width="150px">
    <p>{{answerCount.correct}} correct, {{answerCount.wrong}} wrong answers given</p>

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link v-if="session.authenticated" class="nav-link" active-class="active" to="/training">Training</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/info">Info</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="!session.authenticated" class="nav-link" active-class="active" to="/login">Log In</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="session.authenticated" class="nav-link" active-class="active" to="/logout">Log Out</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="!session.authenticated" class="nav-link" active-class="active" to="/signup">Sign Up</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
import store from './store'

export default {
  name: 'app',
  computed: {
    answerCount () {
      return store.state.answerCount
    },
    session () {
      return store.state.session
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
img {
  margin-bottom: 30px;
}
h1,h2,h3 {
  color: #4bb4e6;
}
.nav {
  margin-top: 20px;
}
</style>
