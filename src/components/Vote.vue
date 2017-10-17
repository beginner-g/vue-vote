<template>
  <div class="vote">
    <div class="add">
      <input v-model="topic" class='input-vote'>
      <button @click='handleTopic' class="add-vote">新建投票主题</button>
      <h1>{{add}}</h1>
      <div class="vote-img">
        <input class='add-input' v-model='title'>
        <button @click='handleAdd' class="add-img">添加</button>
      </div>
      <options></options>
    </div>
  </div>
</template>
<script>
  import Options from './Options'
  export default {
    name:'vote',
    components:{Options},
    data:()=>({
      topic:'',
      title:''
    }),
    computed:{
      add:function(){
        return this.$store.state.vote.topic
      }
    },
    methods:{
      handleTopic:function(){
        if(this.topic!==''){
          this.$store.commit({type:'addTitle',topic:this.topic})
          this.topic=''
        }
      },
      handleAdd:function(){
        if(this.title!==''){
          this.$store.dispatch({type:'addImg',title:this.title})
          this.title=''
        }
      }
    }
  }
</script>
<style scoped>
  .vote{
    background-color: #ccc;
    width: 250px;
    margin: 10px;
  }
  .input-vote{
    line-height: 25px;
    border: 1px solid red;
  }
  .add-vote{
    background-color: lightgreen;
    line-height: 30px;
    width: 100px;
  }
  .vote-img{
    margin-top: 20px;
  }
  .add-input{
    width: 180px;
    line-height: 25px;
  }
  .add-img{
    width: 50px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
  }
</style>
