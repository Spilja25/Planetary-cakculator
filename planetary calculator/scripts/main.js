function calculateWeight() {
  const massInput = document.querySelector(".mass");
  const planetSelect = document.querySelector(".planets");
  const result = document.getElementById("result");
  const planetImage = document.getElementById("planetImage");

  const mass = parseFloat(massInput.value);
  const planet = planetSelect.value;

  if (!mass || !planet) {
    alert("Please enter a mass and select a planet.");
    return;
  }

  let gravity;

  switch (planet) {
    case "mercury":
      gravity = 3.7;
      planetImage.src = "./images/mercury.png";
      break;
    case "earth":
      gravity = 9.8;
      planetImage.src = "./images/earth.png";
      break;
    case "moon":
      gravity = 1.6;
      planetImage.src = "./images/moon.png";
      break;
    case "mars":
      gravity = 3.7;
      planetImage.src = "./images/mars.png";
      break;
    case "jupiter":
      gravity = 24.79;
      planetImage.src = "./images/jupiter.png";
      break;
    case "saturn":
      gravity = 10.44;
      planetImage.src = "./images/saturn.png";
      break;
    case "uranus":
      gravity = 8.69;
      planetImage.src = "./images/uranus.png";
      break;
    case "neptune":
      gravity = 11.15;
      planetImage.src = "./images/neptune.png";
      break;
    case "pluto":
      gravity = 0.62;
      planetImage.src = "./images/pluto.png";
      break;
    default:
      alert("Please select a valid planet.");
      return;
  }

  const weight = mass * gravity;
  result.textContent = `Weight on ${
    planet.charAt(0).toUpperCase() + planet.slice(1)
  }: ${weight.toFixed(2)} N`;
}
