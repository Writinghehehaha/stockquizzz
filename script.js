let input1 = document.querySelector(".question-one");
let input2 = document.querySelector(".question-two");
let button = document.querySelector("button");
let joy = document.querySelector(".joy");
let coffee = document.querySelector(".coffee");
let happy = document.querySelector(".happy");
let relaxed = document.querySelector("relaxed");
let upset = document.querySelector(".upset");
let upsetB = document.querySelector(".upsetB");

button.onclick = function () {
  console.log("button-works");
  let answer1 = Number(input1.value);
  console.log(answer1);
  let answer2 = input2.value;
  console.log(answer2);

  if (answer1 < 5 && answer2 === "casual" || answer2 === "Casual") {
    document.querySelector("p").innerHTML = "You're Upset Man!";
  } else if (answer1 === 5 && answer2 === "casual" || answer2 === "Casual") {
    document.querySelector("p").innerHTML = "You're Relaxed Man!";
  } else if (answer1 > 5 && answer2 === "casual" || answer2 === "Casual") {
    document.querySelector("p").innerHTML = "You're Happy Man!";
  } else if (answer1 < 5 && answer2 === "formal" || answer2 === "Formal") {
    document.querySelector("p").innerHTML = "You're Overworked Man!";
  } else if (answer1 === 5 && answer2 === "formal" || answer2 === "Formal") {
    document.querySelector("p").innerHTML = "You're Coffee Man!";
  } else if (answer1 > 5 && answer2 === "formal" || answer2 === "Formal")
    document.querySelector("p").innerHTML = "You're Joyous Man!";
};