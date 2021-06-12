<template>
<div id="waterDrop">
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>

  <div class="collection"></div>
  <span>ok</span>
</div>
</template>
<script>
export default {
  name: "waterDrop",
  data: () => ({

  })
}
</script>
<style lang="sass" scoped>
  @import "@/assets/styles/_variables"
  @import "@/assets/styles/_mixins"
  #waterDrop
    display: flex
    justify-content: flex-end
    padding-bottom: 0.3rem
    align-items: center
    width: 100%
    background-color: #eee
    flex-direction: column
    filter: contrast(30)
    .drop
      width: 1rem
      height: 1rem
      background-color: #000
      overflow: hidden
      border-radius: 50%
      position: absolute
      filter: blur(0.2rem)
      opacity: 0
      @include waterdrop()
      animation: 2.5s drop linear infinite
      &:nth-child(2)
        animation-delay: 0.5s
      &:nth-child(3)
        animation-delay: 0.7s
    .collection
      width: 1rem
      height: 1rem
      background-color: #000
      border-radius: 50%
      filter: blur(0.2rem)
      // @include waterCollection
      // animation: 3s collection linear infinite
    span
      position: absolute
      font-family: Helvetica
      font-size: 0.6rem
      color: rgb(9,233,18)
</style>
