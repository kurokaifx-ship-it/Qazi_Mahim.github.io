document.addEventListener("pointerdown", function (event) {

  if (event.pointerType === "mouse" && event.button !== 0) {
    return;
  }

  const ripple = document.createElement("span");

  ripple.className = "click-ripple";

  ripple.style.left = event.clientX + "px";
  ripple.style.top = event.clientY + "px";

  const size = 80 + Math.random() * 60;

  ripple.style.width = size + "px";
  ripple.style.height = size + "px";

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 800);

});
