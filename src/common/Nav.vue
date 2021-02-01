<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
 
  <router-view/>
  </nav>
</template>

<script>

export default {
  name: 'Nav'
}
</script>
<style lang="scss" scoped>
  nav{
    position: fixed;
    top:0px;
    left:0px;
    background:#222;
    height:40px;
    width:100%;
   
    a{
 color:#fff;
    }
  }
</style>
