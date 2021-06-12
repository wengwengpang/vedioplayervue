<template>
<div id="profileTwo">
  <div class="logonImg">
    <svg class="icon editIcon" aria-hidden="true">
      <use xlink:href="#icon-icon-test1"></use>
    </svg>
  </div>
  <div class="logonSignUp">
    <button type="button" class="mainBtn" @click='loginMenu'>Login</button>
    <button type="signUp" class="mainBtn" @click="signUpMenu">Sign Up</button>
  </div>
</div>
</template>
<script>
export default {
  name: "profileTwo",
  components: {},
  data: () => ({
    onOffState: {
      display: "none"
    },
    signUpOnOff: {
      display: "none"
    }
  }),
  methods: {
    loginMenu: function () {
      this.onOffState.display = "block"
      console.log(this.onOffState.display)
      this.bus.$emit("stateTwoChange", this.onOffState.display)
    },
    signUpMenu: function () {
      this.signUpOnOff.display = "block"
      this.bus.$emit("stateSignUp", this.signUpOnOff.display)
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~styles/_variables"
  @import "~styles/_mixins"
  #profileTwo
    width: 100%
    height: 100%
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    .logonImg
      height: 60%
      width: 50%
      margin-bottom: .6rem
      display: flex
      justify-content: center
      align-items: center
      overflow: hidden
      .icon
        height: 100%
    .logonSignUp
      width: 70%
      height: 15%
      display: flex
      justify-content: space-around
      @include mainBtn()

</style>
