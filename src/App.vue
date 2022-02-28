<template>
  <div>
    <router-view></router-view>
    <FootGuide v-show="$route.meta.isShowFoot" />
  </div>
</template>

<script type="text/ecmascript-6">
import FootGuide from "@/components/FootGuide/FootGuide.vue"

  export default {
    name:'App',
    components:{
      FootGuide
    },
   
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


 
</style>

