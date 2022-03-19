const kg = 2.20462;
const freight = 200;

function copyClipboard() {
  var copyText = document.getElementById("s1");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  alert("Copied:" + copyText.value);
}

function copyClipboard2() {
  var copyText = document.getElementById("s2");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  alert("Copied:" + copyText.value);
}

function copyClipboard3() {
  var copyText = document.getElementById("s3");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  alert("Copied:" + copyText.value);
}

function calc() {
  var a = parseInt(document.querySelector("#green").value);
  var b = parseInt(document.querySelector("#shrinkage").value);
  var shrink = b / 100;
  var calc1 = a * kg * shrink;
  var calculate;

  calculate = (a * kg - calc1).toFixed(2);

  document.querySelector("#result").innerHTML = calculate;
  document.getElementById('s1').value = calculate;
}

function runout() {
  var c = parseInt(document.querySelector("#roasted").value);
  var d = parseInt(document.querySelector("#weekly").value);
  var calcy;

  calcy = c / d;

  document.querySelector("#result2").innerHTML = calcy;
  document.getElementById('s2').value = calcy;
}

function actual() {
  var e = parseFloat(document.querySelector("#green-cost").value);
  var f = parseInt(document.querySelector("#bags").value);
  var g = parseInt(document.querySelector("#weight-bag").value);
  var calc2 = g * kg * f;
  var calc3 = calc2 * e + freight;
  var calc4;

  calc4 = "$" + (calc3 / calc2).toFixed(2);

  document.querySelector("#result3").innerHTML = calc4;
  document.getElementById('s3').value = calc4;
}
// https://www.youtube.com/watch?v=LWoGu5tSeig

const poundsInput = document.getElementById("pounds");
const kilogramsInput = document.getElementById("kilograms");
const gramsInput = document.getElementById("grams");
const ouncesInput = document.getElementById("ounces");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

   switch (e.target.name) {
     case "pounds":
      kilogramsInput.value = (value / 2.20462).toFixed(4);
      gramsInput.value = (value * 453.59).toFixed(2);
      ouncesInput.value = (value * 16).toFixed(2);
       break;
      case "kilograms":
       poundsInput.value = (value * 2.20462).toFixed(3);
       gramsInput.value = (value * 1000).toFixed(2);
       ouncesInput.value = (value * 35.274).toFixed(2);
        break;
      case "grams":
       poundsInput.value = (value / 453.59).toFixed(3);
       kilogramsInput.value = (value / 1000).toFixed(4);
       ouncesInput.value = (value * 0.035274).toFixed(2);
          break;
      case "ounces":
            poundsInput.value = (value / 16).toFixed(3);
            kilogramsInput.value = (value / 35.274).toFixed(4);
            gramsInput.value = (value / .0353).toFixed(2);
               break;
   }
  });
}