<template>
  <div id="tab">
    <router-link to="/project/task" >
      <div class="tab-item" :class="{active:active==1}" v-on:click="active=1">
        Tasks
      </div>
    </router-link>
    <router-link to="/project/note" >
      <div class="tab-item" :class="{active:active==2}" v-on:click="active=2">
        Notes
      </div>
    </router-link>
   </div>
</template>
<script>
export default {
  data(){
    return {
      active:1
    }
  }
}
</script>
<style lang="stylus">
#tab{
  height 60px
  width 100%
  padding 0 20px
  margin-top 20px
  border-bottom 1px solid #cccccc
  &>a>.tab-item{
    float left
    height 60px
    width auto
    padding 10px 30px
    font-size 20px
    line-height 40px
    color #cccccc
    cursor pointer
    &:hover{
      color #2e383f
    }
    
  }
  &>a>.active{
    color #2e383f
    border-bottom 4px solid #f9a828 
  }
}
</style>
