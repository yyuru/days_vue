<template>
  <div id="plan">
    <div class="add-plan" v-on:click="openPlanForm"><fontawesome :icon='["fas","plus"]'/></div>
    <div class="sub-title">Plan</div>
    <div id="plan-list">
      <div class="plan-item" v-for="(item) in plans" :key="item.uid">
        <div class="more">
          <fontawesome :icon='["fas","ellipsis-h"]' />
        </div>
        <div class="time">
          <div class="starttime">
            {{item.StartTime|formatTime}}
          </div>
          <div class="endtime">
            {{item.EndTime|formatTime}}
          </div>
        </div>
        <div class="priority"></div>
        <div class="plan-detail">
          <div class="title">
            {{item.Title}}
          </div>
          <div class="describe">
            {{item.About}}
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props:{
    plans:{
      type:Array,
      required:true
    }
  },
  data(){
    return {

    }
  },
  methods: {
    ...mapActions(['setPlanForm']),
    openPlanForm(){
      this.setPlanForm(true)
    }
  },
  filters:{
    formatTime(value){
      let h=new Date(value).getHours()>9?new Date(value).getHours():'0'+new Date(value).getHours();
      let m=new Date(value).getMinutes()>9?new Date(value).getMinutes():'0'+new Date(value).getMinutes();
      return `${h}:${m}`
    }
  }
}
</script>
<style lang="stylus" scoped>
#plan{
  position relative
  height 480px
  width 360px
  margin calc(30vh - 240px) calc(25% - 90px) calc(30vh - 240px) calc(50% - 180px)
  box-shadow: 0 10px 20px -15px #2e383f;
  background-color #ffffff
  padding 10px
  &>.add-plan{
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
  &>#plan-list{
    width 100%
    height 430px
    padding-top 10px
    overflow-y auto
    &>.plan-item{
      cursor pointer
      width 100%
      height 60px
      padding 5px
      position relative
      &:hover{
        &>.more{
          display block
        }
      }
      &>.more{
        width 30px
        height 30px
        background-color rgba(249,168,40,1)
        z-index 10000
        position absolute
        top 5px
        right 0
        cursor pointer
        text-align center
        line-height 30px
        color #ffffff
        font-size 15px
        box-shadow: 0 10px 20px -15px #2e383f;
        border-radius 50%
        display none
      }
      &>.time{
        z-index 1
        position absolute
        height 50px
        width 100px
        left 0
        top 5px
        font-family miso
        padding-left 20px
        letter-spacing 1px
        &>.starttime{
          height 30px
          line-height 30px
          font-size 30px
          color #f9a828
        }
        &>.endtime{
          height 20px
          line-height 20px
          font-size 20px
          color #cccccc
        }
      }
      &>.priority{
        z-index 1
        position absolute
        height 50px
        width 5px
        background-color #f9a828
        left 100px
        top 5px
      }
      &>.plan-detail{
        z-index 1
        position absolute
        height 50px
        width 235px
        right 0
        top 5px
        font-family miso
        padding-left 20px
        letter-spacing 1px
        &>.title{
          height 30px
          line-height 30px
          font-size 30px
          color black
        }
        &>.describe{
          height 20px
          line-height 20px
          font-size 19px
          color #cccccc
        }
      }
    }
  }
}
</style>
