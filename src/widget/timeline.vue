<template>
  <div id="timeline">
    <div class="time-span" 
      v-for="(item,index) in timespan" 
      :key="index">
      <div class="content">
        {{item}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timespan:[
        "08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"
      ]
    }
  },
}
</script>
<style lang="stylus" scoped>
#timeline{
  position absolute
  top 80px
  left 0
  width 200px
  height calc(100% - 80px)
  &>.time-span{
    height 10%
    width 100%
    text-align center
    min-height 60px
    display table
    &>.content{
      width 100%
      height 50px
      line-height 50px
      display table-cell
      vertical-align middle
    }
  }
}
</style>
