<template>
<div id="navBar">
  <ul id="iconList">
    <li v-for="(item, navName) of iconOrigin" :key="item" class="navlist" @click="menuClick(item)" :id="item">
      <svg class="icon editIcon" aria-hidden="true">
        <use :xlink:href="item"></use>
      </svg>
      <span class="navText">{{navName}}</span>
      <!-- 这里是个难点 -->
      <!-- <span class="activeIcon" v-if="menuSelected === item">a</span> -->
      <water-drop class="activeIcon" v-if="menuSelected === item"></water-drop>
    </li>
  </ul>
</div>
</template>
<script>
import waterDrop from "./NavBar/waterDrop"
export default {
  name: "navBar",
  components: {
    waterDrop
  },
  data: () => ({
    iconOrigin: {
      "Home": "#icon-home",
      "Women": "#icon-nvzhuang",
      "Men": "#icon-nanren",
      "Child": "#icon-ertongjie",
      "Men Shoes": "#icon-xie",
      "Women Shoes": "#icon-xie1",
      "Bags": "#icon-baobao",
      "Hat": "#icon-maozi",
      "Hand Chain": "#icon-icon-test",
      "Baby Beds": "#icon-yingerchuang",
      "Baby Cart": "#icon-yingerche"
    },
    menuSelected: "#icon-home"
  }),
  computed: {
    icons: function () {
      console.log(typeof this.iconOrigin.women)
      console.log(Object.values(this.iconOrigin)[0])
      return Object.values(this.iconOrigin)[0].toString()
    },
    // selected: function (e) {
    //   if (e.currentTarget.lastElementChild.id == e.currentTarget.item) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },
  methods: {
    menuClick: function (item) {
      //这里是个难点
      return this.menuSelected = item

      // console.log(this.iconOrigin)
    },
  }
}
</script>
<style lang="sass" scoped>
  @import "~styles/_mixins"
  @import "~styles/_variables"
  #navBar
    overflow: auto
    #iconList
      height: 100%
      display: flex
      flex-flow: column
      margin: 0
      padding: 0
      list-style: none
      .navlist
        display: flex
        flex-flow: row nowrap
        justify-content: flex-start
        margin: 0.4rem 0
        .icon
          width: 2rem
          height: 2rem
          vertical-align: -0.5rem
          fill: currentColor
          overflow: hidden
          margin-right: 0.8rem
          margin-left: 0.6rem
        .navText
          color: $primary-font-color
          align-self: center
          line-height: inherit
          font-size: 1.2rem
          cursor: pointer
          flex: auto
        .activeIcon
          border: none
          overflow: hidden
          width: 1rem
          height: 100%
          margin-right: 1rem
          align-self: flex-end
        &:hover
          box-shadow: 0px 0px 4px darken(rgb(163,101,213), 20%)
          opacity: 0.8
          .icon
           transform: scale(1.2)
          .navText
            color: darken($secondary-font-color,20%)
</style>
