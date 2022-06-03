//Element

let H = document.querySelector(".H");
let Li = document.querySelector(".Li");
let Na = document.querySelector(".Na");
let K = document.querySelector(".K");
let Rb = document.querySelector(".Rb");
let Cs = document.querySelector(".Cs");
let Fr = document.querySelector(".Fr");
let Be = document.querySelector(".Be");
let Mg = document.querySelector(".Mg");
let Ca = document.querySelector(".Ca");
let Sr = document.querySelector(".Sr");
let Ba = document.querySelector(".Ba");
let Ra = document.querySelector(".Ra");
let Sc = document.querySelector(".Sc");

// elements details
let elementBg = document.querySelector(".group1-element-box");

let hCon = document.querySelector(".element-display-container1");
let liCon = document.querySelector(".element-display-container3");
let NaCon = document.querySelector(".element-display-container11");
let KCon = document.querySelector(".element-display-container19");
let RbCon = document.querySelector(".element-display-container37");
let CsCon = document.querySelector(".element-display-container55");
let FrCon = document.querySelector(".element-display-container87");
let BeCon = document.querySelector(".element-display-container4");
let MgCon = document.querySelector(".element-display-container12");
let CaCon = document.querySelector(".element-display-container20");
let SrCon = document.querySelector(".element-display-container38");
let BaCon = document.querySelector(".element-display-container56");
let RaCon = document.querySelector(".element-display-container88");
let ScCon = document.querySelector(".element-display-container21");

// click function for h
H.addEventListener("click", () => {
  hCon.classList.toggle("active");
  liCon.classList.remove("active");
  NaCon.classList.remove("active");
  KCon.classList.remove("active");
  RbCon.classList.remove("active");
  CsCon.classList.remove("active");
  FrCon.classList.remove("active");
  BeCon.classList.remove("active");
  MgCon.classList.remove("active");
  CaCon.classList.remove("active");
  SrCon.classList.remove("active");
  BaCon.classList.remove("active");
  RaCon.classList.remove("active");
  ScCon.classList.remove("active");
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
  BeCon.classList.remove("active");
  MgCon.classList.remove("active");
  CaCon.classList.remove("active");
  SrCon.classList.remove("active");
  BaCon.classList.remove("active");
  RaCon.classList.remove("active");
  ScCon.classList.remove("active");
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
  BeCon.classList.remove("active");
  MgCon.classList.remove("active");
  CaCon.classList.remove("active");
  SrCon.classList.remove("active");
  BaCon.classList.remove("active");
  RaCon.classList.remove("active");
  ScCon.classList.remove("active");
});
// elementBg.style.backgroundColor = "red";
// click funtion for K
K.addEventListener("click", () => {
  KCon.classList.toggle("active");
  NaCon.classList.remove("active");
  hCon.classList.remove("active");
  liCon.classList.remove("active");
  RbCon.classList.remove("active");
  CsCon.classList.remove("active");
  FrCon.classList.remove("active");
  BeCon.classList.remove("active");
  MgCon.classList.remove("active");
  CaCon.classList.remove("active");
  SrCon.classList.remove("active");
  BaCon.classList.remove("active");
  RaCon.classList.remove("active");
  ScCon.classList.remove("active");
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
  BeCon.classList.remove("active");
  MgCon.classList.remove("active");
  CaCon.classList.remove("active");
  SrCon.classList.remove("active");
  BaCon.classList.remove("active");
  RaCon.classList.remove("active");
  ScCon.classList.remove("active");
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
  BeCon.classList.remove("active");
  MgCon.classList.remove("active");
  CaCon.classList.remove("active");
  SrCon.classList.remove("active");
  BaCon.classList.remove("active");
  RaCon.classList.remove("active");
  ScCon.classList.remove("active");
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
  BeCon.classList.remove("active");
  MgCon.classList.remove("active");
  CaCon.classList.remove("active");
  SrCon.classList.remove("active");
  BaCon.classList.remove("active");
  RaCon.classList.remove("active");
  ScCon.classList.remove("active");
});
// click funtion for Be
Be.addEventListener("click", () => {
  BeCon.classList.toggle("active");
  FrCon.classList.remove("active");
  RbCon.classList.remove("active");
  KCon.classList.remove("active");
  NaCon.classList.remove("active");
  hCon.classList.remove("active");
  liCon.classList.remove("active");
  CsCon.classList.remove("active");
  MgCon.classList.remove("active");
  CaCon.classList.remove("active");
  SrCon.classList.remove("active");
  BaCon.classList.remove("active");
  RaCon.classList.remove("active");
  ScCon.classList.remove("active");
});
// click funtion for Mg
Mg.addEventListener("click", () => {
  MgCon.classList.toggle("active");
  FrCon.classList.remove("active");
  RbCon.classList.remove("active");
  KCon.classList.remove("active");
  NaCon.classList.remove("active");
  hCon.classList.remove("active");
  liCon.classList.remove("active");
  CsCon.classList.remove("active");
  BeCon.classList.remove("active");
  CaCon.classList.remove("active");
  SrCon.classList.remove("active");
  BaCon.classList.remove("active");
  RaCon.classList.remove("active");
  ScCon.classList.remove("active");
});
// click funtion for Ca
Ca.addEventListener("click", () => {
  CaCon.classList.toggle("active");
  FrCon.classList.remove("active");
  RbCon.classList.remove("active");
  KCon.classList.remove("active");
  NaCon.classList.remove("active");
  hCon.classList.remove("active");
  liCon.classList.remove("active");
  CsCon.classList.remove("active");
  BeCon.classList.remove("active");
  MgCon.classList.remove("active");
  SrCon.classList.remove("active");
  BaCon.classList.remove("active");
  RaCon.classList.remove("active");
  ScCon.classList.remove("active");
});
// click funtion for Sr
Sr.addEventListener("click", () => {
  SrCon.classList.toggle("active");
  FrCon.classList.remove("active");
  RbCon.classList.remove("active");
  KCon.classList.remove("active");
  NaCon.classList.remove("active");
  hCon.classList.remove("active");
  liCon.classList.remove("active");
  CsCon.classList.remove("active");
  BeCon.classList.remove("active");
  MgCon.classList.remove("active");
  CaCon.classList.remove("active");
  BaCon.classList.remove("active");
  RaCon.classList.remove("active");
  ScCon.classList.remove("active");
});
// click funtion for Ba
Ba.addEventListener("click", () => {
  BaCon.classList.toggle("active");
  SrCon.classList.remove("active");
  FrCon.classList.remove("active");
  RbCon.classList.remove("active");
  KCon.classList.remove("active");
  NaCon.classList.remove("active");
  hCon.classList.remove("active");
  liCon.classList.remove("active");
  CsCon.classList.remove("active");
  BeCon.classList.remove("active");
  MgCon.classList.remove("active");
  CaCon.classList.remove("active");
  RaCon.classList.remove("active");
  ScCon.classList.remove("active");
});
// click funtion for Ra
Ra.addEventListener("click", () => {
  RaCon.classList.toggle("active");
  SrCon.classList.remove("active");
  FrCon.classList.remove("active");
  RbCon.classList.remove("active");
  KCon.classList.remove("active");
  NaCon.classList.remove("active");
  hCon.classList.remove("active");
  liCon.classList.remove("active");
  CsCon.classList.remove("active");
  BeCon.classList.remove("active");
  MgCon.classList.remove("active");
  CaCon.classList.remove("active");
  BaCon.classList.remove("active");
  ScCon.classList.remove("active");
});
// click funtion for Sc
Sc.addEventListener("click", () => {
  ScCon.classList.toggle("active");
  SrCon.classList.remove("active");
  FrCon.classList.remove("active");
  RbCon.classList.remove("active");
  KCon.classList.remove("active");
  NaCon.classList.remove("active");
  hCon.classList.remove("active");
  liCon.classList.remove("active");
  CsCon.classList.remove("active");
  BeCon.classList.remove("active");
  MgCon.classList.remove("active");
  CaCon.classList.remove("active");
  BaCon.classList.remove("active");
  RaCon.classList.remove("active");
});
