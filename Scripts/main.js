const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "Images/MainImg.PNG") {
    myImage.setAttribute("src", "Images/CuteNap.PNG");
  } else {
    myImage.setAttribute("src", "Images/MainImg.PNG");
  }
});
