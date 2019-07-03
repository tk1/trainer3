<template>
  <div>
    <h1>{{title}}</h1>
    <p v-if="error">An error occurred: {{error}}</p>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" v-bind:key="item.id">
          <td>{{item.createdAt | formatDateTime}}</td>
          <td>{{item.text}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from 'axios'

const url = '/api/answers'

export default {
  name: 'AnswerHistory',
  data () {
    return {
      title: 'Answer History',
      error: null,
      items: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      var that = this
      that.error = null

      axios.get(url)
        .then(response => {
          that.items = response.data
        })
        .catch(error => {
          that.error = error.toString()
        })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
