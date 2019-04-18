import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//log
import createLogger from 'vuex/dist/logger'
//const debug = process.env.NODE_ENV!=='production';

//mutation-type
const type={
  SET_CURRENTDATE:'SET_CURRENTDATE',
  SET_CURRENTWEEK:'SET_CURRENTWEEK',
  SET_QUOTEFORM:'SET_QUOTEFORM',
  SET_LOADING:'SET_LOADING',
  SET_NOTICE:'SET_NOTICE',
  SET_DAILYNOTE:'SET_DAILYNOTE',
  SET_PLANFORM:'SET_PLANFROM'
};
export default new Vuex.Store({
  state: {
    currentDate:new Date(),
    currentWeek:(()=>{
      let week = ["", "", "", "", "", "", ""];
      let today_index = new Date().getDay() - 1;
      let newWeek = week.map((item, index) => {
        let diff=(index - today_index)*24*60*60*1000;
        let temp=new Date().getTime()+diff;
        return new Date(temp);
      });
      return newWeek;
    })(),
    quoteForm:false,
    loading:0,
    notice:'1',
    dailyNote:[],
    planForm:false
  },
  getters:{
    currentDate:(state)=>{ return state.currentDate },
    currentWeek:(state)=>{ return state.currentWeek },
    quoteForm:state=>state.quoteForm,
    loading:state=>state.loading,
    notice:state=>state.notice,
    dailyNote:state=>state.dailyNote,
    planForm:state=>state.planForm
  },
  mutations: {
    [type.SET_CURRENTDATE](state,date){
      state.currentDate=date;
    },
    [type.SET_CURRENTWEEK](state,week){
      state.currentWeek=week;
    },
    [type.SET_QUOTEFORM](state,form){
      state.quoteForm=form;
    },
    [type.SET_LOADING](state,loading){
      state.loading=loading;
    },
    [type.SET_NOTICE](state,notice){
      state.notice=notice;
    },
    [type.SET_DAILYNOTE](state,note){
      state.dailyNote=note
    },
    [type.SET_PLANFORM](state,form){
      state.planForm=form
    }
  },
  actions: {
    setCurrentDate({commit},date){
      commit(type.SET_CURRENTDATE,date)
    },
    setCurrentWeek({commit},week){
      commit(type.SET_CURRENTWEEK,week)
    },
    setQuoteForm({commit},form){
      commit(type.SET_QUOTEFORM,form)
    },
    setLoading({commit},loading){
      commit(type.SET_LOADING,loading)
    },
    setNotice({commit},notice){
      commit(type.SET_NOTICE,notice)
    },
    setDailyNote({commit},note){
      commit(type.SET_DAILYNOTE,note)
    },
    setPlanForm({commit},form){
      commit(type.SET_PLANFORM,form)
    }
  },
  strict:true,
  plugins:[createLogger()]
})
