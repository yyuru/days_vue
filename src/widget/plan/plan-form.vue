<template>
  <div id="plan-form">
    <div class="mask"></div>
    <div id="window">
      <div id="image"></div>
      <div id="form">
        <header>Run the day</header>
        <div id="form-content">
          <div class="title" :class="{active:tstate}" @click="title!=''?tstate=true:tstate=!tstate">
            <label>Title</label>
            <input type="text" name="" id="" :readonly="!tstate" v-model="title" />
          </div>
          <div class="priority" :class="{active:pstate}" @click="priority!=''?pstate=true:pstate=!pstate">
            <label>Priority</label>
            <!-- <input type="text" name="" id="" :readonly="!pstate" v-model="priority" /> -->
            <select name="" id="" :readonly="!pstate" v-model="priority">
              <option value=""></option>
              <option value="3">High</option>
              <option value="2">Middle</option>
              <option value="1">Low</option>
            </select>
          </div>
          <div class="starttime" :class="{active:sstate}" @click="starttime!=''?sstate=true:sstate=!sstate">
            <label>From</label>
            <input type="text" name="" id="" :readonly="!sstate" v-model="starttime" />
          </div>
          <div class="endtime" :class="{active:estate}" @click="endtime!=''?estate=true:estate=!estate">
            <label>To</label>
            <input type="text" name="" id="" :readonly="!estate" v-model="endtime" />
          </div>
          <div class="about" :class="{active:astate}" @click="about!=''?astate=true:astate=!astate">
            <label>About</label>
            <input type="text" name="" id="" :readonly="!astate" v-model="about" />
          </div>
        </div>
        <div class="buttons">
          <div id="cancle" v-on:click="closePlanForm">cancle</div>
          <div id="submit" v-on:click="submit">submit</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
import {createPlan} from '../../api/index.js'
export default {
  data() {
    return {
      title:'',
      tstate:false,
      priority:'',
      pstate:false,
      about:'',
      astate:false,
      starttime:'',
      sstate:false,
      endtime:'',
      estate:false
    }
  },
  computed: {
    ...mapGetters(['loading'])
  },
  methods: {
   ...mapActions(['setPlanForm','setLoading','setNotice']),
   closePlanForm(){
     this.setPlanForm(false)
   },
   submit(){
     if(this.loading!=0) return
     if(this.title=="") return
     if(this.priority=="") return
     if(this.about=="") return
     if(this.starttime=="") return
     if(this.endtime=="") return
     this.setLoading(1);
     let date=new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate();
     createPlan(this.title,this.priority,this.about,date+' '+this.starttime,date+' '+this.endtime).then((res)=>{
        this.setLoading(2)
        if(res.data.code==200){
          this.$emit("change-plans");
          setTimeout(()=>{
            this.setLoading(3)
            this.setNotice("You get the new Plan successfully!");
            this.title='';
            this.priority='';
            this.about='';
            this.starttime='';
            this.endtime='';
          },2000)
          setTimeout(()=>{
              this.setLoading(0)
          },6000)
        }else{
          setTimeout(()=>{
            this.setLoading(3)
            this.setNotice("You get the new Plan failure!")
          },2000)
          setTimeout(()=>{
            this.setLoading(0)
          },6000)
        }
     })
   } 
  }
}
</script>
<style lang="stylus" scoped>
#plan-form{
  position absolute
  top 0
  bottom 0
  right 0
  left 0
  font-family miso
  z-index 2
  &>#window{
    position absolute
    width 600px
    height 500px
    background-color white
    z-index 2
    top calc(50% - 250px)
    left calc(50% - 300px)
    &>#image{
      position absolute
      top 0
      left 0
      height 100%
      width 300px
      background url('../../assets/images/7.jpg')
      background-size 100% 130%  
    }
    &>#form{
      position absolute
      top 0
      right 0  
      height 100%
      width 300px
      &>header{
        height 60px
        width 100%
        line-height 60px
        font-size 25px
        padding 0 20px  
      }
      &>#form-content{
        height 360px
        width 100%
        padding 0 20px
        &>div{
          margin-bottom 20px
          height 50px
          position relative
          color #cccccc 
          &>label{
            z-index 2
            position absolute
            font-size 30px
            top 9px
            left 0px
            transition all 0.5s  
          }
          &>input{
            border none
            border-bottom 2px solid #cccccc 
            outline none
            position absolute
            top 0
            right 0
            left 0
            bottom 0
            width 260px
            z-index 1
            font-size 20px
            padding 0
            padding-left 10px 
          }
          &>select{
            border none
            border-bottom 2px solid #cccccc 
            outline none
            position absolute
            top 0
            right 0
            left 0
            bottom 0
            width 260px
            z-index 1
            font-size 20px
            padding 0
            padding-left 10px 
            font-family miso
            &>option{
              &:hover{
                background-color   #f9a828
              }
            }
          }
          &:after{
              position absolute
              bottom 0
              width 0px
              height 2px
              background-color #f9a828
              content ''
              z-index 2
              display block
              transition all 0.5s
          }
        }
        &>.active{
          &>label{
            font-size 18px
            top -10px
            left 0px
            color #f9a828
          } 
          &:after{
            width 260px
          } 
        }
      }
      &>.buttons{
        position relative
        height 80px
        width 100%
        &>div{
          position absolute
          height 40px
          width 80px
          top 20px
          line-height 40px
          cursor pointer
          text-align center 
          border-radius 5px
          font-size 22px
          font-weight 300
        }
        &>#cancle{
          left 20px
          color #cccccc
          transition all 0.5s
          &:hover{
            background-color #07617d 
            box-shadow 0 10px 20px -15px #2e383f
            color #ffffff
          }
        }
        &>#submit{
          background-color #f9a828
          color #ffffff
          box-shadow 0 10px 20px -15px #2e383f
          right 20px
        }
        &>.disabled{
          background-color #cccccc!important  
        }
      }
    }
  }
}
</style>
