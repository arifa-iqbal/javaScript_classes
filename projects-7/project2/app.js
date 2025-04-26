// let create BMI calculator
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weigth = parseInt(document.querySelector("#weigth").value);
  const result = document.querySelector("#result");
  // here we will use if else statement to check the BMI

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter a valid height ${height}`;
  } else if (weigth === "" || weigth < 0 || isNaN(weigth)) {
    result.innerHTML = `please enter a valid weigth ${weigth}`;
  } else {
    // formula to calculte Bmi
    const bmi = (weigth / ((height * height) / 10000)).toFixed(2);
    // show result
    result.innerHTML = `<span>${bmi}</span>`;
    // i want to print an other message based on the bmi value that the value comes in underweight, nomal, or overweight
    if (bmi < 18.5) {
      result.innerHTML += `<p>you are underweidht</p>`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML += `<p>your weigt is normal</p>`;
    } else {
      result.innerHTML += `<p>you are overweight</p>`;
    }
  }
});
