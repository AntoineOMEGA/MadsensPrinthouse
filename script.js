//detect OS
var name = "Unknown OS"; 
if (navigator.userAgent.indexOf("like Mac") != -1){
  name = "iOS"; 
}
if (name == "iOS"){
  catalogLink = document.querySelector("#catalog");
  catalogLink.innerHTML = "<a href = 'https://www.companycasuals.com/printhouse/start.jsp' id = 'catalog'><button>Catalog</button></a>"
}