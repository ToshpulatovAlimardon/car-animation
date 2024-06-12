const btn = document.querySelector("#btn");

const moveCar = () => {
  const car = document.querySelector(".car");
  let position = 0;

  const animationId = setInterval(moving, 10);

  function moving() {
    if (position === 1000) {
      clearInterval(animationId);
    } else {
      position++;
      car.style.left = position + "px";
    }
  }
};

btn.addEventListener("click", moveCar);
