<template>
<div>
  <div id="SearchArea">
    <form class="cityForm" action="">
      <div class="searchTag">
        <label for="citySearch" class="label">
          <h2>City:</h2>
        </label>
        <input type="text" v-model="keyword" placeholder="Enter your City" id="citySearch" name="citySearch" />
      </div>
      <div class="btnGroup">
        <button type="submit" class="mainBtn btnPos">Search</button>
        <button type="reset" class="mainBtn btnPos">Reset</button>
      </div>
    </form>
    <div class="search-content" v-show="keyword">
      <ul>
        <li class="resultList" v-for="item of list" :key="item.id" @click="cityChange(item.name)">
          {{item.name}}
        </li>
        <li class="resultList defaultResult" v-show="noData">
          没有相关的城市
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "SearchArea",
  props: {
    cities: Object
  },
  data: () => ({
    keyword: "",
    list: [],
    timer: null //timer用来清空输入其它查询字符串是所延迟的100毫秒，没有它，选中的城市将100毫米后
  }),
  methods: {
    cityChange(cityName) {
      confirm("是否确认当前城市？") ? this.$store.dispatch("changeCity", cityName) && this.$router.push('/') : ""
    }
  },
  computed: {
    noData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      // {{ let a = {
      //    "d": "ddd",
      //    "c": "dd"
      //  }
      //  console.log(a)
      //  a[Symbol.iterator] = function () {
      //    let indexcount = 0
      //    return {
      //      next() {
      //        let ls = []
      //        for (let k of Object.keys(a)) {
      //          ls.push(a[k])
      //        }
      //        return indexcount < ls.length ? {
      //          value: ls[indexcount++],
      //          done: false
      //        } : {
      //          value: undefined,
      //          done: true
      //        }
      //      }
      //    }
      //  }
      //  let t = a[Symbol.iterator]()
      //  console.log(t.next())
      //  console.log(t.next())
      //  console.log(t.next())  }}
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        console.log(this.cities)
        const result = []
        for (let i in this.cities) {
          if (Object.hasOwnProperty.call(this.cities, i)) {
            this.cities[i].forEach((value) => {
              // if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {   **indexof这是es5语法，找到返回索引位置，找不到返回-1，‘NAN’它找不到返回-1
              if (value.spell.includes(this.keyword) || value.name.includes(this.keyword)) { //includes是es6语法，找到返回true，找不到返回false,’NAN'能够找到。
                result.push(value)
              }
            })
          }
        }
        this.list = result
        console.log(this.list)

      }, 100)
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~@/assets/styles/_variables"
  @import "~@/assets/styles/_mixins"
  #SearchArea
    display: flex
    justify-content: center
    align-items: center
    .cityForm
      width: 100%
      height: 100%
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .searchTag
        width: 100%
        display: flex
        justify-content: flex-start
        align-items: center
        margin-bottom: 0.5rem
        .label
          width: 20%
        #citySearch
          width: 80%
          border: none
          height: 2rem
          padding: .5rem
          box-shadow: 0px 0px 4px black
          outline-style: none
          border-radius: 1rem 1rem
      @include mainBtn($width:20%,$height:2rem)
      .btnGroup
        width: 50%
        display: flex
        justify-content: flex-end
        align-items: center
        .btnPos
          width: 38%
          margin-left: 0.8rem
          border-radius: 15px 15px
          background-color: #0D0D0D
          &:hover
            background-color: lighten(#0D0D0D,20%)
          &:active
            background-color: lighten(#0D0D0D,10%)
            box-shadow: 0px 0px 5px black
    .search-content
      position: absolute
      top: 0
      width: 50%
      height: 100%
      background-color: rgba(0,02,0,.8)
      left: 0
      right: 0
      bottom: 0
      z-index: 1
      overflow: scroll
      list-style: none
      .resultList
        cursor: pointer
        list-style: none
        color: white
        margin: 0.8rem
        line-height: $tagFontSize * 1.7
        font-weight: bold
        border-bottom: 0.05rem solid lighten(#0D0D0D, 60%)
        &:hover:not(.defaultResult)
         background: linear-gradient(55deg, darken(#fffc01,10%) 0% 30%, rgba(255,252,1,0) 70% 100%)
         font-size: $tagFontSize * 1.2
         color: darken(#0D0D0D, 30%)
        &:active:not(.defaultResult)
         font-size: $tagFontSize * 1.3
      .defaultResult
        cursor: default
</style>
