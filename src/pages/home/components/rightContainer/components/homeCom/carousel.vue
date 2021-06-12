<template>
<!-- <swiper ref="homeSwiper" :options="swiperOption" class="homeSwiper">
  <swiper-slide v-for="item of homeImg" :key="item.id" class="homeSwiperList">
    <img :src="item.src" />
  </swiper-slide>
  <div class="swiper-pagination" slot="pagination">

  </div>
</swiper> -->
<swiper class="swiper" :options="swiperOption">
  <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%">

  </div>
  <swiper-slide class="swiperSlide">
    <div class="title" data-swiper-parallax="-150">
      Slide One
    </div>
    <div class="subtitle" data-swiper-parallax="-240">
      subtitle
    </div>
    <div class="text" data-swiper-parallax="-360">
      <blockquote>
        {{text}}
      </blockquote>
    </div>
  </swiper-slide>
  <swiper-slide class="swiperSlide">
    <div class="title" data-swiper-parallax="-150">
      Slide two
    </div>
    <div class="subtitle" data-swiper-parallax="-240">
      subtitle
    </div>
    <div class="text" data-swiper-parallax="-360">
      <blockquote>
        {{text}}
      </blockquote>
    </div>
    <!-- Opacity parallax -->
    <!-- <div data-swiper-parallax-opacity="0.1">I will change opacity</div> -->
    <!-- Scale parallax -->
    <!-- <div data-swiper-parallax-scale="0.15">I will change scale</div> -->
  </swiper-slide>

  <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
  <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
  <div class="swiper-button-next swiper-button-white" slot="button-next"></div>

</swiper>
</template>
<script>
// import img01 from "@/assets/img/homePhoto/andrea-ferrario--9ea-_4x6iM-unsplash.jpg"
// import img02 from "@/assets/img/homePhoto/annie-spratt-LHVz-cy7vuE-unsplash.jpg"
// import img03 from "@/assets/img/homePhoto/dave-hoefler--T4UWsoqDeU-unsplash.jpg"
// import img04 from "@/assets/img/homePhoto/dave-hoefler-3vw1LdrH_FA-unsplash.jpg"
// import img05 from "@/assets/img/homePhoto/marcel-strauss-oLCun22P1-I-unsplash.jpg"
// import img06 from "@/assets/img/homePhoto/massimiliano-morosinotto-pv7hY0HYPC4-unsplash.jpg"
// import img07 from "@/assets/img/homePhoto/ola-dybul-nrmP36NZeik-unsplash.jpg"
export default {
  name: "homeCarousel",
  data: () => ({
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.",
    swiperOption: {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        hideOnClick: true,
      },
      parallax: true
    },
    //   homeImg: [{
    //       id: "001",
    //       src: img01
    //     },
    //     {
    //       id: "002",
    //       src: img02
    //     },
    //     {
    //       id: "003",
    //       src: img03
    //     },
    //     {
    //       id: "004",
    //       src: img04
    //     },
    //     {
    //       id: "005",
    //       src: img05
    //     },
    //     {
    //       id: "006",
    //       src: img06
    //     },
    //     {
    //       id: "007",
    //       src: img07
    //     }
    //   ]
  })
}
</script>
<style lang="sass" scoped>
  // @import img01 from "~@/assets/img/homePhoto/andrea-ferrario--9ea-_4x6iM-unsplash.jpg"
  .parallax-bg
    position: absolute
    left: 0
    top: 0
    width: 130%
    height: 100%
    background-size: cover
    background-image: url("~@/assets/img/homePhoto/annie-spratt-LHVz-cy7vuE-unsplash.jpg")
    background-position: left
  .swiper
    width: 100%
    height: 100%
    .swiperSlide
      display: flex
      flex-direction: column
      justify-content: center
      color: white
      padding: 0 80px
      background-color: transparent
      .title
        margin-bottom: 1rem
        font-size: 1rem * 2
        font-weight: bold
      .subtitle
        margin-bottom: 1rem
        font-size: 2rem
      .text
        max-width: 430px
        line-height: 1.32

  // .homeSwiper
  //   width: 100%
  //   height: 50%
  //   overflow: hidden
  //   .homeSwiperList
  //     width: 100%
  //     height: 100%
  //     position: relative
  //     img
  //       width: 100%
  //       height: 100%
  //       object-fit: cover
  //       opacity: 0.5

</style>
