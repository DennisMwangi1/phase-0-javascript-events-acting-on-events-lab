const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "10px";
dodger.style.right = "50px"


  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  function moveDodgerRight() {
    const rightNumbers = dodger.style.right.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    if (left > 0) {
      dodger.style.right = `${right - 1}px`;
    }
  }