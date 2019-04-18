<template>
  <div id="quote-form">
    <div class="mask"></div>
    <div id="window">
      <div class="image"></div> 
      <header>You Hear From The World</header>
      <div id="form">
        <div class="formfield" :class="{active:qState}" v-on:click="quote!=''?qState=true:qState=!qState" >
          <label>Quote</label>
          <input type="text" name="" id="" :readonly="!qState" v-model="quote" />
        </div>
        <div class="formfield" :class="{active:bState}" v-on:click="by!=''? bState=true:bState=!bState">
          <label>By</label>
          <input type="text" name="" id="" :readonly="!bState" v-model="by"  />
        </div>
      </div>
      <div id="buttons">
        <div id="cancle" v-on:click="CloseQuoteForm">cancle</div>
        <div id="submit" v-on:click="submit" :class="{disabled:quote==''}">submit</div>
        
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import {createQuote} from '../../api/index.js'
export default {
  data() {
    return {
      qState:false,
      bState:false,
      quote:'',
      by:''
    }
  },
  methods: {
    ...mapActions(['setQuoteForm','setLoading','setNotice']),
    CloseQuoteForm(){
      this.setQuoteForm(false);
    },
    submit(){
      if(this.loading!=0){
        return
      }
      if(this.quote=='')
      {
        return
      }
      this.setLoading(1);
      createQuote(this.quote,this.by).then(res=>{
        this.setLoading(2)
        if(res.data.code==200){
          this.$emit("change-quotes");
          setTimeout(()=>{
            this.setLoading(3)
            this.setNotice("You get the new Quotes successfully!");
            this.quote='';
            this.by='';
          },2000)
          setTimeout(()=>{
              this.setLoading(0)
          },6000)
        }else{
          setTimeout(()=>{
            this.setLoading(3)
            this.setNotice("You get the new Quote failure!")
          },2000)
          setTimeout(()=>{
            this.setLoading(0)
          },6000)
        }
        
      })
    }
  },
  components:{
  },
  computed: {
    ...mapGetters(['loading']) 
  }
}
</script>
<style lang="stylus" scoped>
#quote-form{
  position absolute
  top 0
  bottom 0
  right 0
  left 0
  font-family miso
  z-index 2
  &>#window{
    position absolute
    width 300px
    height 400px
    background-color white
    z-index 2
    top calc(50% - 200px)
    left calc(50% - 150px)
    &>.image{
      height 100px
      width 100%
      background url('../../assets/images/6.jpg')
      background-size 100% 130%
    }
    &>header{
      height 60px
      width 100%
      line-height 60px
      font-size 25px
      padding 0 20px
    }
    &>#form{
      padding 0 20px
      width 100%
      height 160px
      &>.formfield{
        margin-bottom 20px
        height 60px
        position relative
        color #cccccc
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
        &>label{
          z-index 2
          position absolute
          font-size 30px
          top 14px
          left 10px
          transition all 0.5s
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
    &>#buttons{
      width 100%
      height 80px
      position relative
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
</style>
