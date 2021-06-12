<template>
<div id="homeContent">
  <home-carousel></home-carousel>
</div>
</template>
<script>
import homeCarousel from "./homeCom/carousel"

export default {
  name: "homeContent",
  components: {
    homeCarousel,
  },
  data: () => ({

  })
}
</script>
<style lang="sass" scoped>
  #homeContent
    width: 100%
    height: 100%
</style>
