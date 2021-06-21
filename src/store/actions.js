export default{
  changeCity(ctx,cityName){
    ctx.commit('cityChange',cityName)
  },
  menuClick(ctx,navName){
    ctx.commit("selectNav",navName)
  }
}
