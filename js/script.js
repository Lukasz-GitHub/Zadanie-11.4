'use strict';
// Phones
function Phone(brand, displaySize, camera, price, color) {
    this.brand = brand;
    this.displaySize = displaySize;
    this.camera = camera;
    this.color = color;
    this.price = price;
}

Phone.prototype.printInfo = function () {
    document.write('The phone brand is ' + this.brand + ' with ' + this.displaySize + ' inch display size and ' + this.camera + 'Mpx camera.<br>Color is ' + this.color + ' and the price is only ' + this.price + ' PLN.<br><br>');
}

var SamsungGalaxyS6 = new Phone('Samsung', 5.5, 16, 1999, 'dark blue');
var OnePlusOne = new Phone('OnePlus', 5.2, 13, 1850, 'white');
var iPhineS8 = new Phone('iPhone', 5.0, 21, 2899, 'black');

SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
iPhineS8.printInfo();

// Book
function Book(name, author, publicationData, pages, isbn) {
    this.name = name;
    this.author = author;
    this.publicationData = publicationData;
    this.pages = pages;
    this.isbn = isbn;
}

Book.prototype.printInfo = function() {
    console.log('The book ' + this.name + ' was written by ' + this.author + ' and published in ' + this.publicationData + 'r. This book have ' + this.pages + ' pages, ISBN: ' + this.isbn +'.');
}

var Battlefield = new Book('Battlefield', 'Joe Hopkins', '03.03.2017', 397, 9788324167203);
var HideAndSeek = new Book('Hide and Seek', 'David Climber', '21.05.1998', 310, 9877712456821)

Battlefield.printInfo();
HideAndSeek.printInfo();

// Car
function Car(name, price) {
    this.name = name;
    this.price = price;
    this.logModel =function() {
        console.log(this.name + ' cost ' + this.price + '$.');
    }
}

var Fiat = new Car('Fiat', 22000);
var Skoda = new Car('Skoda', 35000);

Skoda.logModel();