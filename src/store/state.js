let defaultCity = '北京'
try {
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch(e){console.log(e)}

let defaultNavName = "homeContent"
try {
  if(localStorage.navName){
    defaultNavName=localStorage.navName
  }
}catch(e){console.log(e)}

export default{
  city: defaultCity,
  navName: defaultNavName
}
