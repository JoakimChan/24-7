export default async function buy() {
  
  return $(`
<form>
  <section class="FiltreraBostad">
    <fieldset>
      <legend>Filtrera sökning:</legend>
      <div>
        <input type="radio" id="Hus" name="väljBostad" value="Hus" />
        <label for="Hus">Hus</label>

        <input type="radio" id="Lägenhet" name="väljBostad" value="Lägenhet" />
        <label for="Lägenhet">Lägenhet</label>

        <input type="radio" id="Villa" name="väljBostad" value="Villa" />
        <label for="Villa">Villa</label>
        <br><br>

          <label for="prisBostad">Utgångspris: </label>

          <input type="text" id="price" name="price" minlength="6" size="10" />
          <br><br>

            <label for="rumBostad">Antal rum: </label>

            <select name="rum" id="rooms">
              <option value="">--välj ett alternativ--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select><br><br>

              <label for="areaBostad">Area (kvm): </label>

              <input type="text" id="area" name="area" minlength="2" maxlength="3" size="10" />
              <br><br>

                <label for="balkongBostad">Balkong: </label>

                <select name="BalkongBostad" id="Balcony">
                  <option value="">--välj ett alternativ--</option>
                  <option value="Balkong">Balkong</option>
                  <option value="Ingen balkong">Ingen balkong</option>
                </select><br><br>

                  <label for="uteplatsBostad">Uteplats: </label>

                  <select name="Uteplats" id="Outdoors">
                    <option value="">--välj ett alternativ--</option>
                    <option value="Uteplats">Uteplats</option>
                    <option value="Ingen uteplats">Ingen uteplats</option>
                  </select><br><br>

                    <label for="våningBostad">Våning/våningar: </label>

                    <select name="Våning" id="Floor">
                      <option value="">--välj ett alternativ--</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select><br><br>

                      <label for="hissBostad">Hiss: </label>

                      <select name="Hiss" id="Elevator">
                        <option value="">--välj ett alternativ--</option>
                        <option value="Hiss">Hiss</option>
                        <option value="Ingen hiss">Ingen hiss</option>
                      </select><br><br>

                        <label for="areaBostad">Byggnadsår: </label>

                        <input type="text" id="YearOfBuilding" name="YearOfBuilding" minlength="4" maxlength="4" size="10" />
                        <br><br>

                          <label for="förrådBostad">Förråd/jordkälla: </label>

                          <select name="Förråd" id="Storehouse">
                            <option value="">--välj ett alternativ--</option>
                            <option value="Förråd">Förråd</option>
                            <option value="Inget förråd">Inget förråd</option>
                            <option value="Jordkälla">Jordkälla</option>
                          </select><br><br>

                            <label for="parkeringBostad">Parkering/garage: </label>

                            <select name="Parkering" id="ParkingLot">
                              <option value="">--välj ett alternativ--</option>
                              <option value="Parkering">Parkering</option>
                              <option value="Ingen parkering">Ingen parkering</option>
                              <option value="Garage">Garage</option>
                            </select><br><br>

                              <label for="innergårdBostad">Innergård/tomt: </label>

                              <select name="Innergård" id="Courtyard">
                                <option value="">--välj ett alternativ--</option>
                                <option value="Innergård">Innergård</option>
                                <option value="Ingen innergård">Ingen innergård</option>
                                <option value="Tomt">Tomt</option>
                              </select><br><br>
                              </div>

                                <div>
                                  <button type="submit" id="sökBostad">Sök</button>
                                </div>

                              </fieldset>
                            </section>
                            </form>

                            <div id="hus-container"></div>
                            <script type="module" src="buy.js"></script>
                            <script type="module" src="filter.js"></script>

//import * as serRequest from './server-request.js';

let isBuyFunctionExecuted = false;

<div id="result"></div>

        `)
}
/*
function displayRadioValue() {
  var ele = document.getElementsByName('väljBostad');

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      document.getElementById("result").innerHTML
        = ele[i].value;
  }
}

//ger value till varje element
document.getElementById("bostad").addEventListener("submit", function (event) {
  event.preventDefault();
  let price = document.getElementById("price").value;
  let rooms = document.getElementById("rooms").value;
  let area = document.getElementById("area").value;
  let Balcony = document.getElementById("Balcony").value;
  let Outdoors = document.getElementById("Outdoors").value;
  let Floor = document.getElementById("Floor").value;
  let Elevator = document.getElementById("Elevator").value;
  let YearOfBuilding = document.getElementById("YearOfBuilding").value;
  let Storehouse = document.getElementById("Storehouse").value;
  let ParkingLot = document.getElementById("ParkingLot").value;
  let Courtyard = document.getElementById("Courtyard").value;
  alert(price, rooms, area, Balcony, Outdoors, Floor, Elevator, YearOfBuilding, Storehouse, ParkingLot, Courtyard);
});
*/
/*
export default function buy() {
  if (isBuyFunctionExecuted) {
    return;
  }

  isBuyFunctionExecuted = true;

  try {
    // Hämta husdata från JSON-fil
    fetch('./houses.json')
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(function (data) {
        // Skapa en behållare för husdata
        let husContainer = $('<div id="köpText"><h1>Här kan du köpa bostad</h1><div class="hus-container"></div></div>');

        // Loopa igenom husdata och skapa element för varje hus
        data.houses.forEach(function (hus) {
          let imagePath = hus.image || 'home page house.jpg'; // enkel bild bara för att ha en yta att klicka på ändra denna

          // Skapa husinformationselement
          let husInfo = $(`<div class="hus-info" data-id="${hus.id}" style="position: relative;">
                              <img src="${imagePath}" alt="Bild av ${hus.type}" class="hus-bild" style="width:200px;height:200px;cursor:pointer;">
                              <div class="buttons-container" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: none; z-index: 1;">
                                <button class="btn btn-warning redigera-btn">Redigera</button>
                                <button class="btn btn-danger radera-btn">Radera</button>
                              </div>
                           </div>`);

          // Händelser för att visa knapparna när musen hoverar
          let buttonsContainer = husInfo.find('.buttons-container');
          husInfo.on('mouseenter', function () {
            buttonsContainer.show();
          }).on('mouseleave', function () {
            buttonsContainer.hide();
          });

          // Händelse för att visa detaljerad information om huset vid klick
          let husBild = husInfo.find('.hus-bild');
          husBild.on('click', function () {
            let modalContent = `<p>Utgångspris: ${hus.price}</p>
                                <p>Antal rum: ${hus.rooms}</p>
                                <p>Boarea: ${hus.area}</p>`;
            showModal(hus.address, modalContent);

            let visaIntresseBtn = $('<button class="btn btn-primary visa-intresse-btn">Visa Intresse</button>');
            visaIntresseBtn.on('click', function () {
              showInterestModal();
            });

            // Lägg till "Visa Intresse" -knappen i modalen
            $('.modal-body').append(visaIntresseBtn);
          });

          // Händelser för Redigera och Radera-knappar
          let redigeraButton = husInfo.find('.redigera-btn');
          let raderaButton = husInfo.find('.radera-btn');
          redigeraButton.on('click', function (event) {
            event.stopPropagation();
            showEditModal(hus);
          });
          raderaButton.on('click', function (event) {
            event.stopPropagation();
            deleteHouse(hus);
          });

          // Lägg till husinformationselement i behållaren
          husContainer.find('.hus-container').append(husInfo);
        });

        // Lägg till behållaren i kroppen av sidan
        $('body').append(husContainer);
      })
      .catch(function (error) {
        console.error('Fel vid hämtning av husdata:', error);
      });
  } catch (error) {
    console.error('Ett fel inträffade:', error);
  }

}

// Test visa ett modal fönster med "hus information" vid mus klick på bild 
function showModal(title, content, hus) {
  let modalContainer = $('<div class="modal-container"><div class="modal"><div class="modal-content"><span class="close-modal" onclick="closeModal()">&times;</span><div class="modal-body"><h2>' + title + '</h2>' + content + '</div></div></div></div>');
  modalContainer.css('display', 'flex');
  modalContainer.css('align-items', 'center');
  modalContainer.css('justify-content', 'center');

  let visaIntresseBtn = $('<button class="btn btn-primary visa-intresse-btn">Visa Intresse</button>');
  visaIntresseBtn.on('click', function () {
    showInterestModal(hus);
  });

  modalContainer.find('.modal-body').append(visaIntresseBtn);

  $('body').append(modalContainer);

  let closeModalButton = modalContainer.find('.close-modal');
  closeModalButton.on('click', function () {
    closeModal();
  });
}

// Test visa ett modal fönstret för "visa intresse" för ett hus
function showInterestModal() {
  let modalContent = '<h3>\
    <form id="interestForm">\
      <label for="message">Meddelande:</label><br>\
      <textarea id="message" name="message" rows="4" cols="50"></textarea><br>\
      <label for="email">Din E-post:</label><br>\
      <input type="email" id="email" name="email"><br>\
      <input type="submit" value="Skicka Meddelande">\
    </form>';

  // Visa en modal för att visa intresse med formulär
  showModal('Visa Intresse', modalContent);

  let interestForm = $('#interestForm');

  // Hantera formulärsubmission för att visa intresse
  interestForm.on('submit', function (e) {
    e.preventDefault();
    // Logik för att hantera och skicka meddelandet
    closeModal();
  });
}

// Stäng modalen fönstret 
function closeModal() {
  let modalContainer = $('.modal-container');
  if (modalContainer.length) {
    modalContainer.hide().remove();
  }
}

// Funktion för att hämta filtrerade hus information via JSON Serverns API 
function getFilteredHouses(filters) {
  let query = Object.keys(filters)
    .filter(key => filters[key] !== '')
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(filters[key])}`)
    .join('&');
  return fetch(`http://localhost:3000/houses?${query}`)
    .then(response => response.json())
    .catch(error => console.error('Fel vid hämtning av filtrerade hus:', error));
}

// Lägg till lyssnare för filterformuläret för att uppdatera sidan med filtrerade hus
$(document).on('submit', '#filterForm', function (e) {
  e.preventDefault();
  const filters = {
    type: $('#typeFilter').val(),
    price: $('#priceFilter').val(),
    rooms: $('#roomsFilter').val(),
    area: $('#areaFilter').val()
  };
  getFilteredHouses(filters).then(houses => {
    updateHousesDisplay(houses);
  });
});

// Funktion för att uppdatera visning av hus när filter används """ Se över kod består till stor del av buy funktionen bör återanvända gemensam kod bättre i funktion """
function updateHousesDisplay(houses) {
  $('.hus-container').empty();

  houses.forEach(hus => {
    let imagePath = hus.image || 'home page house.jpg';

    // Skapa husinformationselement
    let husInfo = $(`<div class="hus-info" data-id="${hus.id}" style="position: relative;">
                        <img src="${imagePath}" alt="Bild av ${hus.type}" class="hus-bild" style="width:200px;height:200px;cursor:pointer;">
                        <div class="buttons-container" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: none; z-index: 1;">
                          <button class="btn btn-warning redigera-btn">Redigera</button>
                          <button class="btn btn-danger radera-btn">Radera</button>
                        </div>
                     </div>`);

    // Händelser för att visa knapparna när musen hoverar
    let buttonsContainer = husInfo.find('.buttons-container');
    husInfo.on('mouseenter', function () {
      buttonsContainer.show();
    }).on('mouseleave', function () {
      buttonsContainer.hide();
    });

    // Händelse för att visa detaljerad information om huset vid klick
    //lägg till unika id för bostäder
    let husBild = husInfo.find('.hus-bild');
    husBild.on('click', function () {
      let modalContent = `<p>Typ: ${hus.type}</p>
                          <p>Utgångspris: ${hus.price}</p>
                          <p>Antal rum: ${hus.rooms}</p>
                          <p>Boarea: ${hus.area}</p>`;

      showModal(hus.address, modalContent, hus);
    });

    // Händelser för Redigera och Radera-knappar
    let redigeraButton = husInfo.find('.redigera-btn');
    let raderaButton = husInfo.find('.radera-btn');
    redigeraButton.on('click', function (event) {
      event.stopPropagation();
      showEditModal(hus);
    });
    raderaButton.on('click', function (event) {
      event.stopPropagation();
      deleteHouse(hus);
    });

    // Lägg till husinformationselement i behållaren
    $('.hus-container').append(husInfo);
  });
}



// Endast för manuell test av filter funktionen JSOn server detta skall komma ifrån användarens filter vall kan raderas senare 
const testFilters = {
  type: 'Lägenhet',
  // price: '900000',  
  rooms: '3',
  // area: '87'  
};

getFilteredHouses(testFilters).then(houses => {
  updateHousesDisplay(houses);
});



// När sidan laddas så körs funktionen buy
$(document).ready(function () {
  buy();
});
*/

// export default async function renderResidencesList() {
//   try {
//     const residencesData = await getAllResidences();
//     lastFilteredResidences = residencesData;

//    const residencesList = residencesData.map(residence => 
//       `< li onclick = "showResidenceDetails(${residence.id})" >
//   <img src="${residence.imageURL[0]}" alt="Preview of ${residence.address}" class="residence-preview-image">
//     ${ residence.address }
//   </li>`
//     ).join('');

//     return `
//     < h2 class="searchTitle" > Alla Bostäder:</h2 >
//       <div class="filterResidence">
//         <label for="sortOrder">Sortera efter:</label>
//         <select id="sortOrder">
//           <option value="priceAsc">Pris (Lägst överst)</option>
//           <option value="priceDesc">Pris (Högst överst)</option>
//           <option value="sizeAsc">Storlek (Minst överst)</option>
//           <option value="sizeDesc">Storlek (Störst överst)</option>
//         </select>

//         <label for="residenceType">Bostadstyp:</label>
//         <select id="residenceType">
//           <option value="all">Alla</option>
//           <option value="Villa">Villa</option>
//           <option value="Fritidshus">Fritidshus</option>
//           <option value="Lägenhet">Lägenhet</option>
//           <option value="Radhus">Radhus</option>
//         </select>

//         <button onclick="filterResidences()">Filtrera</button>
//       </div>

//       <ul class="residencesList">
//         ${residencesList}
//       </ul>
    
//   } catch (error) {
//     console.error("Error fetching residences data:", error);
//     return "Det uppstod ett fel vid hämtning av bostadsdata.";
//   }
// }




// export async function getAllResidences() {
//   try {
//     let response = await fetch('/residences');
//     let responseJSON = await response.json();
//     console.log("result = ", typeof responseJSON);
//     return responseJSON;
//   } catch (error) {
//     console.error('Fel vid hämtning av bostäder:', error);
//   }
// };
