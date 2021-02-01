<template>

    <div>
        <select id="sel_sort" v-on:change="filterout">
             <option selected value=null>--select--</option>
            <option value="pi">pizza</option>
            <option value="sa">sandwich</option>
            <option value="ta">taco</option>
            <option value="mi">middle east</option>
            <option value="di">diner</option>
            <option value="bu">burger</option>
        </select>
    </div>
</template>
<script>

import {createNamespacedHelpers} from 'vuex';
const {mapActions} = createNamespacedHelpers('mod1');

export default {
    name:"Filterbar",
   

    computed:mapActions({
        filterout: "displayByType"
    })
    
  
}
</script>