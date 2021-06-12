<template>
<div id="profileSignUp" :style="onOffState">
  <form action="#">
    <div class="signUpContainer">
      <h2 class="title">{{signUpTitle}}</h2>
      <p>
        {{signUpDescription}}
      </p>
      <hr />

      <label for="email"><b>email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />

      <label for="psw-repeat"><b>Repear Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

      <div class="checkboxs">
        <input type="checkbox" checked="checked" name="remember" id="a" /><span>Remember me</span>
      </div>

      <p>
        By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.
      </p>

      <div class="clearfix">
        <button type="button" class="cancelBtn cancelBtn" @click="cancelSignUpTag">Cancel</button>
        <button type="submit" class="signUpBtn mainBtn">Sign Up</button>
      </div>
    </div>
  </form>
</div>
</template>
<script>
export default {
  name: "profileSignUp",
  data: () => ({
    signUpTitle: "Sign Up",
    signUpDescription: "Please fill in this form to create an account.",
    onOffState: {
      display: "none"
    }
  }),
  methods: {
    cancelSignUpTag: function () {
      this.onOffState.display = "none"
    }
  },
  mounted: function () {
    let this_ = this
    this.bus.$on("stateSignUp", function (msg) {
      this_.onOffState.display = msg
    })
  }
}
</script>
<style lang="sass" scoped>
  @import "~@/assets/styles/_variables"
  @import "~@/assets/styles/_mixins"
  #profileSignUp
    width: 100vw
    height: 100vh
    background-color: $tagBackground
    position: fixed
    top: 0
    left: 0
    z-index: 2
    padding: 4rem
    overflow: hidden
    display: flex
    justify-content: center
    align-items: center
    .signUpContainer
      width: 40%
      max-width: 80rem
      min-width: 20rem
      height: 100%
      background: white
      display: flex
      flex-flow: column nowrap
      margin: 0 auto
      justify-content: space-between
      padding: 1rem
      border: 10px solid black
      // align-items: center
      position: relative
      *
        width: 100%
        margin-bottom: 0.4rem
      .title
        color: $green-dark
      .clearfix
        @include mainBtn($width:100%)
        @include cancelBtn($width:100%)
      .checkboxs
        display: flex
        justify-content: flex-start
        align-items: center
        *
          width: auto
      @include tagInputFormat()
</style>
