<template>
  <div id="app">
    <Nav />
    <router-view />
    <Loading />
  </div>
</template>
<script>
import Nav from "./components/nav/nav.vue";
import Loading from './widget/loading'
export default {
  components:{
    Nav,
    Loading
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  top 0
  bottom 0
  right 0
  left 0
  background-color #ececeb
}
</style>
