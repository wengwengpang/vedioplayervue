<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
</script>
<style lang="sass">
  @import "@/assets/styles/_mixins"
  @include scrollbarSet()

  *
    box-sizing: border-box
    cursor: default

  #app
    font-family: 'Dancing Script', cursive
    width: 100vw
    height: 100vh
    background-color: #8EC5FC
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)
    padding: 1rem
    overflow: hidden
    display: flex
    flex-flow: row nowrap
    justify-content: center
    outline: none
    @media screen and (max-width: 900px)
      padding: 0
</style>
