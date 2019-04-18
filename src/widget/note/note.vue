<template>
  <div id="note">
    <div class="sub-title">Note</div>
    <textarea id="editor" v-model="note"></textarea>
    <button v-on:click="CreateNote" :class="{disabled:note==''}">Submit</button>
    <div id="note-list">
      <transition-group tag="div" name="items"
        enter-active-class="animated flipInX" 
        leave-active-class="animated flipOutX">
        <div class="note-item" v-for="(item) in dailyNote" :key="item.uid">
          <div class="create-time">
            {{item._ctime | TimeRender}}
          </div>
          <div class="note-content">
            {{item.content}}
          </div>
          <div class="delete" v-on:click="DeleteNote(item.uid)">
            <fontawesome :icon='["fas","times"]' />
          </div>
          
        </div>
      </transition-group>
      
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import {getNotes,createNote,deleteNote} from '../../api/index.js'
export default {
  data() {
    return {
      note:''
    }
  },
  computed: {
    ...mapGetters(['dailyNote','currentDate','loading'])
  },
  methods: {
    ...mapActions(['setDailyNote','setLoading','setNotice']),
    async CreateNote(){
      if(this.loading!=0){
        return
      }
      if(this.note=='')
      {
        return
      }
      this.setLoading(1);
      await createNote(this.note,this.currentDate).then((res)=>{
        this.setLoading(2)
        if(res.data.code==200)
        {
           setTimeout(()=>{
              this.setLoading(3)
              this.setNotice("You get the new Note successfully!")
              getNotes(this.currentDate).then(res=>{
                this.setDailyNote(res.data.data.recordset)
              });
            },2000)
            setTimeout(()=>{
              this.setLoading(0)
            },6000)
        }
        else
        {
          setTimeout(()=>{
            this.setLoading(3)
            this.setNotice("You get the new Note failure!")
          },2000)
          setTimeout(()=>{
            this.setLoading(0)
          },6000)
        }
      })
    },
    async DeleteNote(uid){
      await deleteNote(uid).then(res=>{
        if(res.data.code==200)
        {
           getNotes(this.currentDate).then(res=>{
              this.setDailyNote(res.data.data.recordset)
            });
        }
      })
    }
  },
  mounted() {
    getNotes(this.currentDate).then(res=>{
      this.setDailyNote(res.data.data.recordset)
    });
  },
  filters:{
    TimeRender(value){
      const hour=new Date(value.split('.')[0]).getHours();
      const minute=new Date(value.split('.')[0]).getMinutes();
      return (hour>9?hour:'0'+hour.toString())+':'+(minute>9?minute:'0'+minute.toString())
    }
  },
  watch: {
   currentDate:function(newV){
      getNotes(newV).then(res=>{
        this.setDailyNote(res.data.data.recordset)
      });
   }
  }
}
</script>
<style lang="stylus" scoped>
#note{
  position relative
  width 350px
  height 480px
  margin calc(30vh - 240px) calc(50% - 175px)
  box-shadow: 0 10px 20px -15px #2e383f;
  padding 10px
  background-color #ffffff
  &>textarea{
    width 100%
    height 100px!important
    border none
    outline none
    border-left 20px solid #f9a828
    background-color #f5f5f5
    border-radius 5px
    padding 10px
    font-size 20px
    font-family miso
    letter-spacing 1px
  }
  &>button{
    position absolute
    right 10px
    top 150px
    width 100px
    height 35px
    border none 
    outline none
    font-family mutations
    letter-spacing 0px
    font-weight 500
    font-size 18px
    border-radius 5px
    background-color #f9a828
    color white
    cursor pointer
    box-shadow: 0 10px 20px -15px #2e383f;
  }
  &>.disabled{
    background-color #cccccc
  }
  &>#note-list{
    width 330px
    height 280px
    position absolute
    bottom 10px
    font-family miso
    overflow hidden
    &>.item-move{
      transition transform 1s
    }
    &>div{
      width 330px
      height 280px
      position absolute
      bottom 10px
      font-family miso
      overflow-y auto
    }
    &>div>.note-item{
      position relative
      width 320px
      height auto
      
      &:hover{
        &>.delete{
          opacity 1
        }
        
      }
      &>.create-time{
        width 325px
        height 20px
        color #cccccc
        letter-spacing 1px
      }
      &>.note-content{
        position relative
        //height 40px
        background-color #f9a828
        padding 5px
        color white
        border-radius 5px
      }
      &>.delete{
        position absolute
        top 0
        color #ccc
        right 0px  
        cursor pointer
        opacity  0
        transition all 0.5s
      }
    }
  }
}
</style>
