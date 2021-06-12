<template>
<div id="SearchArea">
  <form class="cityForm" action="">
    <div class="searchTag">
      <label for="citySearch" class="label">
        <h2>City:</h2>
      </label>
      <input type="text" placeholder="Enter your City" id="citySearch" name="citySearch" />
    </div>
    <div class="btnGroup">
      <button type="submit" class="mainBtn btnPos">Search</button>
      <button type="reset" class="mainBtn btnPos">Reset</button>
    </div>
  </form>
</div>
</template>
<script>
export default {
  name: "SearchArea",
  data: () => ({

  })
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
        width: 50%
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
</style>
