<template>
  <div id="project">
    <ProjectList />
    <ProjectDetail />
  </div>
</template>
<script>
import ProjectList from '../widget/project/projectList'
import ProjectDetail from '../widget/project/projectDetail'
export default {
  components:{
    ProjectList,
    ProjectDetail
  }
}
</script>
<style lang="stylus" scoped>
#project{
  position absolute
  top 0
  bottom 0
  right 0
  width calc(100% - 250px)
}
</style>
