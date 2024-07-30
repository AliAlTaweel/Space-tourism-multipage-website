let selectPlanet = document.getElementById("ul-dest");
let planets = document.getElementsByClassName("planet");

function func_1(event) {
  event.preventDefault();
  if(! (event.target.tagName === "A")){
    return;
  }
  let clickedElement = event.target;

  Array.from(planets).forEach((element) => {
    element.classList.remove("active");
  });

  Array.from(planets).forEach((element) => {
    if (element.classList.contains(event.target.textContent.toLowerCase())) {
      console.log("check1");
      element.classList.add("active");
    }
  });
}
selectPlanet.addEventListener("click", func_1);