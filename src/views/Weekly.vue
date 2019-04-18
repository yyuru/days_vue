<template>
  <div id="weekly">
    <header>
      <div class="title">Weekly Issues</div>
      <div class="sub">Month 15th,2019</div>
      <div class="toggle-week">
        <div class="up">
          <fontawesome :icon='["fas","chevron-up"]' />
        </div>
        <div class="later">
          <fontawesome :icon='["fas","chevron-down"]' />
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>
<style lang="stylus" scoped>
#weekly{
  position absolute
  top 0
  bottom 0
  right 0
  width calc(100% - 250px)
  font-family miso
  &>header{
    width 100%
    height 80px
    position relative
    padding 0 20px
    border-bottom 1px solid white
    &>.title{
      position absolute
      top 0
      left 20pxw
      height 80px
      width 200px
      line-height 80px
      text-align left 
      font-weight 700
      font-size 40px
      letter-spacing 1px
    }
    &>.sub{
      position absolute
      top 0
      right 60px
      height 80px
      line-height 80px
      font-size 21px
      color #07617d
    }
    &>.toggle-week{
      position absolute
      top 0
      right 20px
      height 80px
      width 40px
      &>div{
        width 100%
        height 40px
        line-height 40px
        text-align center
        cursor pointer
      }
    }
  }
}
</style>
