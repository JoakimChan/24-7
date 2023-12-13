//ska kunna filtrera valen av önskad bostad
import { houses } from './houses.js';
import { displayHouses } from './buy.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sökBostad').addEventListener('click', (e) => {
    e.preventDefault();

    // Hämta filtervärden från formuläret
    const typeFilter = document.querySelector('input[name="väljBostad"]:checked')?.value;
    const priceFilter = document.getElementById('price').value;
    const roomsFilter = document.getElementById('rooms').value;
    const areaFilter = document.getElementById('area').value;
    const balconyFilter = document.getElementById('balcony').value;
    const floorFilter = document.getElementById('floor').value;
    const elevatorFilter = document.getElementById('elevator').value;
    const yearFilter = document.getElementById('year').value;
    const storehouseFilter = document.getElementById('storehouse').value;
    const parkingFilter = document.getElementById('parking').value;
    const gardenFilter = document.getElementById('garden').value;

    // Filtrera husen baserat på de angivna kriterierna
    const filteredHouses = houses.filter((house) => {
      const matchesType = typeFilter ? house.type === typeFilter : true;
      const matchesPrice = priceFilter ? house.price <= parseInt(priceFilter, 10) : true;
      const matchesRooms = roomsFilter ? house.rooms >= parseInt(roomsFilter, 10) : true;
      const matchesArea = areaFilter ? house.area >= parseInt(areaFilter, 10) : true;
      const matchesBalcony = balconyFilter ? house.balcony === balconyFilter : true;
      const matchesFloor = floorFilter ? house.floor === floorFilter : true;
      const matchesElevator = elevatorFilter ? house.elevator === elevatorFilter : true;
      const matchesYear = yearFilter ? house.year === parseInt(yearFilter, 10) : true;
      const matchesStorehouse = storehouseFilter ? house.storehouse === storehouseFilter : true;
      const matchesParking = parkingFilter ? house.parking === parkingFilter : true;
      const matchesGarden = gardenFilter ? house.garden === gardenFilter : true;

      return (
        matchesType &&
        matchesPrice &&
        matchesRooms &&
        matchesArea &&
        matchesBalcony &&
        matchesFloor &&
        matchesElevator &&
        matchesYear &&
        matchesStorehouse &&
        matchesParking &&
        matchesGarden
      );
    });

    // Visa de filtrerade husen
    displayHouses(filteredHouses);
  });
});


