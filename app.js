// https://www.omnicalculator.com/everyday-life/unit-price

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const unitpriceRadio = document.getElementById('unitpriceRadio');
const weightRadio = document.getElementById('weightRadio');
const costRadio = document.getElementById('costRadio');

let unitprice;
let weight = v1;
let cost = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

unitpriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Weight';
  variable2.textContent = 'Cost';
  weight = v1;
  cost = v2;
  result.textContent = '';
});

weightRadio.addEventListener('click', function() {
  variable1.textContent = 'Unit price';
  variable2.textContent = 'Cost';
  unitprice = v1;
  cost = v2;
  result.textContent = '';
});

costRadio.addEventListener('click', function() {
  variable1.textContent = 'Unit price';
  variable2.textContent = 'Weight';
  unitprice = v1;
  weight = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(unitpriceRadio.checked)
    result.textContent = `Unit price = ${computeunitprice().toFixed(2)}`;

  else if(weightRadio.checked)
    result.textContent = `Weight = ${computeweight().toFixed(2)}`;

  else if(costRadio.checked)
    result.textContent = `Cost = ${computecost().toFixed(2)}`;
})

// calculation

function computeunitprice() {
  return Number(cost.value) / Number(weight.value);
}

function computeweight() {
  return Number(cost.value) / Number(unitprice.value);
}

function computecost() {
  return Number(unitprice.value) * Number(weight.value);
}