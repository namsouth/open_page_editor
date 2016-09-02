<template>
  <ul class="list-group">
    <li v-for="" class="list-group-item">
      {{msg}}
      <p style="color:lightgrey;font-size:0.7em">{{msg}}</p>
    </li>
  </ul>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
