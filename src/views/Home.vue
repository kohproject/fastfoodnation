<template>
  <div class="home">
   <h1>{{title}}</h1>
    <Nationmap/>
    <Filterbar/>
    <Fullgrid/>
  </div>
</template>

<script>
import Nationmap from "@/components/Nationmap.vue"
import Filterbar from "@/components/Filterbar.vue"
import Fullgrid from "@/components/FullGrid.vue"

export default {
  name: 'Home',
  components:{
    Nationmap,
    Filterbar,
     Fullgrid
  },
  data(){
    return {
      title:"fast food nation"
    }
  }
}
</script>
<style lang="scss">
  .home{
    overflow-y:scroll
}
</style>