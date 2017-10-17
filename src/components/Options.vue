<template>
  <div class="options">
    <div v-for='option in options' class="vote-title">
      <h1>{{option.title}}</h1>
      <div class="action" v-for='vote in votes'>
        {{vote.name}}
        <vote-action v-bind:votesId='votesId'></vote-action>
      </div>
      <button @click='handleName'>投票</button>
    </div>
  </div>
</template>
<script>
  import VoteAction from './VoteAction'
  export default{
    name:'options',
    components:{VoteAction},
    data:()=>({
       votes:[
        {
          voteId:1,
          name:'hahaha'
        },
        {
          voteId:2,
          name:'asdds'
        }
      ]
    }),
    computed:{
      options:function(){
        return this.$store.state.vote.all
      },
      votesId:function(){
        return this.votes.voteId
      }
    },
    created:function(){
      this.$store.dispatch({type:'loadOptions'})
    },
    methods:{
      handleName:function(){
        const newName =this.votes.filter(t=>t.voteId==this.voteId)
        console.log(this.votesId);
        // return this.newName.push({name:'hello'})
      }
    }
  }
</script>
<style scoped>
  .vote-title{
    background-color: lightblue;
    margin: 10px;
  }
  .vote-title h1{
    color: #fff;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    border: 1px solid yellow;
  }
  .vote-title button{
    display: block;
    text-align: center;
    background-color: deeppink;
    margin: 20px auto;
    width: 80px;
    line-height: 40px;
  }
</style>
