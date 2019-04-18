<template>
  <div id="tasks">
    <div id="tasks-state">
     
      <div id="tasks-number">
        <span>Today:</span> &nbsp; 
        <span>2 </span>task 
        <span class="completed">completed</span> out of
        <span>10</span>
      </div>
      <div id="tasks-bar">
        <div id="progress-bar">
        </div>
      </div>
    </div>
    <div  id="tasks-list">
      <div id="today-list">
        <header>
          Today
        </header>
        <div class="list">
          <div class="item" v-for="item in todays" :key="item.uid">
            <div class="tools" v-if="item.menu">
                <fontawesome :icon='["fas","check"]' />&nbsp; 
                <fontawesome :icon='["fas","edit"]' />&nbsp; 
                <fontawesome :icon='["fas","trash"]' />&nbsp; 
            </div>
            <div class="item-inner">
              <div class="datetime">
                <span class="date">
                  Apri. 4
                </span>
                &nbsp; 
                <span class="time">
                  {{item.time}}
                </span>
              </div>
              <div class="title">
                {{item.title}}
              </div>
              <div class="describe">
                {{item.describe}}
              </div>
            </div>
            <div class="item-menu" v-on:click="toggleMenu(item)">
              <div>
                <fontawesome :icon='["fas",item.menuIcon]' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="nextday-list">
        <header>
          NextDay
        </header>
        <div class="list">

        </div>
      </div>
      <div id="completed">
        <header>
          Completed
        </header>
        <div class="list">
        
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todays:[
        {
          time:'17:00',
          title:'UI',
          describe:'create ui',
          menu:false,
          uid:0,
          menuIcon:'ellipsis-v'
        }
      ]
    }
  },
  methods: {
    toggleMenu(item){
      item.menu=!item.menu;
      if(item.menu){
        item.menuIcon="times";
      }else{
        item.menuIcon="ellipsis-v";
      }
    } 
  },
}
</script>
<style lang="stylus" scoped>
#tasks{
  width 100%
  height calc(100% - 240px)
  &>#tasks-state{
    position relative
    height 60px
    width 100%
    padding 0 20px
    &>#tasks-number{
      font-size 20px
      letter-spacing 1px
      line-height 60px
      &>.completed{
        color green
      }
    }
    &>#tasks-bar{
      border-radius 5px
      width 200px
      height 5px
      background-color #cccccc
      position absolute
      top 27px
      left 300px
      &>#progress-bar{
        width 40px
        height 5px
        background-color #f9a828
        border-radius 5px
      }
    }
  }
  &>#tasks-list{
    width 100%
    height calc(100% - 60px)
    &>div{
      position relative
      float left
      height 98%
      width 250px
      margin 0 calc(16.5% - 125px)
      box-shadow: 0 10px 20px -15px #2e383f;
      background-color #ececeb
      &>header{
        height 40px
        line-height 40px
        font-size 25px
        text-align center
        color white
        background-color #f9a828
      }
      &>.list{
        padding 10px
        width 250px
        height calc(100% - 40px)
        overflow-x hidden
        overflow-y auto
        &>.item{
          width 230px
          height auto
          margin-bottom 10px
          background-color #ffffff
          border-radius 5px
          padding 5px
          position relative
          &>.tools{
            position absolute
            top 0
            bottom 0
            right 0
            left 0
            background-color rgba(249,168,40,0.6)
            display block
            border-radius 5px
            color white
            line-height 100px
            text-align center
            font-size 30px
            letter-spacing 10px
            &>svg{
              cursor pointer
            }
          }
          &>.item-menu{
            position absolute 
            top 10px
            right 15px
            color #07617d
            cursor pointer
            text-align center
          }
          &>.item-inner{
            width 100%
            height auto
            border-left 4px solid #07617d 
            border-radius 4px
            &>.datetime{
              height 25px
              width 100%
              font-size 20px
              line-height 25px
              padding 0 10px
              color #cccccc
            }
            &>.title{
              height 40px
              width 100%
              font-size 25px
              line-height 40px
              padding 0 10px
            }
            &>.describe{
              padding 0 10px
              height auto 
              min-height 20px
              width 100%
              color #cccccc
            }
          }
        }
      }
    }
  }
}
</style>
