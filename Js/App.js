//Element
let H = document.querySelector(".H");
let Li = document.querySelector(".Li");
let Na = document.querySelector(".Na");
let K = document.querySelector(".K");
let Rb = document.querySelector(".Rb");
let Cs = document.querySelector(".Cs");
let Fr = document.querySelector(".Fr");

// elements details
let hCon = document.querySelector(".element-display-container1");
let liCon = document.querySelector(".element-display-container3");
let NaCon = document.querySelector(".element-display-container11");
let KCon = document.querySelector(".element-display-container19");
let RbCon = document.querySelector(".element-display-container37");
let CsCon = document.querySelector(".element-display-container55");
let FrCon = document.querySelector(".element-display-container87");

// click function for h
H.addEventListener("click", () => {
  hCon.classList.toggle("active");
  liCon.classList.remove("active");
  NaCon.classList.remove("active");
  KCon.classList.remove("active");
  RbCon.classList.remove("active");
  CsCon.classList.remove("active");
  FrCon.classList.remove("active");
});

// click funtion for li
Li.addEventListener("click", () => {
  liCon.classList.toggle("active");
  hCon.classList.remove("active");
  NaCon.classList.remove("active");
  KCon.classList.remove("active");
  RbCon.classList.remove("active");
  CsCon.classList.remove("active");
  FrCon.classList.remove("active");
});
// click funtion for Na
Na.addEventListener("click", () => {
  NaCon.classList.toggle("active");
  hCon.classList.remove("active");
  liCon.classList.remove("active");
  KCon.classList.remove("active");
  RbCon.classList.remove("active");
  CsCon.classList.remove("active");
  FrCon.classList.remove("active");
});
// click funtion for K
K.addEventListener("click", () => {
  KCon.classList.toggle("active");
  NaCon.classList.remove("active");
  hCon.classList.remove("active");
  liCon.classList.remove("active");
  RbCon.classList.remove("active");
  CsCon.classList.remove("active");
  FrCon.classList.remove("active");
});
// click funtion for Rb
Rb.addEventListener("click", () => {
  RbCon.classList.toggle("active");
  KCon.classList.remove("active");
  NaCon.classList.remove("active");
  hCon.classList.remove("active");
  liCon.classList.remove("active");
  CsCon.classList.remove("active");
  FrCon.classList.remove("active");
});
// click funtion for Cs
Cs.addEventListener("click", () => {
  CsCon.classList.toggle("active");
  RbCon.classList.remove("active");
  KCon.classList.remove("active");
  NaCon.classList.remove("active");
  hCon.classList.remove("active");
  liCon.classList.remove("active");
  FrCon.classList.remove("active");
});
// click funtion for Fr
Fr.addEventListener("click", () => {
  FrCon.classList.toggle("active");
  RbCon.classList.remove("active");
  KCon.classList.remove("active");
  NaCon.classList.remove("active");
  hCon.classList.remove("active");
  liCon.classList.remove("active");
  CsCon.classList.remove("active");
});
