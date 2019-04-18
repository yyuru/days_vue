<template>
  <div id="things">
    <div class="things-span" 
         v-for="(item,index) in things" 
         :key="index"
         :class="{white:index%2==0}"     
    >
      <div v-for="(i,ii) in item" :key="ii" class="content" :class="{plan:i.type==1,done:i.type==2}">
        {{i.Title}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    plans:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
      
    }
  },
  //根据动态数据获取动态数据
  computed: {
    
    things:(vm)=>{
      let temp=[[],[],[],[],[],[],[],[],[],[]];
      vm.plans.forEach(item=>{
          let index=new Date(item.StartTime).getHours();
          if(index>=8&&index<=17)
          {
            temp[index-8].push(item)
          }
      })
      return temp 
    }
  },
  mounted() {
  //  this.planList.forEach(item=>{
  //    let index=new Date(item.StartTime).getHours();
  //    if(index>=8&&index<=17)
  //    {
  //     this.things[index-8].push(item)
  //    }
  //  }) 
  }
}
</script>
<style lang="stylus" scoped>
#things{
  position absolute
  top 80px
  right 0
  width calc(100% - 200px)
  height calc(100vh - 80px)
  &>.white{
    background-color white!important
  }
  &>.things-span{
    height 10%
    width 100%
    text-align left
    min-height 60px
    display table
    padding 0 20px
    //border-bottom 1px solid white
    &>.content{
      //width 10px!important
      height 50px
      line-height 50px
      float left
      width auto
      min-width 200px
      line-height 50px
      margin-top calc(5vh - 29px) 
      margin-right 10px
      padding 0 10px
      cursor pointer
      transition all 0.5s
      font-size 20px
      &:hover{
        box-shadow: 0 10px 30px -15px #2e383f;
      }
      //display table-cell
      //vertical-align middle
    }
    &>.plan{
      background-color #f9a828 
      color white
    }
    &>.done{
      color white
      background-color #07617d 
    }
  }
}
</style>
