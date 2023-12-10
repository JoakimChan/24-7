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
    const balconyFilter = document.getElementById('Balcony').value;
    const outdoorsFilter = document.getElementById('Outdoors').value;
    const floorFilter = document.getElementById('Floor').value;
    const elevatorFilter = document.getElementById('Elevator').value;
    const yearOfBuildingFilter = document.getElementById('YearOfBuilding').value;
    const storehouseFilter = document.getElementById('Storehouse').value;
    const parkingLotFilter = document.getElementById('ParkingLot').value;
    const courtyardFilter = document.getElementById('Courtyard').value;

    // Filtrera husen baserat på de angivna kriterierna
    const filteredHouses = houses.filter((house) => {
      const matchesType = typeFilter ? house.type === typeFilter : true;
      const matchesPrice = priceFilter ? house.price <= parseInt(priceFilter, 10) : true;
      const matchesRooms = roomsFilter ? house.rooms >= parseInt(roomsFilter, 10) : true;
      const matchesArea = areaFilter ? house.area >= parseInt(areaFilter, 10) : true;
      const matchesBalcony = balconyFilter ? house.Balcony === balconyFilter : true;
      const matchesOutdoors = outdoorsFilter ? house.Outdoors === outdoorsFilter : true;
      const matchesFloor = floorFilter ? house.Floor === floorFilter : true;
      const matchesElevator = elevatorFilter ? house.Elevator === elevatorFilter : true;
      const matchesYearOfBuilding = yearOfBuildingFilter ? house.YearOfBuilding === parseInt(yearOfBuildingFilter, 10) : true;
      const matchesStorehouse = storehouseFilter ? house.Storehouse === storehouseFilter : true;
      const matchesParkingLot = parkingLotFilter ? house.ParkingLot === parkingLotFilter : true;
      const matchesCourtyard = courtyardFilter ? house.Courtyard === courtyardFilter : true;

      return (
        matchesType &&
        matchesPrice &&
        matchesRooms &&
        matchesArea &&
        matchesBalcony &&
        matchesOutdoors &&
        matchesFloor &&
        matchesElevator &&
        matchesYearOfBuilding &&
        matchesStorehouse &&
        matchesParkingLot &&
        matchesCourtyard
      );
    });

    // Visa de filtrerade husen
    displayHouses(filteredHouses);
  });
});
