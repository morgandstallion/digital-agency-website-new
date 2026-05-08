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
  minTooltip.innerHTML = "$" + minVal.value;
  priceInputMin.value = minVal.value;
  setArea();
}

function slideMax() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if (gap <= minGap) {
    maxVal.value = parseInt(minVal.value) + minGap;
  }
  maxTooltip.innerHTML = "$" + maxVal.value;
  priceInputMax.value = maxVal.value;
  setArea();
}

function setArea() {
  range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
  minTooltip.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
  range.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
  maxTooltip.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
}

/*function setMinInput() {
  let minPrice = parseInt(priceInputMin.value);
}

function setMaxInput() {
  let maxPrice = parseInt(priceInputMax.value);
}*/

/*  range.style.left = `${
    ((minVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
  }%`;

  range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
  minTooltip.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
  range.style.right = `${
    100 -
    ((maxVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
  }%`;
  maxTooltip.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%"; */
