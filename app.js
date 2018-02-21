//we need a constructor function that take in the input from the index.html push to an array and store in local storage
//event listener that listens for add to cart button
//event handler that takes in the user input from the drop down and the quantity and pushes it to a constructor


//what global variables do we need to define
'use strict';


// declare an array that holds the images
var btn = document.getElementById('addToCart');//on index
var itemName = document.getElementById('product'); //on index
var itemQuantity = document.getElementByType('number'); //on index
var orders = document.getElementById('orders'); //on cart


//this declares but also checks if the array that will hold all the constructor info is there to begin with
if(localStorage.list) {
  var itemArray = localStorage.list.split(',');
} else {
  var itemArray = [];// this holds our constructor object instances based on user choice from index.html
}

//save the state of our application
//attach it to some sort of event listener
//grab our list and push the value of what of what we type in to localStorage
//every time you add an item your item will go to localStorage

function save() {
  itemArray.push(itemName.value);
  localStorage.itemArray = itemArray;
  console.log('list arr:', itemArray);
  console.log('localStorage list:', localStorage.itemArray);
}

//the create function will call a constructor function that will take the user input
function create() {
  var val = itemName.value;
  var item = document.createElement('li');
  item.appendChild(document.createTextNode(val));
  orders.appendChild(item);
  itemName.value = '';
}

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

function render() {
  save();
  create();
}
load();
btn.addEventListener('click', render);

