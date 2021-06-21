<template>
<div id="chileContent">
  aaadfdfsfs
</div>
</template>
<script>
// import homeCarousel from "./homeCom/carousel"

export default {
  name: "childContent",
  data: () => ({

  }),
  methods: {
    getCityInfo() {
      let xhr = new XMLHttpRequest()
      xhr.timeout = 2000
      xhr.ontimeout = function () {
        console.log('it has problem')
      }
      xhr.onerror = () => {
        console.log('network Problem')
      }
      xhr.responseType = 'json'
      xhr.open('get', '/api/City.json?b=100?t=' + Date.now())
      xhr.send()
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            console.log(xhr.response)
          }
        }
      }
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>
<style lang="sass" scoped>

</style>
