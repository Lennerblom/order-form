'use strict';

///////////////////////////// DEFINE GLOBAL VARIABLES ////////////////////////////
// declare an array that holds the images
var btn = document.getElementById('addToCart');//on index
var orders = document.getElementById('orders'); //on cart
//console.log(itemQuantity);

if(localStorage.itemArray) {
  var itemArray = localStorage.itemArray.split(',');
} else {
  var itemArray = [];
}

///////////////////////////// HANDLER FUNCTION ////////////////////////////
function handleProductSubmit(event) {
  console.log(event);
  event.preventDefault();

  var itemName = document.getElementById('product').value; //on index
  var itemQuantity = document.getElementsByName('quantity'); //on index
  console.log(itemName);
  console.log(itemQuantity);
  itemArray.push(new Constructor(itemName, itemQuantity));

  function Constructor(productName, productQuantity) {
    this.productName = productName;
    this.productQuantity = productQuantity;
  }
  save();
  console.log(itemName);
  create();
  function create() {
    var val = itemArray.productName;
    //var val2 = itemArray.productQuantity;
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(val));
    orders.appendChild(item);
    item.value = '';
  }
  console.log(itemArray);
}

///////////////////////////// SAVE FUNCTION ////////////////////////////

function save() {
  localStorage.itemArray = itemArray;
  console.log('list arr:', itemArray);
  console.log('localStorage list:', localStorage.itemArray);
}

///////////////////////////// LOAD FUNCTION ////////////////////////////
function load() {
  if(localStorage.itemArray) {
    var item;
    for (var x = 0; x < itemArray.length; x++) {
      item = document.createElement('li');
      item.appendChild(document.createTextNode(itemArray[x]));
      orders.appendChild(item);
    }
  }
}
load();
console.log('list arr:', itemArray);
///////////////////////////// EVENT LISTENER ////////////////////////////
btn.addEventListener('click', handleProductSubmit);

//button to clear locaStorage in a code demo