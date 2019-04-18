<template>
  <div id="today">
    <header>
      {{week|formatWeek}},{{month|formatMonth}} {{day}} {{year}}
      <fontawesome :icon='["far","calendar-alt"]' />
    </header>
    <Timeline />
    <Things :plans="plans" />
  </div>
</template>
<script>
import {getPlan} from '../api/index.js'
import Timeline from '../widget/timeline'
import Things from '../widget/things'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      plans:[]
    }
  },
  components:{
    Timeline,
    Things
  },
  computed: {
    ...mapGetters(['currentDate']),
    year: (vm) => {
      return new Date(vm.currentDate).getFullYear();
    },
    month: (vm) => {
      return new Date(vm.currentDate).getMonth() + 1;
    },
    day: (vm) => {
      return new Date(vm.currentDate).getDate();
    },
    week:(vm)=>{
      return new Date(vm.currentDate).getDay();
    }

  },
  created() {
    getPlan(this.currentDate).then(res=>{
      this.plans=res.data.data.recordset;
    })
  },
  filters:{
    formatMonth: month => {
      if (month == 1) {
        return "Jan.";
      } else if (month == 2) {
        return "Feb.";
      } else if (month == 3) {
        return "Mar.";
      } else if (month == 4) {
        return "Apr.";
      } else if (month == 5) {
        return "May.";
      } else if (month == 6) {
        return "June.";
      } else if (month == 7) {
        return "July.";
      } else if (month == 8) {
        return "Aug.";
      } else if (month == 9) {
        return "Sept.";
      } else if (month == 10) {
        return "Oct.";
      } else if (month == 11) {
        return "Nov.";
      } else if (month == 12) {
        return "Dec.";
      }
    },
    formatWeek:week=>{
      if(week==0){
        return 'Sun'
      }else if(week==1){
        return 'Mon'
      }else if(week==2){
        return 'Tue'
      }else if(week==3){
        return 'Wen'
      }else if(week==4){
        return 'Thur'
      }else if(week==5){
        return 'Fri'
      }else if(week==6){
        return 'Sat'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
#today{
  position absolute
  top 0
  bottom 0
  right 0
  width calc(100% - 250px)
  font-family miso
  &>header{
    height 80px
    width 100%
    line-height 80px
    letter-spacing 3px
    padding 0 50px
    border-bottom 1px solid white
    font-weight 700
    font-size 40px
    &>svg{
      color #f9a828
      cursor pointer
      font-size 20px
    }
  }
}
</style>
