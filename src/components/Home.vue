<template>
  <div class="home">
    <div class="login-wrap">
        <login></login>
    </div>
  </div>
</template>
<script>
import Login from './Login'
  export default {
    name:'home',
    components:{Login}
  }
</script>
<style scoped>
  .login-wrap{
    width: 90%;
    margin: 20px auto;
  }
</style>
