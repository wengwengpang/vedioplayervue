<template>
<div class="mainContainer">
  <!-- <swiper class="swiper" :options="swiperOption" ref="swiper">
    <swiper-slide class="menu">
      <left-container></left-container>
    </swiper-slide>
    <swiper-slide class="content">
      <div class="menu-button" :class={"opened: menuOpened"} @click="toggleMenu($event)">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <right-container></right-container>
    </swiper-slide>
  </swiper> -->
  <left-container :class="{leftContainer:onOffLeftContainer}"></left-container>
  <right-container class="rightContainer">
    <div class="menuOpened">
      <button class="openbtn" @click="showLeftContainer">&#9776;</button>
      <!-- <div class="location">
        广东
      </div> -->
    </div>
  </right-container>
</div>
</template>
<script>
import LeftContainer from "./components/leftContainer/LeftContainer"
import RightContainer from "./components/rightContainer/rightContainer"
// import axios from "axios"
// import {
//   Swiper,
//   SwiperSlide
// } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'

export default {
  name: "Home",
  components: {
    LeftContainer,
    RightContainer
    // Swiper,
    // SwiperSlide
  },
  data: () => ({
    onOffLeftContainer: false

    // return {
    //   menuOpened: false,
    //   swiperOption: {
    //     initialSlide: 1,
    //     resistanceRatio: 0,
    //     slidesPerView: "auto",
    //     on: {
    //       slideChange: () => {
    //         this.memuOpened = this.swiper.activeIndex === = 0
    //       }
    //     }
    //   }
    // }
  }),
  methods: {
    showLeftContainer: function () {
      this.onOffLeftContainer = !this.onOffLeftContainer
    }
    // getHomeInfo: function () {
    //   axios.get('/api/index.json')
    //     .then(this.getHomeInfoSucc)
    // },
    // getHomeInfoSucc: function (res) {
    //   console.log(res)
    // }
  }
  // mounted() {
  // this.getHomeInfo()
  // }
  // computed: {
  //   swiper() {
  //     return this.$refs.swiper.$swiper
  //   }
  // },
  // methods: {
  //   toggleMenu(event) {
  //     this.menuOpened ? this.swiper.slideNext() : this.swiper.slidePrev()
  //   }
  // }
}
</script>
<style lang="sass" scoped>
  @import "~styles/_variables"
  @import "~styles/_base.sass"
  @import "~styles/_mixins"
  .mainContainer
    color: $primary-font-color
    width: 100%
    max-width: 1500px
    height: 100%
    // position: relative
    background-color: white
    border-radius: 1rem
    display: flex
    flex-flow: row nowrap
    overflow: hidden

    @media screen and (max-width: 900px)
      border-radius: 0
      opacity: 0.8
    .leftContainer
      display: none
      flex-basis: 0
    .rightContainer
      position: relative
      .menuOpened
        position: absolute
        z-index: 2
        top: 0
        left: -4.8rem
        background-color: $main-back-ground-color
        width: 6rem
        height: 6rem
        border-radius: 50%
        overflow: hidden
        display: flex
        justify-content: flex-end
        align-items: center
        opacity: 0.7
        .openbtn
          border: none
          font-size: 2rem
          background-color: $main-back-ground-color
          cursor: pointer
        &:hover
          opacity: 1
          left: -3rem
          animation: mainMenuIcon 0.3s ease-in
          @include mainMenuIcon()

    // .swiper
    //   .menu
    //     min-width: 100px
    //     width: 70%
    //     max-width: 120rem
    //     background-color: #2C8DFB!important
    //     color: #f1f1f1
    //   .content
    //     width: 100%
    //     .menu-button
    //       position: absolute
    //       top: 0px
    //       left: 0px
    //       padding: 15px
    //       cursor: pointer
    //       transition: .3s
    //       background-color: #2C8DFB
    //       .bar
    //         position: relative
    //         display: block
    //         width: 50px
    //         height: 5px
    //         margin: 10px auto
    //         background-color: #fff
    //         border-radius: 10px
    //         transition: .3s
    //         &:nth-of-type(1)
    //           margin-top: 0px
    //         &:nth-of-type(3)
    //           margin-bottom: 0px
    //       &:hover
    //         .bar:nth-of-type(1)
    //           transform: translateY(1.5px) rotate(-4.5deg)
    //         .bar:nth-of-type(2)
    //           opacity: .9
    //         .bar:nth-of-type(3)
    //           transform: translateY(-1.5px) rotate(4.5deg)
    //       &.opened
    //         .bar:nth-of-type(1)
    //           transform: translateY(15px) rotate(-45deg)
    //         .bar:nth-of-type(2)
    //           opacity: 0
    //         .bar:nth-of-type(3)
    //           transform: translateY(-15px) rotate(45deg)
    //         &:hover
    //           .bar:nth-of-type(1)
    //             transform: translateY(13.5px) rotate(-40.5deg)
    //           .bar:nth-of-type(2)
    //             opacity: .1
    //           .bar:nth-of-type(3)
    //             transform: translateY(-13.5px) rotate(40.5deg)
</style>
