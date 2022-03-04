<template>
  <div class="foot-guide">
      <div class="guide-item" :class="{on:$route.path === '/msite'}" @click="goto('/msite')">
          <span><i class="iconfont icon-shouye"></i></span>
          <span>{{$t('footer_home')}}</span>
      </div>
      <div class="guide-item" :class="{on:$route.path === '/search'}" @click="goto('/search')">
          <span><i class="iconfont icon-sousuo"></i></span>
          <span>{{$t('footer_search')}}</span>
      </div>
      <div class="guide-item" :class="{on:$route.path === '/order'}" @click="goto('/order')">
          <span><i class="iconfont icon-dingdan"></i></span>
          <span>{{$t('footer_order')}}</span>
      </div>
      <div class="guide-item" :class="{on:$route.path === '/profile'}" @click="goto('/profile')">
          <span><i class="iconfont icon-geren"></i></span>
          <span>{{$t('footer_own')}}</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      name:'FootGuide',
      methods:{
          goto(path){
              if(path!==this.$route.path){
                this.$router.replace(path)
              }else {
                window.location.href = path
              }
          }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.stylus"
     
    .foot-guide
      top-border-1px(#cccccc)
      position fixed
      bottom 0
      height 50px
      display flex
      width 100%
      background #fff
      .guide-item 
        width 25%
        display flex
        flex-direction column
        align-items center
        justify-content center
        &.on
          color $green
        span 
          margin-top 3px
          i 
            font-size 22px
</style>
