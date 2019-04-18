<template>
  <div id="loading" :class="{loading:loading==1,loaded:loading==2,open:loading==3}" >
    <transition name="show"  
      :duration="{enter:2000,leave:0}" 
      enter-active-class="animated fadeInDown" 
      leave-active-class="animated zoomOut"
    >
      <div id="close" v-on:click="setLoading(0)" v-if="loading==3">
        <fontawesome :icon='["fas","times"]' />
      </div>
    </transition>
    <transition
      enter-active-class="animated fadeInDown" 
      leave-active-class="animated fadeOutUp"
    >
      <div id="notice" v-if="loading==3">
        <fontawesome :icon='["fas","bell"]' />
        {{notice}}
      </div>
    </transition>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['loading','notice'])
  },
  methods: {
    ...mapActions(['setLoading']) 
  }
}
</script>
<style lang="stylus">
#loading{
  position absolute
  top 0
  left 250px
  width 0
  height 10px
  z-index 100
  transition all 2s ease
  background-color #f9a828
  &>#close{
    position absolute
    right 20px
    font-size 20px
    top 8px
    color white  
    cursor pointer 
  }
  &>#notice{
    position absolute
    left 20px
    height 30px
    top 5px  
    line-height 30px
    font-size 25px
    color white
  }
  .fadeInDown{
    animation-delay 0.5s
  }
}
.loading{
  width calc(100% - 300px)!important
}
.loaded{
  width calc(100% - 250px)!important
}
.open{
  width calc(100% - 250px)!important
  height 40px!important
}
</style>
