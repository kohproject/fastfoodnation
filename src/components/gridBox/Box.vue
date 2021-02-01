<template>
    <div class="box"  v-for="rest in $rests" :class="rest.cl" :key="rest.id"><h3>{{rest.name}}</h3>
        <ul>
            <li class="li__rest" v-for="(itm,index) in rest.type" :key='index'>
                <a href="javascript:void(0)" v-on:click="showLocs($event)">{{itm}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Box",
    props:['rests'],
    data(){
        return {
            $rests: this.rests
        }
    },
    methods:{
        
        showLocs(evt){
         evt.preventDefault();
            alert(evt.target.text);
        }
    }
}
</script>
<style lang="scss" scoped>
    .box{
        display:flex;
        flex:1;
        min-width:140px;
        flex-direction:column;
        min-height:200px;
        float:left;
        font-size:13px;
        border:solid 1px #333;
        border-top:solid 4px green;
        margin:0px 12px 12px 0px;
        h3{
            text-align: left;
            background: #eee;
            padding:4px 4px 4px 12px;
        }
        ul{
            display:block;
            margin:0px;
            padding:0px;
            li{
                text-align: left;
                list-style: none;
                margin:0px;
                padding:0px 0px 0px 12px;
            }
        }
    }
    .pi{
        border-top:solid 4px red;
    }
</style>