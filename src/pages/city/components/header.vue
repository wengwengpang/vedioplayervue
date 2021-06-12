<template>
<div id="cityHeader">
  <router-link class="backIcon" to="/">
    <svg class="iconImg" aria-hidden>
      <use :xlink:href="backHomeIcon"></use>
    </svg>
  </router-link>
  <div class="citys">
    <h2 class="nationalCity" @click="choosenNationCity" :class="{selectCity:active}">
      国内城市
    </h2>
    <h2 class="internationalCity" @click="choosenNationCity" :class="{selectCity:!active}">
      国际城市
    </h2>
  </div>
</div>
</template>
<script>
export default {
  name: "CityHeader",
  data: () => ({
    backHomeIcon: "#icon-home",
    active: true
  }),
  methods: {
    choosenNationCity: function () {
      this.active = this.active === false ? true : false
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~@/assets/styles/_variables"
  @import "~@/assets/styles/_mixins"
  #cityHeader
    width: 100%
    height: 10%
    align-items: center
    font-size: $tagFontSize
    color: white
    display: flex
    justify-content: center
    font-weight: 500
    background-color: #0D0D0D
    position: relative
    .citys
      display: flex
      height: 100%
      padding: 0.5rem
      align-items: center

      .nationalCity
        text-align: center
        margin-right: 1rem
        cursor: pointer
      .internationalCity
        cursor: pointer
      .selectCity
        background-color: #F2E205
        border-radius: 5px 5px
        color: black
    .backIcon
      position: absolute
      background-color: #F2E205
      border-radius: 50%
      left: 0
      height: 2rem
      width: 2rem
      padding: 0.2rem
      margin-left: 2rem
      &:active
        transform: scale(1.2)
      .iconImg
        width: 100%
        height: 100%
        cursor: pointer
</style>
