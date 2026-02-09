let input1 = document.querySelector(".question-one");
let input2 = document.querySelector(".question-two");
let button = document.querySelector("button");
let change = document.querySelector(".change");
let change2 = document.querySelector(".change2");
let change3 = document.querySelector(".change3");
let change4 = document.querySelector(".change4");
let change5 = document.querySelector(".change5");
let change6 = document.querySelector(".change6");

button.onclick = function () {
  console.log("button-works");
  let answer1 = Number(input1.value);
  console.log(answer1);
  let answer2 = input2.value;
  console.log(answer2);

  if (answer1 < 5 && answer2 === "casual") {
    document.querySelector("p").innerHTML = "You're Upset Man!";5
  } else if (answer1 === 5 && answer2 === "casual") {
    document.querySelector("p").innerHTML = "You're Relaxed Man!";
  } else if (answer1 > 5 && answer2 === "casual") {
    document.querySelector("p").innerHTML = "You're Happy Man!";
  } else if (answer1 < 5 && answer2 === "formal") {
    document.querySelector("p").innerHTML = "You're Overworked Man!";
  } else if (answer1 === 5 && answer2 === "formal") {
    document.querySelector("p").innerHTML = "You're Coffee Man!";
  } else if (answer1 > 5 && answer2 === "formal")
    document.querySelector("p").innerHTML = "You're Joyous Man!";
};