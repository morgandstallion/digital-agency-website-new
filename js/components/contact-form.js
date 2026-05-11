// form.js

export function initForm() {
  const minVal = document.querySelector(".min-val");
  const maxVal = document.querySelector(".max-val");
  const minTooltip = document.querySelector(".min-tooltip");
  const maxTooltip = document.querySelector(".max-tooltip");
  const range = document.querySelector(".slider-track");

  if (!minVal || !maxVal || !range) return;

  const minGap = 1500;

  function slideMin() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);

    if (gap <= minGap) {
      minVal.value = parseInt(maxVal.value) - minGap;
    }

    minTooltip.innerHTML = "$ " + minVal.value;

    setArea();
  }

  function slideMax() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);

    if (gap <= minGap) {
      maxVal.value = parseInt(minVal.value) + minGap;
    }

    maxTooltip.innerHTML = "$ " + maxVal.value;

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

  slideMin();
  slideMax();

  minVal.addEventListener("input", slideMin);
  maxVal.addEventListener("input", slideMax);

  const textarea = document.querySelector("textarea");

  if (textarea) {
    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  }
}
