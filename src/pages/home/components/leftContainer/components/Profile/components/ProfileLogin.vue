<template>
<div id="profileLogin" :style="onOffState">
  <div class="loginMenu">
    <span class="closeMenu" title="closeBtn Modal" @click="closeMenu">&times;</span>
    <form class="modal-content animate" action="#">
      <div class="imgContainer">
        <svg class="icon editIcon" aria-hidden="true">
          <use xlink:href="#icon-icon-test1"></use>
        </svg>
      </div>
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <button type="submit" class="mainBtn">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" />Remember me
        </label>
      </div>

      <div class="conatiner cancelContainer">
        <button type="button" class="cancelBtn" @click="closeMenu">Cancel</button>
        <span class="psw">Forget <a href="#">password?</a></span>
      </div>
    </form>
  </div>
</div>
</template>
<script>
export default {
  name: "profileLogin",
  props: [],
  data: () => ({
    onOffState: {
      display: "none"
    }
  }),
  methods: {
    closeMenu: function () {
      this.onOffState.display = "none"
    }
  },
  mounted: function () {
    var this_ = this
    this.bus.$on("stateTwoChange", function (msg) {
      this_.onOffState.display = msg
      console.log(msg)
    })
  }

}
</script>
<style lang="sass" scoped>
  @import "~styles/_variables"
  @import "~styles/_mixins"
  #profileLogin
    // display: none
    overflow: auto
    width: 100vw
    height: 100vh
    background-color: $tagBackground
    position: fixed
    top: 0
    left: 0
    z-index: 2
    padding: 5rem
    .loginMenu
      margin: 0 auto
      border: 10px solid black
      width: 40%
      height: 100%
      max-width: 80rem
      min-width: 20rem
      background: white
      display: flex
      justify-content: center
      padding: 1rem
      position: relative
      .closeMenu
        position: absolute
        right: 2rem
        top: 0
        font-size: 3rem
        cursor: pointer
      .modal-content
        width: 100%
        border: 1px solid #888
        background-color: #fefefe
        display: flex
        align-items: center
        justify-content: space-between
        flex-direction: column
        .imgContainer
          margin-bottom: 1rem
        .container
          display: flex
          flex-direction: column
          width: 100%
          padding: 1rem
          *
            margin-bottom: 0.5rem
          @include tagInputFormat()
          @include mainBtn($width:100%)
          width: 100%
        .cancelContainer
          width: 100%
          height: 10%
          display: flex
          padding: 1rem
          justify-content: space-between
          align-items: center
          background: #f1f1f1
        @include cancelBtn()
</style>
