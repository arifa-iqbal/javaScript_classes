// let create the project
// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");
// buttons.forEach(function (button) {
//   button.addEventListener("click", function (e) {
//     const color = e.target.id;
//     body.style.backgroundColor = color;
//   });
// });
// let do the same thing with if statement
// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");
// buttons.forEach(function (button) {
//   button.addEventListener("click", function (e) {
//     const color = e.target.id;
//     if (color === "blue") {
//       body.style.backgroundColor = "blue";
//     } else if (color === "gray") {
//       body.style.backgroundColor = "gray";
//     } else if (color === "white") {
//       body.style.backgroundColor = "white";
//     } else if (color === "black") {
//       body.style.backgroundColor = "black";
//     } else if (color === "yellow") {
//       body.style.backgroundColor = "yellow";
//     } else {
//       body.style.backgroundColor = "white";
//     }
//   });
// });
// let do the same with switch statement
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const color = e.target.id;
    switch (color) {
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "gray":
        body.style.backgroundColor = "gray";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "black":
        body.style.backgroundColor = "black";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      default:
        body.style.backgroundColor = "white";
    }
  });
});
