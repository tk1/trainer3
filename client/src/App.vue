<template>
  <!-- make div to a bootstrap container -->
  <div id="app" class="container">
    <img alt="htwsaar logo" src="./assets/htwsaar_ingwi_logo.png" width="150px">
    <train-problem></train-problem>
    <show-answers></show-answers>
  </div>
</template>

<script>
import ShowAnswers from './components/AnswerHistory'
import TrainProblem from './components/TrainProblem'

export default {
  name: 'app',
  components: {
    ShowAnswers,
    TrainProblem
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
</style>
