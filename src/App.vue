<template>
 <div>
    <Nav/>
 </div>

 
</template>

<script>

import Nav from '@/common/Nav.vue'

export default {
  name:"App",
  components:{
    Nav
  },
  data(){
    return{
      rests:[]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  *{
    box-sizing:border-box;
  }
}
body{
  margin:0px;
  position: relative;
  overflow-y: auto;
}



</style>
