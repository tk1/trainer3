<template>
     <div class="col-sm-4 alert alert-success">Log out successful.</div>
</template>

<script>
export default {
  created () {
    this.$store.commit('logout') // <1>
  }
}
</script>
