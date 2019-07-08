<template>
    <div class="col-sm-4">
        <h2>Log In</h2>
        <p>Please log in to use the app.</p>
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
            <button type="submit" class="btn btn-primary">Log in</button>
        </form>
        <div v-if="session.authenticated" class="alert alert-success">Log in successful.</div>
        <div v-if="!session.authenticated" class="alert alert-danger">Not logged in.</div>
    </div>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    error () {
      return store.state.error
    },
    session () {
      return store.state.session
    }
  },
  methods: {
    submit () {
      store.dispatch('login', this.credentials)
    }
  }
}
</script>

<style scoped>
form {
    margin-bottom: 20px;
}
</style>
