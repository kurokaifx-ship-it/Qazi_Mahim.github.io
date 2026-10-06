window.addEventListener("load", () => {
  setTimeout(() => {
    document
      .getElementById("loader")
      .classList.add("loader-hide");
  }, 1000);
});


/* Scroll Reveal */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.12
  }
);

reveals.forEach((element) => {
  observer.observe(element);
});


/* Custom Cursor */

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let cursorX = mouseX;
let cursorY = mouseY;


window.addEventListener("mousemove", (event) => {

  mouseX = event.clientX;
  mouseY = event.clientY;

  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";

});


function animateCursor() {

  cursorX += (mouseX - cursorX) * 0.16;
  cursorY += (mouseY - cursorY) * 0.16;

  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();


/* Cursor Hover Effect */

document
  .querySelectorAll("a, .interest, .magnetic")
  .forEach((element) => {

    element.addEventListener("mouseenter", () => {

      cursor.style.width = "60px";
      cursor.style.height = "60px";
      cursor.style.borderColor = "#b6ff00";

    });


    element.addEventListener("mouseleave", () => {

      cursor.style.width = "34px";
      cursor.style.height = "34px";
      cursor.style.borderColor =
        "rgba(255,255,255,.55)";

    });

  });


/* Magnetic Elements */

document
  .querySelectorAll(".magnetic")
  .forEach((element) => {

    element.addEventListener("mousemove", (event) => {

      const rect =
        element.getBoundingClientRect();

      const x =
        (event.clientX -
          rect.left -
          rect.width / 2) * 0.12;

      const y =
        (event.clientY -
          rect.top -
          rect.height / 2) * 0.12;

      element.style.transform =
        `translate(${x}px, ${y}px)`;

    });


    element.addEventListener("mouseleave", () => {

      element.style.transform = "";

    });

  });
