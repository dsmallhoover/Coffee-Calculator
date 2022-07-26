const kg = 2.20462;

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

function copyClipboard4() {
  var copyText = document.getElementById("surplusShortage");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  alert("Copied:" + copyText.value);
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

function blend() {
  var bc1 = parseFloat(document.querySelector("#bc1").value);
  var bc2 = parseFloat(document.querySelector("#bc2").value);
  var bc3 = parseFloat(document.querySelector("#bc3").value);
  var bc4 = parseFloat(document.querySelector("#bc4").value);
  var bc3 = parseFloat(document.querySelector("#bc3").value);
  
  var bc1percentage = parseInt(document.querySelector("#bc1percentage").value);
  var bc2percentage = parseInt(document.querySelector("#bc2percentage").value);
  var bc3percentage = parseInt(document.querySelector("#bc3percentage").value);
  var bc4percentage = parseInt(document.querySelector("#bc4percentage").value);

  var bc1total = (bc1 * bc1percentage) / 100;
  var bc2total = (bc2 * bc2percentage) / 100;
  var bc3total = (bc3 * bc3percentage) / 100;
  var bc4total = (bc4 * bc4percentage) / 100;

  var totalBlend;
  totalBlend = "$" + (bc1total + bc2total + bc3total + bc4total).toFixed(2);
  
  document.querySelector("#result3").innerHTML = totalBlend;
  document.getElementById('s3').value = totalBlend;

}

function roastSchedule() {
  var roh = parseFloat(document.querySelector("#roh").value);
  var ordered = parseFloat(document.querySelector("#ordered").value);
  var scheduled = parseFloat(document.querySelector("#scheduled").value);
  
  var scheduleTotal;
  scheduleTotal = (roh + scheduled).toFixed(2);

  var surplusShortage;
  surplusShortage = scheduleTotal - ordered;
  
  document.querySelector("#resultTotal").innerHTML = scheduleTotal;
  document.getElementById('scheduleTotal').value = scheduleTotal;
  document.getElementById('surplusShortage').value = surplusShortage;

}


