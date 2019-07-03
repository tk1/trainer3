<template>
    <div>
        <h1>{{title}}</h1>
        <p v-if="error">An error occurred: {{error}}</p>
        <form v-on:submit.prevent="submitAnswer">
            <p>Please give your answer</p>
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

const url = '/api/answers'

export default {
  name: 'training',
  data () {
    return {
      title: 'Training',
      error: null,
      answer: '',
      result: ''
    }
  },
  methods: {
    submitAnswer () {
      var that = this
      that.error = null

      axios.post(url, {
        text: that.answer
      })
        .then(response => {
          that.result = JSON.stringify(response.data)
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
