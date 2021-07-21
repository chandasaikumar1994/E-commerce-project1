var MenuItems = document.getElementById("MenuItems");
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

function changeImage() {
  var x = (document.getElementById("myimage").src =
    "assets/images/product3.jpeg");
}

function myProduct() {
  var y = (document.getElementById("p1").innerHTML =
    "This is an e-commerce website");
}

function myProductSelection() {
  var z = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "you selected:" + z;
}

//Zoom in and Zoom out image

function bigImg() {
  document.getElementById("zoom").style.height = "200px";
  document.getElementById("zoom").style.width = "200px";
}

function normalImg() {
  document.getElementById("zoom").style.height = "100%";
  document.getElementById("zoom").style.width = "100%";
}

//Calculating the discounts of the products

function getPrice() {
  var val1 = Number(document.getElementById("price").value);
  var val2 = Number(document.getElementById("discount").value) / 100;
  var totalValue = val1 - val1 * val2;
  document.getElementById("total").value = totalValue.toFixed(2);
}

//This method is used to sort the products in the list
function mySort() {
  let products = [
    "Shoes",
    "Black Printed Shirt",
    "Socks",
    "Watch",
    "Blue Printed Shirt",
  ];
  products.sort();
  document.getElementById("hello").innerHTML = products;
}

//This method is used to delete the last products from the list
function myDel() {
  let products = [
    "Shoes",
    "Black Printed Shirt",
    "Socks",
    "Watch",
    "Blue Printed Shirt",
  ];
  products.pop();
  document.getElementById("delete").innerHTML = products;
}

//This method is used to add the last products into the list

function myAdd() {
  let products = [
    "Shoes",
    "Black Printed Shirt",
    "Socks",
    "Watch",
    "Blue Printed Shirt",
  ];
  products.push("Red Printed T-Shirt");
  document.getElementById("add").innerHTML = products;
}

//This method is used to delete the first product from the list
function myFirst() {
  let products = [
    "Shoes",
    "Black Printed Shirt",
    "Socks",
    "Watch",
    "Blue Printed Shirt",
  ];
  products.shift();
  document.getElementById("del1").innerHTML = products;
}

//This method is used to add the first product in the list

function mySecond() {
  let products = [
    "Shoes",
    "Black Printed Shirt",
    "Socks",
    "Watch",
    "Blue Printed Shirt",
  ];
  products.unshift("TonJeans");
  document.getElementById("add1").innerHTML = products;
}

//This method is used to add products at any position in the list
function myAddingProducts() {
  let products = [
    "Shoes",
    "Black Printed Shirt",
    "Socks",
    "Watch",
    "Blue Printed Shirt",
  ];
  products.splice(2, 0, "Branded Watch", "Laptop");
  document.getElementById("splice").innerHTML = products;
}

//This method is used to get the Selected products from the list
function mySelectedProducts() {
  let products = [
    "Shoes",
    "Black Printed Shirt",
    "Socks",
    "Watch",
    "Blue Printed Shirt",
  ];
  products.slice(1, 3);
  document.getElementById("slice").innerHTML = products;
}

function myFill() {
  const product = [
    "Shoes",
    "Black Printed Shirt",
    "Socks",
    "Watch",
    "Blue Printed Shirt",
  ];
  document.getElementById("hello1").innerHTML = product.fill("Branded Watch");
}

let categories = {
  item: "Branded Jeans",
  model: "TonJeans",
  Company: "LouisPhilpee",
  id: 5645,
};
//This method is used for displaying only keys of the product
let keys = Object.keys(categories);
console.log("keys", keys);

//This method is used for displaying only values of the product
let vals = Object.values(categories);
console.log("vals", vals);

//This method is used for displaying both values and keys of the product
let entries = Object.entries(categories);
console.log("Entries", entries);

const Brands = [
  { name: "watch", brand: "fasttrack", price: 50000 },
  { name: "shirt", brand: "Twills", price: 15000 },
  { name: "jerkin", brand: "WoodlandJackets", price: 30000 },
  { name: "t-shirts", brand: "TomHilfghier", price: 25000 },
  { name: "mobile", brand: "apple", price: 1500000 },
  { name: "laptop", brand: "apple", price: 45000 },
  { name: "wallclock", brand: "fasttrack", price: 5000 },
];

const ages = [16, 31, 25, 28, 29, 21, 45, 12, 10, 18, 19];
//forEach
//This method is used for operating every value in the product
Brands.forEach(function (brand) {
  console.log(brand);
});

//filter
//This method is used to filter the products as per requirement
const canDrink = ages.filter((age) => age >= 21);
console.log(canDrink);

const appleBrand = Brands.filter((Brands) => Brands.brand === "apple");
console.log(appleBrand);

//map
//This method is used for returing the new array of products
const agesSquare = ages.map((age) => Math.sqrt(age));
console.log(agesSquare);

const agesTimesTwo = ages.map((age) => age * 2);
console.log(agesTimesTwo);

//object seal method
//This method is used to seal the object i.e once it sealed the product cannot be deleted
const object1 = {
  item: "Red Printed Shirt",
};
Object.seal(object1);
object1.item = "Blue Printed Shirt";

console.log(object1.item);

//object.PrototypeOf

const prototype1 = {};
const object2 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object2) === prototype1);

//flat method

var array = ["Watch", "Shoes", ["Socks", "T-shirt"]];
var newarray = array.flat();
console.log("After flattening the array:  " + newarray);

//promises
let productsAvilable = true;
let fetchSomeData = new Promise((resolve, reject) => {
  if (productsAvilable) {
    resolve("Thankyou for product avaliablity");
  } else {
    reject("sorry for inconvinence");
  }
});

//consuming a promise
fetchSomeData
  .then((message) => {
    console.log("then:" + message);
  })
  .catch((meaasge) => {
    console.log("catch:" + meaasge);
  });

  //promises methods
  let product1 = Promise.resolve("The quality of the product was awesome")
  let product2 = 70;
  let product4 = Promise.reject('Rejected')
  let product3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'Subscribe for more products');
  });

  //promise.all
  //This method will executed all the products.
  //Promise.all([product1,product2,product3]).then((values)=>console.log(values));

   //promise.race
   //This method is used to execute what ever we pass first that product will be appear
   //Promise.race([product1,product2,product3]).then((values)=>console.log(values));

 //promise.allsettled
 //This method is used to display all wether it is resolved or rejected

 //Promise.allSettled([product1,product2,product3,product4]).then((values)=>console.log(values));
  
//promise.any
//This method is used to display which is resolved first
Promise.any([product1,product2,product3]).then((values)=>console.log(values));


