<template>
<div id="profileMain">
  <!-- swiper & vue-awesome-swiper 这两东西版本需要注意，版本不匹配就会产生一系列问题，例如pagination不显示等。 -->
  <swiper class="profileSwiper" :options="swiperOption" ref="mySwiper" :space-between="500" :key="1">
    <swiper-slide class="profileSlideOne">
      <profile-one></profile-one>
    </swiper-slide>
    <swiper-slide class="profileSlideTwo">
      <profile-two></profile-two>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <div class="swiper-grab-cursor" slot="grab-cursor">

    </div>
  </swiper>
  <!-- <div class="overLayLeft" :style="displayOff">
    <span class="closeOverLayLeft" @click="onOffSearchTag">&times;</span>
    <div class="overlayContent">
      <form action="" class="searchForm">
        <input class="overLaySearchBar" type="text" placeholder="Search..." />
        <button class="overLayBtn" type="button">Search</button>
      </form>
    </div>
  </div> -->
  <profile-setting></profile-setting>
  <!-- <profile-setting :profileSearchOnOff="displayOff.display" @stateChange="onOffSearchTag"></profile-setting> -->
  <profile-login></profile-login>
  <profile-sign-up></profile-sign-up>
</div>
</template>
<script>
// import StarRating from 'vue-star-rating'
import profileSetting from './Profile/components/ProfileSetting'
import profileLogin from './Profile/components/ProfileLogin'
import profileSignUp from './Profile/components/ProfileSignUp'
import profileTwo from './Profile/ProfileTwo'
import profileOne from "./Profile/ProfileOne"
// import customerImg01 from "@/assets/img/castle/castle_c_scale,w_762.jpg"
// import customerImg02 from "@/assets/img/dog/dog_c_scale,w_774.jpg"


export default {
  name: "ProfileMain",
  props: [],
  components: {
    // StarRating,
    profileOne,
    profileTwo,
    profileSetting,
    profileLogin,
    profileSignUp
  },
  data: () => ({
    // customerName: "毛泽东",
    // customerNameStatue: true,
    // customerImg: customerImg01,
    // onlineDay: 20,
    // saleMark: 80,
    // rateMark: 120,
    // customerLevel: '客户级别:',
    // starsize: 10,
    // isActivated: false,
    // showrate: true,
    // Team: "战狼特工队",
    // BuyerMark: 40,
    // searchIcon: "#icon-search",
    swiperOption: {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "progressbar",
        // progressbarOpposite: true,
        hideOnClick: true,
      },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      //   hideOnClick: true,
      // },
      cubeEffect: {
        // slideShadows: false,
        shadow: false
      },

      // autoplay: true,
      // initialSlide: 1,
      // // direction: "vertical",
      grabCursor: true,
      effect: "cube",
      // loop: true,
      // freeMode: true
      // setWrapperSize: true,
      // loop: true,
      // watchSlidesProgress: true,
      // watchSlidesVisibility: true,
      //  allowSlidePrev: true,
      // autoplay: true,
      // },
      displayOff: {
        display: "none"
      }
    }
  }),
  computed: {
    // profileText: function () {
    //   return `You are online in ${this.onlineDay} days!`
    // },
    swiper() {
      console.log(this.$refs.mySwiper.$swiper.$wrapperEl.css("width"))
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    // imgClick: function () {
    //   this.isActivated = !this.isActivated
    //   // if (this.isActivated) {
    //   //   this.customerImg = customerImg02
    //   // } else {
    //   //   this.customerImg = customerImg01
    //   // }
    //   this.customerImg = this.isActivated === true ? customerImg02 : customerImg01
    //   this.showrate = !this.isActivated === true ? true : false
    // },
    // hideClick: function () {
    //   this.$emit("profileHideClick")
    // }
    // onOffSearchTag: function () {
    //   this.displayOff.display = this.displayOff.display === "block" ? "none" : "block"
    // },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },

  }
}
</script>
<style lang="sass" scoped>
  @import "@/assets/styles/_mixins"
  @import "@/assets/styles/_variables"
  #profileMain
    position: relative
    overflow: hidden
    width: 100%
    height: 8rem
    @include mainBorder("border-bottom")
    .profileSwiper
      width: 100%
      height: 100%
      .profileSlideOne
        width: 100%
        height: 100%
        // .profileOne
        //   width: 100%
        //   padding: .8rem
        //   box-sizing: border-box
        //   height: 100%
        //   // position: relative
        //   display: flex
        //   flex-direction: row
        //   justify-content: center
        //   align-items: center
        //   .customerFrame
        //     width: 40%
        //     display: flex
        //     flex-direction: column
        //     align-items: center
        //     margin-right: 1rem
        //     .customerImg
        //       width: 100%
        //       cursor: pointer
        //       border-radius: 10%
        //       box-shadow: 0px 0px 5px black
        //       // border: 1px solid red
        //     .imgScale
        //        box-shadow: 0px 0px 10px red
        //     .customerName
        //       font-size: 0.6rem
        //       margin-top: .4rem
        //       margin-left: 0.6grem
        //       height: 0.8rem
        //       display: flex
        //       flex-flow: row nowrap
        //       justify-content: center
        //       align-items: center
        //       .searchBtn
        //         width: 1.2rem
        //         height: 1.2rem
        //         position: relative
        //         background: transparent
        //         border: none
        //         cursor: pointer
        //         .searchIcon
        //           width: 100%
        //           height: 100%
        //           fill: currentColor
        //           overflow: hidden
        //           position: absolute
        //           top: 0
        //           left: 0
        //           cursor: pointer
        //           &:active
        //             transform: scale(1.2)
        //   .profileInfo
        //     font-size: .7rem
        //     flex: 1
        //     display: flex
        //     flex-direction: column
        //     .customerRating
        //       display: flex
        //       flex-wrap: nowrap
        //       font-size: 0.6rem
        //       word-break: keep-all
        //       & span
        //         margin-right: 0.2rem
        //   .hideIcon
        //     position: absolute
        //     top: -0.5rem
        //     left: 50%
        //     color: red
        //     border: 1px soild red
        //     cursor: pointer
      .profileSlideTwo
        width: 100%
        height: 100%
    // .overLayLeft
    //   width: 100vw
    //   height: 100vh
    //   position: fixed
    //   left: 0
    //   top: 0
    //   background-color: $tagBackground
    //   padding: 4rem
    //   justify-content: center
    //   align-items: center
    //   z-index: 1
    //   .closeOverLayLeft
    //     position: absolute
    //     right: 1rem
    //     top: 2rem
    //     font-size: 6rem
    //     color: white
    //     cursor: pointer
    //     &:hover
    //       color: #ccc
    //   .overlayContent
    //     position: relative
    //     width: 100%
    //     height: 20%
    //     .searchForm
    //       width: 100%
    //       height: 100%
    //       display: flex
    //       justify-content: center
    //       align-items: flex-end
    //       .overLaySearchBar
    //         width: 50%
    //         height: 30%
    //         outline: none
    //         background: $search-bar-background-color
    //         border: none
    //         font-size: 1.2rem
    //         font-weight: 600
    //         &:hover
    //           background: #f1f1f1
    //       .overLayBtn
    //         width: 10%
    //         height: 30%
    //         outline: none
    //         border: none
    //         background-color: $main-button-background-color
    //         color: white
    //         cursor: pointer
</style>
