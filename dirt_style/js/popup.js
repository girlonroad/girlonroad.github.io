const info = document.getElementById("info-toggle");//get the info-toggle button
const popup = document.getElementById("info-popup");//get the popup itself
const x = document.getElementById("x");//get the X to close the popup

//click event listener allows the user to click on the info-toggle button to view the info
info.addEventListener("click", () => {
  popup.className = "";
  popup.style.zIndex = "25";

});
//using the X to clearly signify closing the popup, again through click event listener
x.addEventListener("click", () => {
  popup.className = "hidden";
});