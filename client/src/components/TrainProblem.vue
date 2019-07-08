<template>
    <div>
        <h1>{{title}}</h1>
        <p v-if="error">An error occurred: {{error}}</p>

        <div class="problem">
            <h3>Problem {{problem.id}}</h3>
            <p v-if="problem.definition">Calculate {{problem.definition.expression}}</p>
            <!-- 1 -->
        </div>

        <form v-on:submit.prevent="submitAnswer">
            <div class="form-group">
                <label for="i-name">Answer</label>
                <input class="form-control" id="i-name" autocomplete="off" v-model="answer" required/>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
        <p>Result: {{result}}</p>
    </div>
</template>

<script>
import axios from 'axios'
import { bus } from '../bus.js'

const url = '/api/answers'

export default {
  name: 'training',
  data () {
    return {
      title: 'Training',
      error: null,
      problem: {},
      answer: '',
      result: ''
    }
  },
  created () {
    this.fetchProblem() // <4>
  },
  methods: {
    fetchProblem () { // <2>
      var that = this
      that.error = null
      that.answer = ''
      axios.get('/api/problems/1') // <3>
        .then(function (response) {
          that.problem = response.data
        })
        .catch(function (error) {
          console.log(error)
          that.error = error.toString()
        })
    },
    submitAnswer () {
      var that = this
      that.error = null

      axios.post(url, {
        text: that.answer,
        problemId: that.problem.id
      })
        .then(response => {
          that.result = JSON.stringify(response.data)
          bus.$emit('new-answer', response.data)
          that.answer = ''
        })
        .catch(error => {
          that.error = error.message
        })
    }
  }
}
</script>

<style scoped>
form {
    margin-bottom: 20px;
}

.answer {
    padding: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
}

h1,
h2,
h3,
h4 {
    color: #4BB4E6;
}
</style>
