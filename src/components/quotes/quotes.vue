<template>
  <div id="quotes" ref="quotes" @mousewheel="togglePage"> 
    <div class="quotes">
      <div class="sub-title">Quotes</div>
      <div class="quote-sign">
        <fontawesome :icon='["fas","quote-left"]' size="2x" />
      </div>
      <transition
        enter-active-class="animated flipInX" 
        leave-active-class="animated flipOutX">
      >
         <div class="quote-content" v-if="toggle==1">
          <p>
            {{quotes.length>0?quotes[currentQuote].Quote:''}}
          </p>
        </div>
      </transition>
      <transition
        enter-active-class="animated flipInX" 
        leave-active-class="animated flipOutX">
      >
        <div class="quote-auther" v-if="toggle==1">
          by {{quotes.length>0?quotes[currentQuote].By:''}}
        </div>
      </transition>
      
      <div class="add-quote" v-on:click='openQuoteForm'>
        <fontawesome :icon='["fas","plus"]'/>
      </div>
      
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props:{
    quotes:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
      currentQuote:0,
      toggle:1
    }
  },
  methods: {
    ...mapActions(['setQuoteForm']),
    openQuoteForm(){
      this.setQuoteForm(true)
    },
    togglePage(event){
      if(event.deltaY>0){
        //down
        if(this.toggle==0){
          return
        }
        if(this.currentQuote==this.quotes.length-1){
          return
        }
        this.toggle=0;
        this.currentQuote=this.currentQuote<this.quotes.length-1?this.currentQuote+1:this.currentQuote;
        setTimeout(()=>{this.toggle=1},1000)
        
      }else{
        //up
        if(this.toggle==0){
          return
        }
        if(this.currentQuote==0){
          return
        }
        this.toggle=0;
        this.currentQuote=this.currentQuote>0?this.currentQuote-1:0;
        setTimeout(()=>{this.toggle=1},1000)
      }
    }
  },
  mounted() {
  }
}
</script>
<style lang="stylus" scoped>
#quotes{
  position relative
  width 100%
  height 100%
  &>.quotes{
    position absolute
    width 340px
    box-shadow: 0 10px 20px -15px #2e383f;
    height 320px
    background-color #ffffff
    margin calc(20vh - 160px) calc(50% - 170px) 
    padding 10px
    &:hover{
      &>.add-quote{
        opacity 1  
      }
    }
    &>.quote-sign{
      width 100%
      height 40px
      line-height 40px
      font-family miso
      font-weight 700
      text-align center
    }
    &>.quote-content{
      height 190px
      width 100%
      font-family miso
      display table
      &>p{
        display table-cell
        vertical-align middle
        font-size 18px
        line-height 30px
        padding-left 20px
        padding-right 20px 
      }
    }
    &>.quote-auther{
      height 30px
      width 100%
      line-height 30px
      text-align center
      font-family danielbk
    }
    &>.add-quote{
      width 40px
      height 40px
      position absolute
      background-color #f9a828 
      border-radius 50%
      line-height 40px
      cursor pointer
      text-align center
      color white
      bottom -20px
      left 45%
      box-shadow: 0 10px 20px -15px #2e383f;
      opacity 0
      transition all 1s
    }
  }
}

</style>
