const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  callServer();
});

function callServer() {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "?request=runBat1", false);
  xhr.send();

  console.log(xhr.status);
  console.log(xhr.responseText);
}
