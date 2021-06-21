
export default{
    cityChange(state,cityName){
      state.city=cityName
      try{
        localStorage.city=cityName
      }catch(e){console.log(e)}
    },
    selectNav(state,navName){
      state.navName=navName
      try{
        localStorage.navName=navName
      }catch(e){console.log(e)}
    }
}
