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




// När sidan laddas  så körs funktionen buy
$(document).ready(function () {
  buy();
});