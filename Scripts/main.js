const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "Images/MainImg.png") {
    myImage.setAttribute("src", "Images/CuteNap.png");
  } else {
    myImage.setAttribute("src", "Images/MainImg.png");
  }
});
