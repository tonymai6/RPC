// TODO: Make a reference to the first button on the page
const buttons = document.querySelectorAll("button");

// TODO: DO something whenever a button is clicked
const button = document.querySelector("button");

button.addEventListener(
  "click",

  // Callback function
  function () {
    console.log("Button Clicked");
  }
);

buttons.forEach(function (button) {
  console.log("ad");
});
