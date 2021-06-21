<template>
<div id="rightContainer">
  <slot class="menuOpened">
  </slot>
  <!-- <home-content v-if="state"></home-content>
  <women-content></women-content> -->
  <keep-alive>
    <component :is='this.navName'></component>
  </keep-alive>

</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import homeContent from "@/pages/home/components/rightContainer/components/homeContent"
import womenContent from "@/pages/home/components/rightContainer/components/womenContent"
import menContent from "@/pages/home/components/rightContainer/components/menContent"
import childContent from "@/pages/home/components/rightContainer/components/childContent"
export default {
  name: "RightContainer",
  components: {
    homeContent,
    menContent,
    womenContent,
    childContent,
  },
  data: () => ({

  }),
  computed: {
    ...mapState(['navName'])
  },
  methods: {

  }
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
