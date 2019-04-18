<template>
  <div id="projectPreview">
    <div class="sub-title">Project</div>
    <div id="project-list">
      <div class="project-item">
        <div class="project-describe">
          <div class="project-title">
            Days
          </div>
          <div class="more">
            view all >
          </div>
        </div>
        <div class="current-task">
          current task: <span class="task-name"> UI Create </span>
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
#projectPreview{
  position relative
  height 480px
  width 360px
  margin calc(30vh - 240px) calc(50% - 180px) calc(30vh - 240px) calc(25% - 90px)
  box-shadow: 0 10px 20px -15px #2e383f;
  padding 10px
  background-color #ffffff
  &>.add-report{
    width 40px
    height 40px
    position absolute
    background-color #f9a828 
    border-radius 50%
    line-height 40px
    cursor pointer
    text-align center
    color white
    right -20px
    box-shadow: 0 10px 20px -15px #2e383f;
    top -20px
  }
  &>#project-list{
    overflow-y auto
    overflow-x hidden
    width 340px
    height 430px
    font-family miso
    &>.project-item{
      width 340px
      height 120px
      &>.project-describe{
        position relative
        width 340px
        height 90px
        background url(../../assets/images/3.jpg)
        background-size 100% 160%
        background-position cover
        color white
        letter-spacing 1px
        &>.project-title{
          position absolute
          left 10px
          bottom 10px
        }
        &>.more{
          position absolute
          right 10px
          bottom 10px
          cursor pointer
        }
      }
      &>.current-task{
        width 340px
        height 30px
        line-height 30px
        font-size 20px
        color #07617d
        &>.task-name{
          display inline-block
          width 250px
          text-align  right
        }
      }
    }
  }
}
</style>
