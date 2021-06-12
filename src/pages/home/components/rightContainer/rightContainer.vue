<template>
<div id="rightContainer">
  <slot class="menuOpened">
  </slot>
  <home-content></home-content>
</div>
</template>
<script>
import homeContent from "@/pages/home/components/rightContainer/components/homeContent"
export default {
  name: "RightContainer",
  components: {
    homeContent
  },
  data: () => ({

  })
}
</script>
<style lang="sass" scoped>
  @import "@/assets/styles/_mixins"
  @import "@/assets/styles/_variables"
  #rightContainer
    width: 100%
    height: 100%
    overflow: hidden
    background-color: $tagBackground
    padding: 1rem
    display: flex
    flex-wrap: coloum nowrap
    justify-content: center
    align-items: center
    // position: relative
    // .menuOpened
    //   display: absolute
    //   top: 0
    //   left: 0
</style>
