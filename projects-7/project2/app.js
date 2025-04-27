// let create BMI calculator
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  // here we will use if else statement to check the BMI

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please enter a valid weight ${weight}`;
  } else {
    // formula to calculte Bmi
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

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
