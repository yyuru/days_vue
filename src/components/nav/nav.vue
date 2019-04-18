<template>
  <nav id="nav"> 
    <header>
      <div id="logo">
        <img src="../../assets/images/logo.jpg" alt="Logo" srcset="">
      </div>
    </header>
    <div id="catalog">
      <div class="item" v-for="(item,index) in catalog" :key="index" :class="{active:active==index}" @click="active=index">
          <router-link :to="item.router">
            <div class="icon">
              <fontawesome name="expand" :icon="[item.type,item.icon]" size="1x"></fontawesome>
            </div>
            <div class="name">
              {{item.name}}
            </div>
          </router-link>
          
        </div>
      
    </div>
    <footer>
      Days
    </footer>
  </nav>
</template>
<script>
export default {
  data(){
    return {
      catalog:[
        {
          name:'HomePage',
          icon:'calendar-alt',
          type:'far',
          router:'/home'
        },
        {
          name:'Today',
          icon:'list-alt',
          type:'far',
          router:'/today'
        },
        {
          name:'Task',
          icon:'calendar-plus',
          type:'far',
          router:'/home'
        },
        {
          name:'Playground',
          icon:'calendar-check',
          type:'far',
          router:'/home'
        },
        {
          name:'Project',
          icon:'book',
          type:'fas',
          router:'/project/task'
        },
        {
          name:'Weekly',
          icon:'book-open',
          type:'fas',
          router:'/weekly'
        }
      ],
      active:0
    }
  }
}
</script>
<style lang="stylus" scoped>
#nav{
  background url('../../assets/images/2.jpg')
  background-size 200% 100%
  background-repeat none
  background-position -200px 80px
  position absolute
  min-width 250px
  top 0
  bottom 0
  left 0
  box-shadow 0 0 5px 0px #2e383f
  &>header{
    background-color rgba(255,255,255,0.8)
    position relative
    height 160px
    width 100%
    line-height 64px
    padding 48px 0
    &>div{
      position absolute
      height 100%
    }
    &>#logo{
      left 0px
      width 100%
      text-align center 
      &>img{
        width 64px
        height 64px
        margin 0 auto
      }
    }
    &>#name{
      right 0
      width 60%
      font-size 30px
      font-family danielbk
      color #f9a828 
      padding-left 18px
      padding-top 4px
    }
  }
  &>#catalog{
    position relative
    height calc(100% - 210px)
    background-color rgba(255,255,255,0.8)
    &>.active{
        color #f9a828   
        border-left 5px solid #f9a828 
        &>a>.icon{
          color #f9a828 !important 
        }
        &>a>.name{
          color #f9a828 !important 
        }
    }
    &>.item{
      padding 0px 30px
      position relative
      height 40px
      margin-bottom 10px
      line-height 40px
      color:#2e383f 
      cursor pointer
      &:hover{
        color #f9a828 
        border-left 5px solid #f9a828 
      }
      &>a>.icon{
        color:#2e383f 
        position absolute
        left 15%
        top 0
        bottom 0
        width 40px
        text-align center
      }
      &>a>.name{
        color:#2e383f 
        position absolute
        right 10px
        top 0
        bottom 0
        width 150px
        padding-left 15px
        font-family logo
        letter-spacing 2px
      }
    }
  }
  &>footer{
    background-color rgba(255,255,255,0.8)
    height 50px
    width 100%
    line-height 50px
    text-align center
    font-family danielbk
    color #f9a828 
    font-size 30px
    letter-spacing 2px
  }
}
</style>
