const toggleButtonText = () => {
  const button = document.getElementById("toggleButton");

  if (button.textContent === "Hello World") {
    button.textContent = "Happy Hacking!";
    button.classList.add("active");
  } else {
    button.textContent = "Hello World";
    button.classList.remove("active");
  }
};
