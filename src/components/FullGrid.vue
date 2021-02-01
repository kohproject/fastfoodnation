<template>
    <section>
     
       <h2>{{$store.state.title}}</h2>
      <div class="full-grid">
        <Box v-bind:rests="allRests" />
    </div>
    </section>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';
const {mapGetters} = createNamespacedHelpers('mod1');

import Box from './gridBox/Box.vue';

export default {
    name:"Fullgrid",
    computed: mapGetters({allRests:['ALL_RESTS']}),
    
    components:{
      Box
    }
}
</script>
<style lang="scss" scoped>
  .full-grid{
    overflow: hidden;
    display:flex;
    flex-wrap: wrap;
  }
</style>
