document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const radios = document.querySelectorAll(".radio");

  radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      // Remove "expanded" class from all boxes
      boxes.forEach((box) => box.classList.remove("expanded"));
      // Add "expanded" class to the currently selected box
      boxes[index].classList.add("expanded");
    });
  });
});
