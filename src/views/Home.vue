<template>
  <div id="home">
    <div id="w">
      <Week />
    </div>
    <div id="q">
      <Quotes :quotes="quotes" />
    </div>
    <div id="p">
      <Plan :plans="plans" />  
    </div>
    <div id="r">
      <Project  />
    </div>
    <div id="t">
      <Note />
    </div>
    <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <PlanForm v-show="planForm" @change-plans="freshPlan" />
    </transition>
    <transition 
    name="fade" 
    enter-active-class="animated zoomIn" 
    leave-active-class="animated zoomOut"
    >
      <QuotesForm  v-show="quoteForm" @change-quotes="freshQuote" />      
    </transition>
    
  </div>
</template>

<script>
import Week from '@/components/week/week.vue'
import Quotes from '@/components/quotes/quotes.vue'
import Plan from '../widget/plan/plan'
import Project from '../widget/project/projectPreview'
import Note from '../widget/note/note'
import QuotesForm from '@/components/quotes/quote-form' 
import PlanForm from '../widget/plan/plan-form'
import {mapGetters} from 'vuex'
import {getPlan,getQuotes} from '../api/index.js'
export default {
  name: 'home',
  data() {
    return {
      quotes:[],
      plans:[]
    }
  },
  components: {
    Week,
    Quotes,
    Plan,
    Project,
    Note,
    QuotesForm,
    PlanForm
  },
  computed: {
    ...mapGetters(['quoteForm','planForm','currentDate'])
  },
  mounted() {
    getPlan(this.currentDate).then(res=>{
      this.plans=res.data.data.recordset;
    });
    getQuotes().then(res=>{
      this.quotes=res.data.data.recordset;
    })
  },
  methods: {
    freshQuote(){
      getQuotes().then(res=>{
        this.quotes=res.data.data.recordset;
      })
    },
    freshPlan(){
      getPlan(this.currentDate).then(res=>{
        this.plans=res.data.data.recordset;
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
#home{
  position absolute
  top 0
  bottom 0
  right 0
  width calc(100% - 250px)
  overflow hidden
  &>#w{
    position absolute
    top 0
    left 0
    height 40%
    width 70%
    min-width 753px
    min-height 200px
    z-index 1
  }
  &>#q{
    position absolute
    top 0
    right 0
    height 40%
    width 30%
  }
  &>#p{
    position absolute 
    bottom 0
    left 0
    width 35%
    height 60%
    z-index 1
  }
  &>#r{
    position absolute 
    bottom 0
    left 35%
    height 60%
    width 35%
    z-index 1
  }
  &>#t{
    position absolute
    bottom 0
    right 0
    height 60%
    width 30%
    z-index 1
  }

}

</style>
