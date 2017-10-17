<template>
  <div class="login">
    <div class="username">
      <p v-if='!isAuthenticated'>你是<input v-model="text" placeholder="你的名字">
        <button v-on:click='handleClick' class='username-button'>保存</button>
      </p>
      <p v-else>我是{{username}}
        <vote></vote>
      </p>
    </div>
  </div>
</template>
<script>
import Vote from './Vote'
export default {
    name: 'login',
    components:{Vote},
    data:()=>({
      text:''
    }),
    computed:{
      isAuthenticated:function(){
        return this.$store.state.auth.isAuthenticated
      },
      username:function(){
        return this.$store.state.auth.username
      }

    },
    methods:{
      handleClick:function(){
        if(!this.text.trim())return
          this.$store.commit('username',{text:this.text})
          this.text=''
      }
    }

  }
</script>

<style scoped>
.login{
  background-color: #fff;
  text-align: center;
  padding: 20px 10px;
  line-height: 1.8;
}
.username p{
  width: 300px;
  font-size: 20px;
  margin: 30px auto;
}
input{
  border: 0;
  border-bottom:2px solid deeppink;
  margin-left: 10px;
}
input:focus{
  outline: 0;
}
.username-button{
  background-color: deeppink;
  border: 0;
  width: 50px;
  line-height: 30px;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
}
.enter{
  width: 120px;
  line-height: 30px;
  display: block;
  margin: 10px auto;
  background-color: deeppink;
  border-radius: 8px;
  border: 0;
  color: #fff;
  text-decoration: none;
}
</style>
