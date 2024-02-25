import { returnOrnek, importOrnek } from "./functions-2.js";
import DisFonksiyon from "./functions-2.js";

/*
function scope1() {
  let x = 5;
}

function scope2() {
  let y = 10;
  console.log(x);

  function scope3() {
    let z = 15;
    console.log(y);
  }

  scope3();
  console.log(z);
}

scope1();
scope2(); */

const disaridanGelenFonksiyon = returnOrnek();
console.log(disaridanGelenFonksiyon);

importOrnek();
DisFonksiyon();
