// ==========================================
// KAZI MAHIM — RED WATER CLICK EFFECT
// ==========================================

document.addEventListener("pointerdown", function (event) {

  // Ignore right-click
  if (event.pointerType === "mouse" && event.button !== 0) {
    return;
  }

  // Create ripple
  const ripple = document.createElement("span");

  ripple.className = "click-ripple";

  // Exact click/tap position
  ripple.style.left = event.clientX + "px";
  ripple.style.top = event.clientY + "px";

  // Randomize the size slightly
  const size = 70 + Math.random() * 50;

  ripple.style.width = size + "px";
  ripple.style.height = size + "px";

  // Add to page
  document.body.appendChild(ripple);

  // Remove after animation
  ripple.addEventListener("animationend", function () {
    ripple.remove();
  }, { once: true });

});
