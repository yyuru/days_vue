<template>
  <div id="note">
    <div id="add-note">
      <fontawesome :icon='["fas","plus"]'/>
    </div>
    <div id="note-list">
      <div class="note-item">
        <div class="cover"></div>
        <div class="content">
          <div class="title">
            Planning your final summer trip
          </div>
          <div class="datetime">
            Thur Apri.4 2019
          </div>
          <div class="describe">
            Summer is coming to a close just around the conner.But it's not too late to squeeze in one last weekend trip...
          </div>
          <div class="more">
            READ MORE
          </div>
        </div>
      </div>
      <div class="note-item">

      </div>
      <div class="note-item">

      </div>
      <div class="note-item">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    //<Editor api-key="r2xwq257yy9uscylmlw0kkhtdlh93xjnvcdlmordo2oao9r5" />
  }
}
</script>
<style lang="stylus" scoped>
#note{
  position relative
  width: 100%;
  height: calc(100% - 240px);
  &>#add-note{
    z-index 1
    position absolute
    color white
    background-color #f9a828 
    width 60px
    height 60px
    font-size 30px
    line-height 60px
    text-align center
    border-radius 50%
    box-shadow 0 10px 20px -15px #2e383f
    bottom 20px
    left 20px
    cursor pointer
  }
  &>#note-list{
    z-index 0
    position absolute
    top 0
    bottom 0
    right 0
    left 0
    overflow-x hidden
    overflow-y auto
    padding 0 20px
    padding-top 10px
    &>.note-item{
      float left
      width 400px
      height 450px
      background-color #f5f5f5
      margin-left calc(25% - 200px)
      margin-bottom 10px
      transition all 0.5s
      &:hover{
        box-shadow: 0 10px 20px -15px #2e383f;
      }
      &>.cover{
        margin 0 1px
        width 398px
        height 225px
        background url('../../assets/images/4.jpg')
        background-size 100% 100%
        
      }
      &>.content{
        width 100%
        height 225px
        padding 20px
        &>.title{
          height 30px
          line-height 30px
          font-size 25px
          color #07617d 
          letter-spacing 1px
        }
        &>.datetime{
          height 20px
          line-height 20px
          font-size 18px
          text-align right
          color #aaaaaa
        }
        &>.describe{
          height 120px
          line-height 20px
          font-size 18px
          padding 20px 0
          letter-spacing 1px
        }
        &>.more{
          letter-spacing 2px
          font-weight 700
          color #f9a828 
          cursor pointer
        }
      }
    }
  }
}
</style>
