'use strict';

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
}

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine', 'img/wine-glass.jpg');

var btn = document.getElementById('addToCart');
var input = document.getElementById('product');
var cartList = document.getElementById('cartList');
var qty = document.getElementsByName('quantity');

//LOCAL STORAGE
if(localStorage.list) {
  var list = localStorage.list.split(',');
} else {
  var list = [];
}

if(localStorage.listQty){
  var listQty = localStorage.listQty.split(',');
} else {
  var listQty = [];
}

function save(){
  list.push(input.value);
  localStorage.list = list;
  listQty.push(qty.value);
  localStorage.listQty = listQty;
  console.log('list array:', list);
  console.log('localStorage List:', localStorage.list);
  console.log('list Quantity:', listQty);
  console.log('localStorage List Quantity:', localStorage.listQty);
}

function create(){
  var val = input.value;
  var item = document.createElement('li');
  console.log(input.value);

  item.appendChild(document.createTextNode(val));
  cartList.appendChild(item);
  input.value = '';
}

function load(){
  if(localStorage.list) {
    var item;
    for(var i =0; i < list.length; i++) {
      item.appendChild(document.createTextNode(list[i]));
      cartList.appendChild(item);
    }
  }
}
function render() {
  save();
  create();
}

load();

btn.addEventListener('click', render);