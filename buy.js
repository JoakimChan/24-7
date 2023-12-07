import * as serRequest from './server-request.js';

let isBuyFunctionExecuted = false;

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

<<<<<<< Updated upstream
// Funktion för att uppdatera visning av hus när filter används """ Se över kod består till stor del av buy funktionen bör återanvända gemensam kod bättre i funktion """
=======
// Funktion för att uppdatera visning av hus när filter används """ Se över kod består till stor del av buy bör återanvända gemensam kod bättre i funktion """
>>>>>>> Stashed changes
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
    let husBild = husInfo.find('.hus-bild');
    husBild.on('click', function () {
      let modalContent = `<p>Typ: ${hus.type}</p>
                          <p>Utgångspris: ${hus.price}</p>
                          <p>Antal rum: ${hus.rooms}</p>
                          <p>Boarea: ${hus.area}</p>`;
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
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