const clock = document.getElementById("clock");
const message = document.getElementById("message");
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  // now i want to add message like good, morning, good afternoon, good evening, and good night with different colors and fonts and emojis lets do it
  let hour = date.getHours();
  if (hour >= 0 && hour < 12) {
    message.innerHTML = "Good Morning! 🌞";
    message.style.color = "orange";
    message.style.fontFamily = "Arial, sans-serif";
  } else if (hour >= 12 && hour < 17) {
    message.innerHTML = "Good Afternoon! ☀";

    message.style.color = "yellow";
    message.style.fontFamily = "Arial, sans-serif";
  } else if (hour >= 17 && hour < 21) {
    message.innerHTML = "Good Evening! 🌇";

    message.style.color = "purple";
    message.style.fontFamily = "Arial, sans-serif";
  } else {
    message.innerHTML = "Good Night! 🌙";
  }
}, 1000);
