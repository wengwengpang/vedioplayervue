<template>
<div id="cityContainer">
  <city-header></city-header>
  <div class="mainContent">
    <div class="cityContent">
      <city-content :cities="cities" :hotCities="hotCities" class="contents" :letter="letter"></city-content>
      <alphabet @letterNav="letterChange" class="alphabet" :cities="cities"></alphabet>
    </div>
    <search-area class="citySearch" :cities="cities"></search-area>
  </div>
</div>
</template>
<script>
import CityHeader from "./components/header"
import SearchArea from "./components/searchArea"
import CityContent from "./components/CityContent"
import Alphabet from "./components/Alphabet"
import axios from "axios"
export default {
  name: "City",
  components: {
    CityHeader,
    CityContent,
    SearchArea,
    Alphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    }
  },
  methods: {
    getCityInfo() {
      axios.get('/api/City.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res) {
      res = res.data
      console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    letterChange(res) {
      this.letter = res
      console.log(res)
    }
    // city: function (url) {
    //   return new Promise((success, reject) => {
    //     const xhr = new XMLHttpRequest()
    //     xhr.open("GET", url)
    //     xhr.send()
    //     xhr.onreadystatechange = function () {
    //       if (xhr.readyState === 4) {
    //         if (xhr.status >= 200 && xhr.status < 300) {
    //           success(xhr.response)
    //         } else {
    //           reject(xhr.status)
    //         }
    //       }
    //     }
    //   })
  },
  mounted() {
    // this.city("/api/City.json")
    //   .then(success => console.log(success))
    // do something after mounting vue instance
    this.getCityInfo()
  }
}
</script>
<style lang="sass" scoped>
  @import "~@/assets/styles/_variables"
  @import "~@/assets/styles/_mixins"
  #cityContainer
    color: $primary-font-color
    width: 100%
    max-width: 1500px
    height: 100%
    position: relative
    border-radius: 1rem
    display: flex
    flex-flow: column nowrap
    overflow: hidden
    background-image: url("~@/assets/img/city/cityDogy.jpg")
    background-size: contain
    background-color: #fffc01
    background-repeat: no-repeat
    background-position: bottom
    @media screen and (max-width: 900px)
      border-radius: 0
      opacity: 0.8
    &::before
      width: 100%
      height: 100%
      content: ""
      position: absolute
      background: linear-gradient(145deg, rgba(250,250,250,0) 40%, rgba(250,250,250,0.8) 60%,rgba(250,250,250,0) 70%,)
      background-size: 200% 100%
      background-position-x: 200%
      @include sketon
      animation: 2s sketon linear
      pointer-events: none
    .mainContent
      width: 100%
      height: 100%
      display: flex
      justify-content: center
      overflow: hidden
      padding: 2rem
      position: relative
      .cityContent
        width: 50%
        height: 100%
        display: flex
        flex-flow: column
        .contents
          width: 100%
          height: 92%
          overflow: auto
        .alphabet
          width: 100%
          height: 8%
          overflow: hidden
          border: 1px solid red
      .citySearch
        width: 50%
        height: 50%
        margin-left: 1rem
        display: flex
        justify-content: center
        align-items: center
</style>
