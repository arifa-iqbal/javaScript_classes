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
// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");
// buttons.forEach(function (button) {
//   button.addEventListener("click", function (e) {
//     const color = e.target.id;
//     switch (color) {
//       case "blue":
//         body.style.backgroundColor = "blue";
//         break;
//       case "gray":
//         body.style.backgroundColor = "gray";
//         break;
//       case "white":
//         body.style.backgroundColor = "white";
//         break;
//       case "black":
//         body.style.backgroundColor = "black";
//         break;
//       case "yellow":
//         body.style.backgroundColor = "yellow";
//         break;
//       default:
//         body.style.backgroundColor = "white";
//     }
//   });
// });
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id === "gray") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "orange") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
