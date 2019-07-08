<template>
    <div class="col-sm-4">
        <h2>Sign up</h2>
        <p>Please sign up to use the app.</p>
        <div class="alert alert-danger" v-if="error">
            <p>{{ error }}</p>
        </div>
        <form v-on:submit="submit">
            <div class="form-group">
                <label for="i-email">Email</label>
                <input type="text" class="form-control" id="i-email" placeholder="email" v-model="credentials.email" required>
            </div>
            <div class="form-group">
                <label for="i-pw">Password</label>
                <input type="password" class="form-control" id="i-pw" placeholder="password" v-model="credentials.password" required>
            </div>
            <button type="submit" class="btn btn-primary">Sign up</button>
        </form>
        <div v-if="result === true" class="alert alert-success">Sign up succeded.</div>
        <div v-if="result === false" class="alert alert-danger">Sign up failed.</div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      },
      result: undefined,
      error: ''
    }
  },
  methods: {
    submit () {
      var that = this
      axios.post('/api/users', that.credentials)
        .then(function (response) {
          that.result = true
          console.log(response.data.email)
        })
        .catch(function (error) {
          that.result = false
          console.error(error)
        })
    }
  }

}
</script>

<style scoped>
form {
    margin-bottom: 20px;
}
</style>
