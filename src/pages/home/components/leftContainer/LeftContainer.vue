<template>
<div id="leftcontainer">
  <brand-name></brand-name>
  <profile-main></profile-main>
  <nav-bar id="navBar"></nav-bar>
</div>
</template>
<script>
import BrandName from "./components/BrandName"
import ProfileMain from "./components/ProfileMain"
import navBar from "./components/navBar"

export default {
  name: "LeftContainer",
  components: {
    BrandName,
    ProfileMain,
    navBar
  },
  data: () => ({

  })
}
</script>
<style lang="sass" scoped>
  @import "~styles/_mixins"
  #leftcontainer
    width: 17rem
    height: 100%
    overflow: hidden
    display: flex
    flex-direction: column
    @include mainBorder("border-right")
    // #profile
    //   display: none
</style>
