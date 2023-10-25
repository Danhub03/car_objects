// function Car(img, model, color, year, price) {
//     this.img = img;
//     this.model = model;
//     this.color = color;
//     this.year = year;
//     this.price = price;

    // this.render = function() {
    //     const image = document.createElement("img");
    //     image.src = this.img;
    //     image.style.width = "300px";
    //     image.style.height = "300px";

    //     document.querySelector(".car").appendChild(image);
    // };
// }

// let fiat = new Car("Fiat", "white", 2000, 5000000)

// fiat.render();
// let toyota = new Car("Toyata", "green", 2000, 5000000)
// let honda = new Car("Honda", "red", 2000, 5000000)
// let ford = new Car("Ford", "purple", 2000, 5000000)
// let volvo = new Car("Volvo", "blue", 2000, 5000000)
// let bmw = new Car("BMW", "black", 2000, 5000000)
// let volkswagen = new Car("Volkswagen", "yellow", 2000, 5000000)
// let tesla = new Car("Tesla", "grey", 2000, 5000000)
// let audi = new Car("Audi", "pink", 2000, 5000000)
// let lexus = new Car("Lexus", "lime", 2000, 5000000)


// console.log(fiat)

// const image = document.querySelector(".car");
// image.appendChild(document.createElement("img"));

// const image

// var bilar = [
//     {
//       "modell": "Fiat 500",
//       "färg": "Vit",
//       "pris": 500000,
//       "årsmodell": 2000
//     },
//     {
//       "modell": "Volvo V70",
//       "färg": "Blå",
//       "pris": 1000000,
//       "årsmodell": 2023
//     },
//     {
//       "modell": "BMW 3-serie",
//       "färg": "Svart",
//       "pris": 2000000,
//       "årsmodell": 2022
//     }
//   ];
  
//   function visaAnnons() {
//     for (var i = 0; i < bilar.length; i++) {
//       var bil = bilar[i];
//       document.querySelector("ul").innerHTML += "<h2>" + bil.färg + "</h2>";
//     }
//   }
  
//   window.onload = visaAnnons;
  
// class Bil {
//     constructor(modell, färg, pris, årsmodell) {
//       this.modell = modell;
//       this.färg = färg;
//       this.pris = pris;
//       this.årsmodell = årsmodell;
//     }
// }
  
// var bilar = [
//     new Bil("Fiat 500", "Vit", 500000, 2000),
//     new Bil("Volvo V70", "Blå", 1000000, 2023),
//     new Bil("BMW 3-serie", "Svart", 2000000, 2022)
// ];
  
// function visaAnnons() {
//     for (var i = 0; i < bilar.length; i++) {
//       var bil = bilar[i];
//       var li = document.createElement("li");
//       li.innerHTML += bil;
//       document.querySelector("#bilar").appendChild(li);
//     }
// }
  
// visaAnnons()
// window.onload = visaAnnons;

// class Bil {
//     constructor(modell, färg, pris, årsmodell) {
//       this.modell = modell;
//       this.färg = färg;
//       this.pris = pris;
//       this.årsmodell = årsmodell;
//     }
//   }
  
//   var bilar = [
//     new Bil("Fiat 500", "Vit", 500000, 2000),
//     new Bil("Volvo V70", "Blå", 1000000, 2023),
//     new Bil("BMW 3-serie", "Svart", 2000000, 2022)
//   ];
  
//   function visaAnnons() {
//     for (var i = 0; i < bilar.length; i++) {
//       var bil = bilar[i];
//       var li = document.createElement("li");
//       li.innerHTML = bil.modell;
//       document.querySelector("#bilar").appendChild(li);
//     }
//   }
  
//   window.onload = visaAnnons;

// Skapa en konstruktör för bilobjekten
// function Car(make, img, price, model, year) {
//     this.make = make;
//     this.img = img;
//     this.price = price;
//     this.model = model;
//     this.year = year;
// }

class Car {
    constructor (make,img,price,modell, year) {
        this.make = make;
        this.img = img;
        this.price = price;
        this.model = modell;
        this.year = year;
    }
}



// Skapa 10 bilobjekt
var cars = [];
for (var i = 1; i <= 1; i++) {
    var car1 = new Car("Fiat ", "./img/fiat.jpg", 25000 + i * 1000, "Modell " + i, 2020 + i);
    var car2 = new Car("BMW ", "./img/fiat.jpg", 25000 + i * 1000, "Modell " + i, 2020 + i);
    var car3 = new Car("Volvo ", "fiat2.jpg", 25000 + i * 1000, "Modell " + i, 2020 + i);
    cars.push(car1, car2, car3);
}

// Visa bilobjekten i HTML
var carListDiv = document.getElementById("carList");

for (var i = 0; i < cars.length; i++) {
    var car = cars[i];
    var carDiv = document.createElement("div");
    carDiv.innerHTML = `
        <h2 class= "text">${car.make}</h2>
        <img src="${car.img}" alt="${car.make}">
        <p>Pris: ${car.price} kr</p>
        <p>Modell: ${car.model}</p>
        <p>År: ${car.year}</p>
        
        
    `;
    carListDiv.appendChild(carDiv);
}
