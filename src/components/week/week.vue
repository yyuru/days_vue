<template>
  <div id="week">
    <div class="sub-title">Today</div>
    <div id="date">
      <div id="date-content">
        <span class="day">{{day}}</span>&nbsp; 
        <span class="month">{{month | formatMonth}}</span>
        <span class="year">{{year}}</span>
      </div>
      <div id="toggle-week">
        <fontawesome id="left" :icon='["fas","chevron-left"]' size="1x"  v-on:click="TogglePreviousWeek"/>
        <fontawesome id="right" :icon='["fas","chevron-right"]' size="1x" v-on:click="ToggleNextWeek"/>
      </div>
    </div>
    <div id="week-content">
      <div id="week-days">
        <div id="week-name">
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div>
        <div id="day-number">
          <div v-for="(item,index) in currentWeek" :key="index" v-on:click="UpdateDateTime(item)">
            <div class="number" :class="{today:new Date(item).getDate()==day}">{{new Date(item).getDate()}}</div>
            <div :class="{state:new Date(item).getDate()==day}"></div>
          </div>
        </div>
      </div>
      <div id="week-matters">
        <div class="sub-title">
          Matters
        </div>
        <div class="tasks">
          <span id="done">
            4
          </span>
          <span id="task-count">
            /15
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['currentDate','currentWeek']),
    year: (vm) => {
      return new Date(vm.currentDate).getFullYear();
    },
    month: (vm) => {
      return new Date(vm.currentDate).getMonth() + 1;
    },
    day: (vm) => {
      return new Date(vm.currentDate).getDate();
    },
    week: () => {
      let week = ["", "", "", "", "", "", ""];
      let today_index = new Date().getDay() - 1;
      let today_number = new Date().getDate();
      let newWeek = week.map((item, index) => {
        return today_number + (index - today_index);
      });
      return newWeek;
    }
  },
  filters: {
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
    }
  },
  methods: {
    ...mapActions(['setCurrentDate','setCurrentWeek']),
    UpdateDateTime(item){
      this.setCurrentDate(new Date(item));
    },
    ToggleNextWeek(){
     let newWeek=this.currentWeek.map(item=>{
       let diff=7*24*60*60*1000;
       let temp=new Date(item).getTime()+diff;
       return new Date(temp); 
     });
     this.setCurrentWeek(newWeek);
    },
    TogglePreviousWeek(){
      let newWeek=this.currentWeek.map(item=>{
       let diff=7*24*60*60*1000;
       let temp=new Date(item).getTime()-diff;
       return new Date(temp); 
     });
     this.setCurrentWeek(newWeek);
    }
  },
};
</script>
<style lang="stylus" scoped>
#week {
  position: relative;
  width: 753px;
  height: 200px;
  margin calc(20vh - 100px) calc(50% - 376px)
  &>#date {
    position: relative;
    height: 50px;
    line-height: 50px;
    margin-bottom 20px
    &>#date-content {
      position: absolute;
      left: 0;
      width: 90%;
      height: 100%;
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 4px;
      font-family: miso;
    }

    &>#toggle-week {
      position: absolute;
      right: 0;
      width: 10%;
      min-width: 75px;
      height: 100%;
      text-align: right;

      &>svg {
        position: absolute;
        cursor: pointer;
      }

      &>#left {
        left: 0;
        top: 16px;
        height: 18px;
      }

      &>#right {
        top: 16px;
        right: 0;
        height: 18px;
      }
    }
  }

  &>#week-content {
    width: 100%;
    height: 100px;
    position relative
    &>#week-days {
      font-size: 25px;
      font-weight: 700;
      font-family: miso;
      width: 75%;
      height: 100%;
      background-color: #ffffff;
      box-shadow: 0 10px 20px -15px #2e383f;
      padding: 5px 20px 10px 20px;

      &>#week-name {
        width: 100%;
        height: 32px;
        color: #cccccc;

        // border-bottom 1px solid #f9a828
        &>div {
          float: left;
          width: calc((100% / 7));
          text-align: center;
        }
      }

      &>#day-number {
        width: 100%;
        height: 53px;

        &>div {
          height: 100%;
          float: left;
          width: calc((100% / 7));
          text-align: center;
          cursor pointer
          &>.today{
            background-color #f9a828 
            border-radius 20px
            box-shadow: 0 10px 20px -15px #2e383f;
            color #ececeb 
          }
          &>.number {
            width: 100%;
            height: 45px;
            line-height: 45px;
          }

          &>.state {
            margin: 0 auto;
            margin-top 5px
            width: 8px;
            height: 8px;
            background-color: #07617d;
            border-radius: 50%;
          }
        }
      }
    }
    &>#week-matters{
      position absolute
      top 0
      right 0
      width: 20%;
      height: 100%;
      background-color: #ffffff;
      box-shadow: 0 10px 20px -15px #2e383f;
      padding 10px
      &>.tasks{
        height 50px
        line-height 50px
        text-align right 
        font-family miso
        &>#done{
          font-size 40px
          font-weight 700
        }
        &>#task-count{
          color #cccccc
        }
      }
    }
  }
}
</style>

