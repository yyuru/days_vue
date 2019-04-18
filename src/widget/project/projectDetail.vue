<template>
  <div id="project-detail">
    <header>
      Days
    </header>
    <div class="info">
      <fontawesome :icon='["far","calendar-check"]' />&nbsp; 
      <span>Thur</span>,<span>Apri.</span><span>4</span>
      <div class="priority">
        Priority: <span class="high">High</span> 
      </div>
    </div>
    <Tab />
    <router-view />
  </div>
</template>
<script>
import Tab from '../../components/nav/tabbar.vue'
export default {
  components:{
    Tab
  }
    
}
</script>
<style lang="stylus" scoped>
#project-detail{
  position absolute
  height 100%
  width calc(100% - 250px)
  right 0
  background-color white
  box-shadow 0 0 5px 0px #2e383f
  font-family miso
  &>header{
    color white
    padding 0 20px
    height 120px
    width 100%
    line-height 170px
    font-weight 700
    letter-spacing 1px
    font-size 60px
    background url('../../assets/images/3.jpg')
    background-size 100% 160%
    background-position cover
  }
  &>.info{
    height 40px
    line-height 40px
    font-size 25px
    padding 0 20px
    &>.priority{
      margin-left 20px
      display inline-block
      &>.high{
        color red
      }
    }
    
  }
}
</style>
