<template>
  <!-- make div to a bootstrap container -->
  <div id="app" class="container">
    <img alt="htwsaar logo" src="./assets/htwsaar_ingwi_logo.png" width="150px">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/training">Training</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/info">Info</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
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
