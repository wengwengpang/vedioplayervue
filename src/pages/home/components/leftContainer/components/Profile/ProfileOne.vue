<template>
<div class="profileOne">
  <div class="customerFrame">
    <img :src="customerImg" class="customerImg" :class="{imgScale: isActivated}" @click="imgClick" alt="customer Image" />
    <div class="customerName">
      <h3 v-if="nameOn" class="nameText" @click="changeCusName">{{customerName}}</h3>
      <input class="enterName" v-else v-model="nameChanged" @keydown.enter="changeName" type="text" />
      <!-- <profile-setting class=""></profile-setting> -->

      <!-- SearchBtn -->
      <button type="button" class="searchBtn" id="searchBtn" @click="onOffSearchTag">
        <!-- 这里有个问题放大镜小手不能用 -->
        <svg class="searchIcon" aria-hidden="true">
          <use :xlink:href="searchIcon"></use>
        </svg>
      </button>
    </div>
    <router-link to="/City">
      <div class="location">
        <!-- <svg class="locationIcon" aria-hidden="true">
        <use :xlink:href="locationIcon"></use>
      </svg> -->
        ({{city}})
      </div>
    </router-link>

    <!-- <input type="text" v-model="customerName" /> -->

  </div>
  <div class="profileInfo">
    <h3 class="text">{{profileText}}</h3>
    <div v-if="showrate" class="mark">
      <span>Sales:</span> {{saleMark}}
    </div>
    <div v-else>
      <span>Buyer:</span> {{BuyerMark}}
    </div>
    <!-- v-if用法 -->
    <div v-if="showrate" class="rate">
      <span>Rate:</span> {{rateMark}}
    </div>
    <div v-else>
      <span>Team:</span> {{Team}}
    </div>
    <div class="customerRating">
      <span>{{customerLevel}}</span>
      <!-- 这里使用github上的vue-star-rating插件，先npm安装再看说明使用 -->
      <star-rating class="starrating" v-bind:star-size="9"></star-rating>
    </div>
  </div>
  <!-- <div class="hideIcon" @click="hideClick">
        <span class="iconfont">&#xe614;</span>
      </div> -->
</div>
</template>
<script>
import StarRating from 'vue-star-rating'
import customerImg01 from "img/castle/castle_c_scale,w_762.jpg"
import customerImg02 from "img/dog/dog_c_scale,w_774.jpg"
// import ProfileSetting from "./components/ProfileSetting"

export default {
  name: "profileOne",
  props: [],
  components: {
    StarRating
  },
  data: () => ({
    customerName: "毛泽东",
    city: "广州",
    nameChanged: "",
    nameOn: true,
    customerNameStatue: true,
    customerImg: customerImg01,
    onlineDay: 20,
    saleMark: 80,
    rateMark: 120,
    customerLevel: '客户级别:',
    starsize: 10,
    isActivated: false,
    showrate: true,
    Team: "战狼特工队",
    BuyerMark: 40,
    searchIcon: "#icon-search",
    // locationIcon: "#icon-ditu",
    displayOff: {
      display: "block"
    }
  }),
  computed: {
    profileText: function () {
      return `You are online in ${this.onlineDay} days!`
    }
  },
  methods: {
    imgClick: function () {
      this.isActivated = !this.isActivated
      // if (this.isActivated) {
      //   this.customerImg = customerImg02
      // } else {
      //   this.customerImg = customerImg01
      // }
      this.customerImg = this.isActivated === true ? customerImg02 : customerImg01
      this.showrate = !this.isActivated === true ? true : false
    },
    // hideClick: function () {
    //   this.$emit("profileHideClick")
    // }
    onOffSearchTag: function () {
      // this.displayOff.display = this.displayOff.display === "block" ? "none" : "block"
      console.log(this.displayOff.display)
      this.bus.$emit("stateOneChange", this.displayOff.display)
      this.displayOff.display = "block"
    },
    // onSwiper(swiper) {
    //   console.log(swiper);
    // },
    // onSlideChange() {
    //   console.log('slide change');
    // }
    changeCusName: function () {
      this.nameOn = false
      // let customerName = this.customerNam
    },
    changeName: function () {
      this.customerName = this.nameChanged == "" ? "unknow" : this.nameChanged
      this.nameOn = true
      return this.customerName
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "@/assets/styles/_mixins"
  @import "@/assets/styles/_variables"
  .profileOne
    width: 100%
    padding: .8rem
    // box-sizing: border-box
    height: 100%
    // position: relative
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    .customerFrame
      width: 40%
      display: flex
      flex-direction: column
      align-items: center
      overflow: hidden
      padding: .4rem
      margin-right: .8rem
      padding-bottom: 0rem
      .customerImg
        width: 100%
        cursor: pointer
        border-radius: 10%
        box-shadow: 0px 0px 5px black
        // border: 1px solid red
      .imgScale
         box-shadow: 0px 0px 10px red
      .location
        height: 0.6rem
        font-size: 0.6rem
        margin-top: 0.1rem
        display: flex
        justify-content: center
        align-items: center
        color: $primary-font-color
        cursor: pointer
      .customerName
        width: 4rem
        height: 0.6rem
        font-size: 0.6rem
        margin-top: .4rem
        margin-left: 0.6rem
        height: 0.8rem
        display: flex
        flex-flow: row nowrap
        justify-content: center
        align-items: center
        .nameText
          word-break: keep-all
          max-width: 4rem
          @include threeDots
        .enterName
          width: 3rem
          text-align: center
        .searchBtn
          width: 1.2rem
          height: 1.2rem
          position: relative
          background: transparent
          border: none
          cursor: pointer
          .searchIcon
            width: 100%
            height: 100%
            fill: currentColor
            overflow: hidden
            position: absolute
            top: 0
            left: 0
            cursor: pointer
            &:active
              transform: scale(1.2)
    .profileInfo
      width: 60%
      overflow: hidden
      font-size: .7rem
      flex: 1
      display: flex
      flex-direction: column
      .text
        width: 100%
        // @include threeDots()
      .customerRating
        display: flex
        flex-wrap: nowrap
        font-size: 0.6rem
        word-break: keep-all
        & span
          margin-right: 0.2rem
    .hideIcon
      position: absolute
      top: -0.5rem
      left: 50%
      color: red
      border: 1px soild red
      cursor: pointer
</style>
