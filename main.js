document.querySelectorAll("button").forEach(function (alaa) {
  alaa.onclick = function () {
    document.querySelector("#demo").style.color = alaa.dataset.color;
    document.querySelector("#demo").innerHTML ="Color is " + alaa.dataset.color;
  };
});
