let clickNums = document.querySelector(".techUl");
let text = document.querySelectorAll(".text");
let nums = document.querySelectorAll(".num");
console.log(clickNums);

function fun_1(event) {
  console.log(event.target);
  event.preventDefault();

  if (!(event.target.tagName === "A")) {
    return;
  }

  Array.from(nums).forEach((element) => {
    element.classList.remove("active");
  });
  Array.from(text).forEach((element) => {
    element.classList.remove("active");

    let eleCalssList = Array.from(element.classList);
    let clickedElementClassList = Array.from(event.target.classList);

    if (eleCalssList[1] == clickedElementClassList[1]) {
      element.classList.add("active");
      event.target.classList.add("active");
    }
  });
}
clickNums.addEventListener("click", fun_1);
