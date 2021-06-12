<template>
<div id="alphabetcontent">
  <ul class="alphabetList">
    <li class="alphabetIcon" v-for="(item,key) of cities" :key="key" @click="selectLetter">
      {{key}}
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: "Alphabet",
  props: {
    cities: Object
  },
  methods: {
    selectLetter(e) {
      this.$emit("letterNav", e.target.innerText)
      console.log(e.target.innerHTML)
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~styles/_mixins"
  @import "~styles/_variables"
  #alphabetcontent
    display: flex
    width: 100%
    .alphabetList
      width: 100%
      display: flex
      flex-flow: row nowrap
      list-style: none
      padding: 0
      align-items: center
      justify-content: space-evenly
      .alphabetIcon
        width: 1.8rem
        height: 1.8rem
        background-color: black
        color: white
        text-align: center
        line-height: 2rem
        border-radius: 50%
        border: 2px solid white
        box-shadow: inset 0px 0px 5px white,0px 0px 2px black
        cursor: pointer
        &:hover
         transform: scale(1.5)
        &:nth-of-type(even)
          margin-top: 0.2rem
        &:nth-of-type(odd)
          margin-top: -0.2rem
</style>
