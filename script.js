const panelHead = document.querySelectorAll('.panel-head');

panelHead.forEach((elem) => {
  elem.addEventListener("click", () => {
   elem.classList.toggle("active");
  });
});