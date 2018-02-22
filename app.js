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

////cart constructor function. moved outside of handler
function Constructor(productName, productQuantity) {
  this.productName = productName;
  this.productQuantity = productQuantity;
  itemArray.push(this);
  console.log(itemArray);
}
///////////////////////////// HANDLER FUNCTION ////////////////////////////
function handleProductSubmit(event) {
  console.log(event);
  var itemName = document.getElementById('product').value; //on index
  var itemQuantity = parseInt(document.getElementsById('quantity').value); //on index
  console.log(itemName);
  console.log(itemQuantity);

  new Constructor(itemName, itemQuantity);//moved the push to the constructor outside the handler


  save();
  console.log(itemName);
  create();
  function create() {// dont want in handler // two handler one for adding to cart only storage and the other to switch to the other page adn appendchild stuff FROM the locale storage
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
      orders.appendChild(item);// make sure local storage
    }
  }
}
load();
console.log('list arr:', itemArray);
///////////////////////////// EVENT LISTENER ////////////////////////////
btn.addEventListener('click', handleProductSubmit);

//button to clear locaStorage in a code demo