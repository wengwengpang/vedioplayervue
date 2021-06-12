<template>
<div id="cityList" ref="wrapper">
  <div>
    <div class="area">
      <div class="title">
        当前城市
      </div>
      <div class="cityName">
        <div class="cityWrapper">
          <div class="city">
            北京
          </div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title">
        热门城市
      </div>
      <div class="cityName">
        <div class="cityWrapper" v-for="item in hotCities" :key="item.id">
          <div class="city">
            {{item.name}}
          </div>
        </div>
      </div>

    </div>
    <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
      <div class="title">
        {{key}}
      </div>
      <div class="citydetail">
        <div class="citys" v-for="innerItem of item" :key="innerItem.id">
          {{innerItem.name}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Bscroll from '@better-scroll/core'
export default {
  name: "CityList",
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  data: () => ({

  }),
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
        // console.log(element)
      }
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        scrollbars: true
      })
    })
  }
}
</script>
<style lang="sass" scoped>
  @import "~@/assets/styles/_variables"
  @import "~@/assets/styles/_mixins"
  #cityList
    width: 100%
    height: 100%
    .area
      width: 100%
      .title
        padding-left: 0.8rem
        top: 0
        position: sticky
        width: 100%
        background-color: #0D0D0D
        opacity: 0.9
        color: white
        line-height: $tagFontSize * 2
      .cityName
        display: flex
        flex-flow: row wrap
        justify-content: flex-start
        .cityWrapper
          margin: 0.4rem 0.3rem
          .city
            width: 7rem
            padding: 0.3rem
            text-align: center
            color: inherit
            border: 1px solid white, 1px solid black
            font-weight: bold
            border-radius: 0.6rem
            box-shadow: 0px 0px 3px #0D0D0D
          &:hover
            box-shadow: 0px 0px 3px darken(#0D0D0D,30%),inset 0px 0px 3px darken(#0D0D0D,30%)
            border-radius: 0.6rem
      .citydetail
        .citys
          margin: 0.8rem
          line-height: $tagFontSize * 1.7
          font-weight: bold
          border-bottom: 0.05rem solid lighten(#0D0D0D, 60%)
          &:hover
           background: linear-gradient(55deg, darken(#fffc01,10%) 0% 30%, rgba(255,252,1,0) 70% 100%)
           font-size: $tagFontSize * 1.2
           color: darken(#0D0D0D, 30%)
</style>
