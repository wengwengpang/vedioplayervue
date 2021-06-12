<template>
<div id="searchArea">
  <!-- <button type="button" class="searchBtn" id="searchBtn" @click="onOffSearchTag">
    这里有个问题放大镜小手不能用-->
  <!-- <svg class="searchIcon" aria-hidden="true">
      <use :xlink:href="searchIcon"></use>
    </svg>
  </button> -->
  <div class="overLayLeft" :style="displayOff1">
    <span class="closeOverLayLeft" @click="onOffSearchTag">&times;</span>
    <div class="overlayContent">
      <form action="" class="searchForm">
        <input class="overLaySearchBar" type="text" placeholder="Search..." />
        <button class="overLayBtn mainBtn" type="button">Search</button>
      </form>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "profileSetting",
  props: [],
  data: () => ({
    searchIcon: "#icon-search",
    displayOff1: {
      display: "none"
    }
  }),
  // watch: {
  //   profileSearchOnOff: function () {
  //     this.displayOff1.display = this.profileSearchOnOff
  //     console.log(this.profileSearchOnOff)
  //   }
  // },
  methods: {
    onOffSearchTag: function () {
      this.displayOff1.display = "none"
      // this.$emit("stateChange")
    }
  },
  mounted: function () {
    var this_ = this
    this.bus.$on('stateOneChange', function (msg) {
      this_.displayOff1.display = msg
    })
  }
}
</script>
<style lang="sass" scoped>
  @import "~styles/_variables"
  @import "~styles/_mixins"
  #searchArea
    position: relative
    // .searchBtn
    //   width: 1.2rem
    //   height: 1.2rem
    //   position: relative
    //   background: transparent
    //   border: none
    //   cursor: pointer
    //   .searchIcon
    //     width: 100%
    //     height: 100%
    //     fill: currentColor
    //     overflow: hidden
    //     position: absolute
    //     top: 0
    //     left: 0
    //     cursor: pointer
    //     &:active
    //       transform: scale(1.2)
    .overLayLeft
      // display: none
      width: 100vw
      height: 100vh
      position: fixed
      left: 0
      top: 0
      background-color: $tagBackground
      padding: 4rem
      justify-content: center
      align-items: center
      z-index: 2
      .closeOverLayLeft
        position: absolute
        right: 1rem
        top: 2rem
        font-size: 6rem
        color: white
        cursor: pointer
        &:hover
          color: #ccc
      .overlayContent
        position: relative
        width: 100%
        height: 20%
        .searchForm
          width: 100%
          height: 100%
          display: flex
          justify-content: center
          align-items: flex-end
          .overLaySearchBar
            width: 50%
            height: 30%
            outline: none
            background: $search-bar-background-color
            border: none
            font-size: 1.2rem
            font-weight: 600
            &:hover
              background: #f1f1f1
            &:focus
              background: darken(#f1f1f1, 5%)
          @include mainBtn()
          .overLayBtn
            width: 10%
            height: 30%
            font-size: 1.2rem
            border-radius: 0

</style>
