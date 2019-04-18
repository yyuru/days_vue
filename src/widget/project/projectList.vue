<template>
  <div id="projects">
    <header>
      Projects
    </header>
    <div id="project-list">
      <div class="project-item">
        <div class="title">
          Days
        </div>
        <div class="info">
          <fontawesome :icon='["far","calendar-check"]' />&nbsp; 
          <span>Thur</span>,<span>Apri.</span><span>4</span>
        </div>
        <div class="status progress">
          In progress
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
#projects{
  position absolute
  height 100%
  font-family miso
  width 250px
  &>header{
    height 60px
    width 250px
    line-height 60px
    text-align center
    font-size 30px
    letter-spacing 1px
    border-bottom 1px solid  #2e383f
  }
  &>#project-list{
    width 250px
    height calc(100% - 60px)
    overflow-x hidden
    overflow-y auto
    &>.project-item{
      position relative
      cursor pointer
      width 250px
      height 60px
      padding 0 20px
      border-bottom 1px solid #2e383f
      &>.title{
        height 30px
        line-height 30px
        font-size 30px
      }
      &>.info{
        height 30px
        line-height 30px
        letter-spacing 1px
      }
      &>.status{
        position absolute
        height 30px
        top 15px
        right 20px
        line-height 30px
        padding 0 5px
      }
      &>.progress{
        border 1px solid red
        color red
      }
    }
  }
}
</style>
