<template>
<div id="brandname">
  <div class="brandlogo">
    <img class="logoImg" :src="logoImgUrl" alt="YUYULOGO" />
  </div>
  <div class="shopName">
    <span :data-spotlight="shopName">{{shopName}}</span>
  </div>
</div>
</template>
<script>
import logoImgUrl from "img/robot/robot_c_scale,w_1244.png"
export default {
  name: "BrandName",
  data: () => ({
    logoImgUrl: logoImgUrl,
    shopName: "文宇童装"
  })
}
</script>
<style lang="sass" scoped>
  @import "~styles/_mixins"
  #brandname
    width: 100%
    height: 6rem
    display: flex
    flex-flow: row nowrap
    justify-content: flex-start
    align-items: center
    @include mainBorder("border-bottom")
    .brandlogo
      width: 30%
      padding-right: 30%
      padding-bottom: 30%
      position: relative
      margin: 1rem
      overflow: hidden
      .logoImg
        width: 95%
        height: 95%
        position: absolute
        left: 2.5%
        top: 2.5%
        border-radius: 50%
        object-fit: cover
        z-index: 1
      &::after
        content: ""
        width: 100%
        height: 100%
        border-radius: 50%
        background-image: linear-gradient(60deg, aquamarine, cornflowerblue, goldenrod, hotpink, salmon, lightgreen, sandybrown, violet)
        @include borderspin()
        animation: bordersp 5s linear infinite
        position: absolute
    .shopName
      flex: 1
      span
        font-size: 1.8rem
        font-weight: 600
        font-family: cursive
        opacity: 0.7
        // position: relative
        // @include spotlight($backContent:data-spotlight,$backImg:"https://images.unsplash.com/photo-1619382803627-a1d7b7218224?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60")
</style>
