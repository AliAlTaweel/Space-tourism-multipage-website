let pointClicked = document.querySelector(".ulPoints");
let crewImg = document.querySelectorAll(".img");
let crew = document.getElementsByClassName("crew");

function func_2(event) {
  console.log("check 1");
  event.preventDefault();
  if (!(event.target.tagName === "A")) {
    return;
  }
  let clickedElement = event.target;
  Array.from(crew).forEach((element) => {
    element.classList.remove("active");
  });
  Array.from(crewImg).forEach((element) => {
    element.classList.remove("active");
  });
  Array.from(crew).forEach((element) => {
    let eleCalssList = Array.from(element.classList);
    let clickedElementClassList = Array.from(clickedElement.classList);

    if (eleCalssList[1] == clickedElementClassList[1]) {
      element.classList.add("active");
    }
  });
  Array.from(crewImg).forEach((element) => {
    let imgeleCalssList = Array.from(element.classList);
    let clickedElementClassList = Array.from(clickedElement.classList);

    if (imgeleCalssList[1] == clickedElementClassList[1]) {
      element.classList.add("active");
    }
  });
}
pointClicked.addEventListener("click", func_2);

// let selectPlanet = document.getElementById("ul-dest");
// let planets = document.getElementsByClassName("planet");

// function func_1(event) {
//   event.preventDefault();
//   if(! (event.target.tagName === "A")){
//     return;
//   }
//   let clickedElement = event.target;

//   Array.from(planets).forEach((element) => {
//     element.classList.remove("active");
//   });

//   Array.from(planets).forEach((element) => {
//     if (element.classList.contains(event.target.textContent.toLowerCase())) {
//       console.log("check1");
//       element.classList.add("active");
//     }
//   });
// }
// selectPlanet.addEventListener("click", func_1);
