/*? no js js needed from me */

const body = document.body;
const tH = document.getElementById("textH");
const nilaiMerah = document.getElementById("nilaiMerah");
const sMerah = document.querySelector("input[name=sMerah]");
const sBiru = document.querySelector("input[name=sBiru]");
const sHijau = document.querySelector("input[name=sHijau]");
const tb = document.getElementById("textB");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
  nilaiMerah.textContent = r;
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
  tH.textContent = g;
});

sBiru.addEventListener("change", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
  tb.textContent = b;
});
