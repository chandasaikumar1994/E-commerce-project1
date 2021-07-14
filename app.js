     var MenuItems = document.getElementById("MenuItems");
      MenuItems.style.maxHeight = "0px";
      function menutoggle() {
        if (MenuItems.style.maxHeight == "0px") {
          MenuItems.style.maxHeight = "200px";
        } else {
          MenuItems.style.maxHeight = "0px";
        }
      }

      function changeImage() {
        var x = (document.getElementById("myimage").src =
          "assets/images/product-3.jpg");
      }

      function myFunction() {
        var y = (document.getElementById("p1").innerHTML =
          "This is an e-commerce website");
      }

      function mySelection() {
        var z = document.getElementById("mySelect").value;
        document.getElementById("demo").innerHTML = "you selected:" + z;
      }

      function bigImg(x) {
        x.style.height = "500px";
        x.style.width = "500px";
      }

      function normalImg(x) {
        x.style.height = "100%";
        x.style.width = "100%";
      }

      //Calculating the discounts of the products
      function getPrice() {
        var val1 = Number(document.getElementById("price").value);
        var val2 = Number(document.getElementById("discount").value) / 100;
        var totalValue = val1 - val1 * val2;
        document.getElementById("total").value = totalValue.toFixed(2);
      }

      let products = [
        "Shoes",
        "Black Printed Shirt",
        "Socks",
        "Watch",
        "Blue Printed Shirt",
      ];
      //This method is used to sort the products in the list
      function mySort() {
        products.sort();
        document.getElementById("hello").innerHTML = products;
      }

      //This method is used to delete the last products from the list
      function myDel() {
        products.pop();
        document.getElementById("delete").innerHTML = products;
      }

      //This method is used to add the last products into the list

      function myAdd() {
        products.push("Red Printed T-Shirt");
        document.getElementById("add").innerHTML = products;
      }

      //This method is used to delete the first product from the list
      function myFirst() {
        products.shift();
        document.getElementById("del1").innerHTML = products;
      }

      //This method is used to add the first product in the list

      function mySecond() {
        products.unshift("TonJeans");
        document.getElementById("add1").innerHTML = products;
      }

      //This method is used to add products at any position in the list
      function myArray() {
        products.splice(2, 0, "Branded Watch", "Laptop");
        document.getElementById("splice").innerHTML = products;
      }

      //This method is used to get the Selected products from the list
      function myDel1() {
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
        document.getElementById("hello1").innerHTML =
          product.fill("Branded Watch");
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
    