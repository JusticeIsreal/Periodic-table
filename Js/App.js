//Element
// column 1 elements
let H = document.querySelector(".H");
let Li = document.querySelector(".Li");
let Na = document.querySelector(".Na");
let K = document.querySelector(".K");
let Rb = document.querySelector(".Rb");
let Cs = document.querySelector(".Cs");
let Fr = document.querySelector(".Fr");

// column 2 elements
let Be = document.querySelector(".Be");
let Mg = document.querySelector(".Mg");
let Ca = document.querySelector(".Ca");
let Sr = document.querySelector(".Sr");
let Ba = document.querySelector(".Ba");
let Ra = document.querySelector(".Ra");

// column 3 elements
let Sc = document.querySelector(".Sc");
let Y = document.querySelector(".Y");
let La = document.querySelector(".La");
let Ac = document.querySelector(".Ac");

// column 4 elements
let Ti = document.querySelector(".Ti");
let Zr = document.querySelector(".Zr");
let Hf = document.querySelector(".Hf");
let Rf = document.querySelector(".Rf");

// column 5 elements
let V = document.querySelector(".V");
let Nb = document.querySelector(".Nb");
let Ta = document.querySelector(".Ta");
let Db = document.querySelector(".Db");

// column 6 elements
let Cr = document.querySelector(".Cr");
let Mo = document.querySelector(".Mo");
let W = document.querySelector(".W");
let Sg = document.querySelector(".Sg");

// column 7 elements
let Mn = document.querySelector(".Mn");
let Tc = document.querySelector(".Tc");
let Re = document.querySelector(".Re");
let Bh = document.querySelector(".Bh");

// column 8 elements
let Fe = document.querySelector(".Fe");
let Ru = document.querySelector(".Ru");
let Os = document.querySelector(".Os");
let Hs = document.querySelector(".Hs");

// column 9 elements
let Co = document.querySelector("Co");
let Rh = document.querySelector(".Rh");
let Ir = document.querySelector(".Ir");
let Mt = document.querySelector(".Mt");

// column 10 elements
let Ni = document.querySelector("Ni");
let Pd = document.querySelector(".Pd");
let Pt = document.querySelector(".Pt");
let Ds = document.querySelector(".Ds");

// column 11 elements
let Cu = document.querySelector("Cu");
let Ag = document.querySelector(".Ag");
let Au = document.querySelector(".Au");
let Rg = document.querySelector(".Rg");

// column 12 elements
let Zn = document.querySelector("Zn");
let Cd = document.querySelector(".Cd");
let Hg = document.querySelector(".Hg");
let Cn = document.querySelector(".Cu");

// elements details
let elementBg = document.querySelector(".group1-element-box");

// column 1 element
let hCon = document.querySelector(".element-display-container1");
let liCon = document.querySelector(".element-display-container3");
let NaCon = document.querySelector(".element-display-container11");
let KCon = document.querySelector(".element-display-container19");
let RbCon = document.querySelector(".element-display-container37");
let CsCon = document.querySelector(".element-display-container55");
let FrCon = document.querySelector(".element-display-container87");

// column 2 element
let BeCon = document.querySelector(".element-display-container4");
let MgCon = document.querySelector(".element-display-container12");
let CaCon = document.querySelector(".element-display-container20");
let SrCon = document.querySelector(".element-display-container38");
let BaCon = document.querySelector(".element-display-container56");
let RaCon = document.querySelector(".element-display-container88");

// column 3 element
let ScCon = document.querySelector(".element-display-container21");
let YCon = document.querySelector(".element-display-container39");
// let LaCon = document.querySelector(".element-display-container57");
// let AcCon = document.querySelector(".element-display-container89");

// column 4 element
let TiCon = document.querySelector(".element-display-container22");
let ZrCon = document.querySelector(".element-display-container40");
let HfCon = document.querySelector(".element-display-container72");
let RfCon = document.querySelector(".element-display-container104");

// column 5 element
let VCon = document.querySelector(".element-display-container23");
let NbCon = document.querySelector(".element-display-container41");
let TaCon = document.querySelector(".element-display-container73");
let DbCon = document.querySelector(".element-display-container105");

// column 6 element
let CrCon = document.querySelector(".element-display-container24");
let MoCon = document.querySelector(".element-display-container42");
let WCon = document.querySelector(".element-display-container74");
let SgCon = document.querySelector(".element-display-container106");

// column 7 element
let MnCon = document.querySelector(".element-display-container25");
let TcCon = document.querySelector(".element-display-container43");
let ReCon = document.querySelector(".element-display-container75");
let BhCon = document.querySelector(".element-display-container107");

// column 8 element
let FeCon = document.querySelector(".element-display-container26");
let RuCon = document.querySelector(".element-display-container44");
let OsCon = document.querySelector(".element-display-container76");
let HsCon = document.querySelector(".element-display-container108");

// column 9 element
let CoCon = document.querySelector(".element-display-container27");
let RhCon = document.querySelector(".element-display-container45");
let IrCon = document.querySelector(".element-display-container77");
let MtCon = document.querySelector(".element-display-container109");

// column 10 element
let NiCon = document.querySelector(".element-display-container28");
let PdCon = document.querySelector(".element-display-container46");
let PtCon = document.querySelector(".element-display-container78");
let DsCon = document.querySelector(".element-display-container110");

// column 11 element
let CuCon = document.querySelector(".element-display-container29");
let AgCon = document.querySelector(".element-display-container47");
let AuCon = document.querySelector(".element-display-container79");
let RgCon = document.querySelector(".element-display-container111");

// column 12 element
let ZnCon = document.querySelector(".element-display-container30");
let CdCon = document.querySelector(".element-display-container48");
let HgCon = document.querySelector(".element-display-container80");
let CnCon = document.querySelector(".element-display-container112");

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
  YCon.classList.remove("active");
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
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
  YCon.classList.remove("active");
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
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
  YCon.classList.remove("active");
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
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
  YCon.classList.remove("active");
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
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
  YCon.classList.remove("active");
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
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
  YCon.classList.remove("active");
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
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
  YCon.classList.remove("active");
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
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
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
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
  YCon.classList.remove("active");
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
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
  YCon.classList.remove("active");
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
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
  YCon.classList.remove("active");
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
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
  YCon.classList.remove("active");
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
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
  YCon.classList.remove("active");
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
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
  YCon.classList.remove("active");
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
});
// click funtion for Y
Y.addEventListener("click", () => {
  YCon.classList.toggle("active");
  ScCon.classList.remove("active");
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
  // LaCon.classList.remove("active");
  // AcCon.classList.remove("active");
  TiCon.classList.remove("active");
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
});

// click funtion for La
// La.addEventListener("click", () => {
//   LaCon.classList.toggle("active");
//   YCon.classList.remove("active");
//   ScCon.classList.remove("active");
//   SrCon.classList.remove("active");
//   FrCon.classList.remove("active");
//   RbCon.classList.remove("active");
//   KCon.classList.remove("active");
//   NaCon.classList.remove("active");
//   hCon.classList.remove("active");
//   liCon.classList.remove("active");
//   CsCon.classList.remove("active");
//   BeCon.classList.remove("active");
//   MgCon.classList.remove("active");
//   CaCon.classList.remove("active");
//   BaCon.classList.remove("active");
//   RaCon.classList.remove("active");
//   AcCon.classList.remove("active");
//   TiCon.classList.remove("active");
//   ZrCon.classList.remove("active");
//   HfCon.classList.remove("active");
//   RfCon.classList.remove("active");
// VCon.classList.remove("active");
// });

// // click funtion for Ac
// Ac.addEventListener("click", () => {
//   AcCon.classList.toggle("active");
//   LaCon.classList.remove("active");
//   YCon.classList.remove("active");
//   ScCon.classList.remove("active");
//   SrCon.classList.remove("active");
//   FrCon.classList.remove("active");
//   RbCon.classList.remove("active");
//   KCon.classList.remove("active");
//   NaCon.classList.remove("active");
//   hCon.classList.remove("active");
//   liCon.classList.remove("active");
//   CsCon.classList.remove("active");
//   BeCon.classList.remove("active");
//   MgCon.classList.remove("active");
//   CaCon.classList.remove("active");
//   BaCon.classList.remove("active");
//   RaCon.classList.remove("active");
//   TiCon.classList.remove("active");
//   ZrCon.classList.remove("active");
//   HfCon.classList.remove("active");
//   RfCon.classList.remove("active");
// VCon.classList.remove("active");
// });

// click funtion for Ti
Ti.addEventListener("click", () => {
  TiCon.classList.toggle("active");
  // AcCon.classList.remove("active");
  // LaCon.classList.remove("active");
  YCon.classList.remove("active");
  ScCon.classList.remove("active");
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
  ZrCon.classList.remove("active");
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
});

// click funtion for Zr
Zr.addEventListener("click", () => {
  ZrCon.classList.toggle("active");
  TiCon.classList.remove("active");
  // AcCon.classList.remove("active");
  // LaCon.classList.remove("active");
  YCon.classList.remove("active");
  ScCon.classList.remove("active");
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
  HfCon.classList.remove("active");
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
});

// click funtion for Hf
Hf.addEventListener("click", () => {
  HfCon.classList.toggle("active");
  ZrCon.classList.remove("active");
  TiCon.classList.remove("active");
  // AcCon.classList.remove("active");
  // LaCon.classList.remove("active");
  YCon.classList.remove("active");
  ScCon.classList.remove("active");
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
  RfCon.classList.remove("active");
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
});
// click funtion for Rf
Rf.addEventListener("click", () => {
  RfCon.classList.toggle("active");
  HfCon.classList.remove("active");
  ZrCon.classList.remove("active");
  TiCon.classList.remove("active");
  // AcCon.classList.remove("active");
  // LaCon.classList.remove("active");
  YCon.classList.remove("active");
  ScCon.classList.remove("active");
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
  VCon.classList.remove("active");
  NbCon.classList.remove("active");
});

// click funtion for V
V.addEventListener("click", () => {
  VCon.classList.toggle("active");
  RfCon.classList.remove("active");
  HfCon.classList.remove("active");
  ZrCon.classList.remove("active");
  TiCon.classList.remove("active");
  // AcCon.classList.remove("active");
  // LaCon.classList.remove("active");
  YCon.classList.remove("active");
  ScCon.classList.remove("active");
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
  NbCon.classList.remove("active");
});

// click funtion for Nb
Nb.addEventListener("click", () => {
  NbCon.classList.toggle("active");
  VCon.classList.remove("active");
  RfCon.classList.remove("active");
  HfCon.classList.remove("active");
  ZrCon.classList.remove("active");
  TiCon.classList.remove("active");
  // AcCon.classList.remove("active");
  // LaCon.classList.remove("active");
  YCon.classList.remove("active");
  ScCon.classList.remove("active");
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
