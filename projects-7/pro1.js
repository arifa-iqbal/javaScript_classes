// let create the project
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    // let use if else to change the color of the
    if (e.target.style.backgroundColor === "black") {
      body.style.backgroundImage = e.target.style.backgroundColor;
    }
  });
});
