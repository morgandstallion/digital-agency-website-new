const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");

// Open the drawer
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("open");
  hamburger.setAttribute("aria-expanded", "true");
});

// Close the drawer
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
});

// contact form range
window.onload = function () {
  slideMin();
  slideMax();
};

const minVal = document.querySelector(".min-val");
const maxVal = document.querySelector(".max-val");
const priceInputMin = document.querySelector(".min-input");
const priceInputMax = document.querySelector(".max-input");
const minTooltip = document.querySelector(".min-tooltip");
const maxTooltip = document.querySelector(".max-tooltip");
const minGap = 1500;
const range = document.querySelector(".slider-track");
const sliderMinValue = parseInt(minVal.min);
const sliderMaxValue = parseInt(maxVal.max);

function slideMin() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if (gap <= minGap) {
    minVal.value = parseInt(maxVal.value) - minGap;
  }
  minTooltip.innerHTML = "$" + " " + minVal.value;
  setArea();
}

function slideMax() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if (gap <= minGap) {
    maxVal.value = parseInt(minVal.value) + minGap;
  }
  maxTooltip.innerHTML = "$" + " " + maxVal.value;
  setArea();
}

function setArea() {
  const min = parseInt(minVal.min);
  const max = parseInt(maxVal.max);
  const minPercent = ((minVal.value - min) / (max - min)) * 100;
  const maxPercent = ((maxVal.value - min) / (max - min)) * 100;

  range.style.left = minPercent + "%";
  range.style.right = 100 - maxPercent + "%";

  minTooltip.style.left = minPercent + "%";
  maxTooltip.style.left = maxPercent + "%";
}
