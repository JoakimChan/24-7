// Importera husdata 
import { houses } from './houses.js';

// Funktion för att visa husinformation
export function displayHouses(housesToDisplay) {
  // Välj huscontainer med id '#hus-container' och töm den
  let husContainer = $('#hus-container').empty();

  // Loopa igenom hela arrayen och skriv ut all hus information 
  housesToDisplay.forEach(hus => {
    let imagePath = hus.image || 'home page house.jpg';

    // Skapa HTML-element för huset med information och en knapp för att visa intresse
    let husElement = $(`<div class="hus-info">
      <img src="${imagePath}" class="hus-bild" alt="Bild på ${hus.type}">
      <div class="hus-details">
        <h2>${hus.address}</h2>
        <p>Typ: ${hus.type}</p>
        <p>Pris: ${hus.price} kr</p>
        <p>Antal rum: ${hus.rooms}</p>
        <p>Area: ${hus.area} kvm</p>
        <p>Balkong: ${hus.Balcony}</p>
        <p>Uteplats: ${hus.Outdoors}</p>
        <p>Våning: ${hus.Floor}</p>
        <p>Hiss: ${hus.Elevator}</p>
        <p>Byggår: ${hus.YearOfBuilding}</p>
        <p>Förråd: ${hus.Storehouse}</p>
        <p>Parkering: ${hus.ParkingLot}</p>
        <p>Tomt: ${hus.Courtyard}</p>
        <!-- Lägg till data-attribut med husets index -->
        <button class="btn visa-intresse" data-hus-index="${housesToDisplay.indexOf(hus)}">Visa Intresse</button>
      </div>
    </div>`);

    // Lägg till hus-elementet i huscontainern
    husContainer.append(husElement);

    // Lägg till en klickhändelsehanterare för "Visa Intresse" -knappen
    husElement.find('.visa-intresse').on('click', function () {

      // Hämta index från data-attributet för att veta vilket index huset har i arrayen för att kunna informera mäklaren om användaren visar intresse
      let index = $(this).data('hus-index');

      // Hämta användarens e-postadress från input-fältet med id '#email'
      let email = $('#email').val();


      // Skapar ett objekt med index och e-postadress som kommer lagra vilket element nummer huset har i arrayen samt användarens email adress
      let interestData = {
        index: index,
        email: email
      };

      // Visa intressemodalen och skicka med interestData-objektet
      showInterestModal(hus, interestData);
    });
  });
}

// Funktion för att visa intressemodal
function showInterestModal(hus, interestData) {
  // Skapa modalinnehållet med husinformation och ett formulär för meddelande och e-post
  let modalContent = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <h2>Intresseanmälan för ${hus.address}</h2>
      <form id="interestForm">
        <label for="message">Meddelande:</label><br>
        <textarea id="message" name="message" rows="4" cols="50"></textarea><br>
        <label for="email">Din E-post:</label><br>
        <input type="email" id="email" name="email"><br>
        <input type="submit" value="Skicka Meddelande">
      </form>
    </div>
  `;

  // Skapa modalcontainer och lägg till modalinnehållet
  let interestModalContainer = $('<div class="modal-container"></div>').html(modalContent);

  // Lägg till händelsehanterare för att stänga modalen vid klick på stängknappen
  interestModalContainer.on('click', '.close-modal', function () {
    closeModal(interestModalContainer);
  });

  // Lägg till modalcontainer i body
  $('body').append(interestModalContainer);

  // Hämta formuläret med id '#interestForm'
  let interestForm = $('#interestForm');

  // Lägg till händelsehanterare för formuläret vid inskickning
  interestForm.on('submit', function (e) {
    e.preventDefault();
    // Skriv ut meddelande och inkludera information om husets index
    alert('Ditt intresse har skickats! Datan finns laggrad i objektet interestData och huset har index platsen i arrayen: ' + interestData.index);
    // Stäng modalen
    closeModal(interestModalContainer);
  });
}

// Funktion för att stänga modal
export function closeModal(modalContainer) {
  modalContainer.remove();
}

// Anropa displayHouses med husdata från './houses.js'
$(document).ready(function () {
  displayHouses(houses);
});
