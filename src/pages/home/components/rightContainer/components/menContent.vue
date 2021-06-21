<template>
<div id="menContent">
  aaafffffff
</div>
</template>
<script>
// import homeCarousel from "./homeCom/carousel"

export default {
  name: "menContent",
  data: () => ({}),
  mounted() {
    this.getinfo()
  },
  methods: {
    getinfo() {
      let xhr = new XMLHttpRequest()
      xhr.timeout = 2000
      xhr.ontimeout = function () {
        console.log("timeout")
      }
      xhr.onerror = () => console.log('network problem')
      xhr.responseType = 'json'
      xhr.open('get', '/api/City.json?c=100?t=' + Date.now())
      xhr.send()
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status >= 200 & xhr.status < 300) {
          console.log(xhr.status, xhr.statusText)
          let res = xhr.response
          let ls = []
          if (res.ret && res.data) {
            for (let i in res) {
              if (Object.hasOwnProperty.call(res, i)) {
                ls.push(i)
              }
            }
            console.log(res, ls)
          }
        }
      }
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
