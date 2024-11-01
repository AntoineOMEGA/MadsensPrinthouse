var name = "Unknown OS"; 
if (navigator.userAgent.indexOf("like Mac") != -1){
  name = "iOS"; 
}
if (name == "iOS"){
  iosVersion = document.querySelector("#ios-version");
  iosVersion.style.display = "block";
  mainVersion = document.querySelector("#main-version");
  mainVersion.style.display = "none"
}