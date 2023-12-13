//för att sortera bostäder beroende på pris, år-och annat
import houses from "houses.json"

/*
const houses = [
  {
    "id": 1,
    "type": "Hus",
    "address": "Topvägen 41",
    "price": 1000000,
    "rooms": 4,
    "area": 130,
    "balcony": "Balkong",
    "floor": 3,
    "elevator": "Ingen hiss",
    "year": 2022,
    "storehouse": "Förråd",
    "parking": "Garage",
    "garden": "Tomt",
    "firstName": "Robert",
    "lastName": "Eriksson",
    "email": "RobertEriks@gmail",
    "phone": "0789456123"
  },
  {
    "id": 2,
    "type": "Lägenhet",
    "address": "Kunskapsvägen 50",
    "price": 750000,
    "rooms": 2,
    "area": 75,
    "balcony": "Balkong och uteplats",
    "floor": 6,
    "elevator": "Hiss",
    "year": 1999,
    "storehouse": "Förråd",
    "parking": "Parkering",
    "garden": "Ingen innergård",
    "firstName": "Emilia",
    "lastName": "Sandberg",
    "email": "EmiliaSand@gmail.com",
    "phone": "0987654321"
  },
  {
    "id": 3,
    "type": "Villa",
    "address": "Villaville kulla 2",
    "price": 1500000,
    "rooms": 5,
    "area": 180,
    "balcony": "Balkong och uteplats",
    "floor": 2,
    "elevator": "Ingen hiss",
    "year": 1980,
    "storehouse": "Förråd",
    "parking": "Parkering",
    "garden": "Tomt",
    "firstName": "Bosse",
    "lastName": "Johnsson",
    "email": "BosseJ@gmail.com",
    "phone": "0192837465"
  },
  {
    "id": 4,
    "type": "Hus",
    "address": "Mariegatan 75",
    "price": 900000,
    "rooms": 3,
    "area": 90,
    "balcony": "Ingen balkong eller uteplats",
    "floor": 1,
    "elevator": "Ingen hiss",
    "year": 1890,
    "storehouse": "Jordkälla",
    "parking": "Parkering",
    "garden": "Tomt",
    "firstName": "Wilma",
    "lastName": "Dalsberg",
    "email": "WilmaDal@gmail.com",
    "phone": "0564738921"
  },
  {
    "id": 5,
    "type": "Lägenhet",
    "address": "Torevägen 58",
    "price": 1000000,
    "rooms": 4,
    "area": 110,
    "balcony": "Balkong och uteplats",
    "floor": 3,
    "elevator": "Ingen hiss",
    "year": 1960,
    "storehouse": "Förråd",
    "parking": "Ingen parkering",
    "garden": "Ingen innergård",
    "firstName": "Niklas",
    "lastName": "Borg",
    "email": "NiklasB@gmail.com",
    "phone": "0912873465"
  },
  {
    "id": 6,
    "type": "Villa",
    "address": "Kalasvägen 23",
    "price": 1100000,
    "rooms": 4,
    "area": 140,
    "balcony": "Balkong",
    "floor": 3,
    "elevator": "Ingen hiss",
    "year": 1970,
    "storehouse": "Förråd",
    "parking": "Parkering",
    "garden": "Tomt",
    "firstName": "Frida",
    "lastName": "Fredsson",
    "email": "FridaFred@gmail.com",
    "phone": "0897645324"
  },
  {
    "id": 7,
    "type": "Hus",
    "address": "Elvägen 1",
    "price": 1700000,
    "rooms": 6,
    "area": 190,
    "balcony": "Balkong och uteplats",
    "floor": 2,
    "elevator": "Ingen hiss",
    "year": 2000,
    "storehouse": "Förråd",
    "parking": "Garage",
    "garden": "Tomt",
    "firstName": "Melanie",
    "lastName": "Winter",
    "email": "MelanieW@gmail.com",
    "phone": "0897657451"
  },
  {
    "id": 8,
    "type": "Lägenhet",
    "address": "Technogatan 30",
    "price": 1000000,
    "rooms": 3,
    "area": 90,
    "balcony": "Balkong och uteplats",
    "floor": 7,
    "elevator": "Hiss",
    "year": 2023,
    "storehouse": "Förråd",
    "parking": "Garage",
    "garden": "Ingen innergård",
    "firstName": "Ylva",
    "lastName": "Danielsson",
    "email": "YlvaDan@gmail.com",
    "phone": "0610293847"
  },
  {
    "id": 9,
    "type": "Villa",
    "address": "Lockelookvägen 53",
    "price": 1400000,
    "rooms": 4,
    "area": 110,
    "balcony": "Uteplats",
    "floor": 1,
    "elevator": "Ingen hiss",
    "year": 1860,
    "storehouse": "Jordkälla",
    "parking": "Parkering",
    "garden": "Tomt",
    "firstName": "Mikael",
    "lastName": "Stenqvist",
    "email": "MikaelSten@gmail.com",
    "phone": "0812654372"
  },
  {
    "id": 10,
    "type": "Hus",
    "address": "Triptraptrullgatan 10",
    "price": 800000,
    "rooms": 3,
    "area": 80,
    "balcony": "Ingen balkong eller uteplats",
    "floor": 1,
    "elevator": "Ingen hiss",
    "year": 1968,
    "storehouse": "Förråd",
    "parking": "Ingen parkering",
    "garden": "Tomt",
    "firstName": "Diana",
    "lastName": "Björnsson",
    "email": "DianaBjorn@gmail.com",
    "phone": "0196574823"
  },
  {
    "id": 11,
    "type": "Lägenhet",
    "address": "Skyrocketvägen 48",
    "price": 950000,
    "rooms": 3,
    "area": 79,
    "balcony": "Uteplats",
    "floor": 4,
    "elevator": "Hiss",
    "year": 2015,
    "storehouse": "Förråd",
    "parking": "Parkering",
    "garden": "Ingen innergård",
    "firstName": "Patricia",
    "lastName": "Ingvarsson",
    "email": "PatriciaIngvar@gmail.com",
    "phone": "0115463728"
  },
  {
    "id": 12,
    "type": "Villa",
    "address": "Booleangatan 55",
    "price": 1200000,
    "rooms": 4,
    "area": 100,
    "balcony": "Balkong",
    "floor": 2,
    "elevator": "Ingen hiss",
    "year": 2017,
    "storehouse": "Förråd",
    "parking": "Garage",
    "garden": "Tomt",
    "firstName": "Rudolf",
    "lastName": "Åkersdal",
    "email": "RudolfAker@gmail.com",
    "phone": "0345621874"
  },
  {
    "id": 13,
    "type": "Hus",
    "address": "Bergodalbanevägen 40",
    "price": 1500000,
    "rooms": 4,
    "area": 130,
    "balcony": "Balkong",
    "floor": 3,
    "elevator": "Hiss",
    "year": 2020,
    "storehouse": "Förråd",
    "parking": "Garage",
    "garden": "Tomt",
    "firstName": "Gloria",
    "lastName": "Lindsten",
    "email": "GloriaLind@gmail.com",
    "phone": "0123987551"
  },
  {
    "id": 14,
    "type": "Lägenhet",
    "address": "Muffingatan 21",
    "price": 650000,
    "rooms": 2,
    "area": 55,
    "balcony": "Uteplats",
    "floor": 2,
    "elevator": "Ingen hiss",
    "year": 1888,
    "storehouse": "Jordkälla",
    "parking": "Ingen parkering",
    "garden": "Ingen innergård",
    "firstName": "Maja",
    "lastName": "Årsdal",
    "email": "MajaArsdal@gmail.com",
    "phone": "0224435678"
  },
  {
    "id": 15,
    "type": "Villa",
    "address": "Dragondalsgatan",
    "price": 1200000,
    "rooms": 3,
    "area": 100,
    "balcony": "Balkong",
    "floor": 1,
    "elevator": "Ingen hiss",
    "year": 2003,
    "storehouse": "Förråd",
    "parking": "Parkering",
    "garden": "Tomt",
    "firstName": "Gunnar",
    "lastName": "Svensson",
    "email": "GunnarSven@gmail.com",
    "phone": "0996544372"
  },
  {
    "id": 16,
    "type": "Hus",
    "address": "Krokodilvägen 39",
    "price": 900000,
    "rooms": 3,
    "area": 90,
    "balcony": "Ingen balkong eller uteplats",
    "floor": 1,
    "elevator": "Ingen hiss",
    "year": 2005,
    "storehouse": "Förråd",
    "parking": "Parkering",
    "garden": "Tomt",
    "firstName": "Connor",
    "lastName": "Carson",
    "email": "ConnorCar@gmail.com",
    "phone": "0779988542"
  },
  {
    "id": 17,
    "type": "Lägenhet",
    "address": "Spacevägen",
    "price": 900000,
    "rooms": 3,
    "area": 87,
    "balcony": "Uteplats",
    "floor": 1,
    "elevator": "Ingen hiss",
    "year": 1970,
    "storehouse": "Inget förråd",
    "parking": "Ingen parkering",
    "garden": "Ingen innergård",
    "firstName": "Ida",
    "lastName": "Vals",
    "email": "IdaVals@gmail.com",
    "phone": "0797865443"
  },
  {
    "id": 18,
    "type": "Villa",
    "address": "Programmeringsgatan 37",
    "price": 1500000,
    "rooms": 5,
    "area": 135,
    "balcony": "Balkong",
    "floor": 4,
    "elevator": "Hiss",
    "year": 2023,
    "storehouse": "Förråd",
    "parking": "Garage",
    "garden": "Tomt",
    "firstName": "Olly",
    "lastName": "Smith",
    "email": "OllySmith@gmail.com",
    "phone": "0897625364"
  },
  {
    "id": 19,
    "type": "Hus",
    "address": "Fridofröjdvägen 50",
    "price": 1300000,
    "rooms": 4,
    "area": 115,
    "balcony": "Ingen balkong eller uteplats",
    "floor": 2,
    "elevator": "Ingen hiss",
    "year": 1970,
    "storehouse": "Inget förråd",
    "parking": "Ingen parkering",
    "garden": "Tomt",
    "firstName": "Molly",
    "lastName": "Wisdom",
    "email": "MollyWisdom@gmail.com",
    "phone": "0675645344"
  },
  {
    "id": 20,
    "type": "Lägenhet",
    "address": "Grafikvägen 25",
    "price": 1000000,
    "rooms": 3,
    "area": 82,
    "balcony": "Uteplats",
    "floor": 5,
    "elevator": "Ingen hiss",
    "year": 1985,
    "storehouse": "Förråd",
    "parking": "Ingen parkering",
    "garden": "Ingen innergård",
    "firstName": "Martin",
    "lastName": "Ohlsson",
    "email": "MartinOhlsson@gmail.com",
    "phone": "0991123458"
  }
];
*/




//nyaste till äldsta annonsen 
function compareByFormularN(a, b) {
  return b.id - a.id;
}

houses.sort(compareByFormularN);

console.log(houses);




/*
//äldsta till nyaste annonsen 
function compareByFormularO(a, b) {
  return a.id - b.id;
}

houses.sort(compareByFormularO);

console.log(houses);
*/





/*
// ----A compare function that compares the price --- billigaste till dyraste bostaden
function compareByPriceC(a, b) {
  return a.price - b.price;
}

// Sort the array by price in ascending order
houses.sort(compareByPriceC);

// Output the sorted array
console.log(houses);
*/



/*
//dyraste till billigaste bostaden 
function compareByPriceE(a, b) {
  return b.price - a.price;
}

houses.sort(compareByPriceE);

console.log(houses);
*/



/*
//----A compare function that compares the area of building -- minsta till största area
function compareByAreaS(a, b) {
  return a.area - b.area;
}

houses.sort(compareByAreaS);

console.log(houses);
*/

/*
// största till minsta area
function compareByAreaB(a, b) {
  return b.area - a.area;
}

houses.sort(compareByAreaB);

console.log(houses);
*/


/*
//----A compare function that compares the year of building -- nyaste till äldsta bostaden 
function compareByYearN(a, b) {
  return b.year - a.year;
}

houses.sort(compareByYearN);

console.log(houses);
*/


/*
// äldsta till nyaste bostaden 
function compareByYearO(a, b) {
  return a.year - b.year;  
}

// Sort the array by year in ascending order
houses.sort(compareByYearO);

// Output the sorted array 
console.log(houses);
*/

