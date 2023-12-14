import { getAll, getOne, addOne } from "../server-request.js";
import NewIntrest from "../class/newIntrest.js";

let lastFilteredResidences = null;

function renderResidenceDetails(residence) {
  return `
    <button id="filterBTN" onclick="backToAllResidences()">Tillbaka till Alla Bostäder</button>
    <h3>${residence.address}</h3>
    <p>Typ: ${residence.type}</p>
    <p>Antal rum: ${residence.rooms}</p>
    <p>Storlek: ${residence.area} kvm</p>
    <p>Pris: ${residence.price} kr</p>
    <p>Byggår: ${residence.year}</p>
    <p>Balkong: ${residence.balcony}</p>
    <p>Förråd: ${residence.storehouse}</p>
    <p>Parkering: ${residence.parking}</p>
    <p>Innergård: ${residence.garden}</p>
    <p>firstName: ${residence.firstName}</p>
    <p>lastName: ${residence.lastName}</p>
    <p>email: ${residence.email}</p>
    <p>phone: ${residence.phone}</p>
    <p>Bilder:${residence.photo}</p>
    <button onclick="toggleInterestForm(${residence.id})">Intresseanmälan</button>
    <div id="interestForm-${residence.id}" class="interest-form" style="display:none;">
        <input type="text" id="nameInterest-${residence.id}" placeholder="Ditt namn" >
        <input type="tel" id="phoneInterest-${residence.id}" placeholder="Ditt telefonnummer" pattern="[0-9]+" title="Endast siffror är tillåtna" >
        <input type="email" id="emailInterest-${residence.id}" placeholder="Din e-postadress" >
        <button onclick="submitInterest(${residence.id})">Skicka</button>
    </div>
  `;
}

export default async function buy() {
  try {
    const residencesData = await getAll("buy");
    lastFilteredResidences = residencesData;

    const residencesList = residencesData.map(residence =>
      `<li onclick="showResidenceDetails(${residence.id})">
        <img src="${residence.photo}" alt="Preview of ${residence.address}" class="residence-preview-image">
        ${residence.address}
        </br>
        ${residence.price} 
        </br>
        ${residence.area}
      </li>`
    ).join('');

    return `
      <h2 class="searchTitle">Alla Bostäder:</h2>
      <div class="filterResidence">
        <label for="sortOrder">Sortera efter:</label>
        <select id="sortOrder">
          <option value="priceAsc">Pris (Lägst överst)</option>
          <option value="priceDesc">Pris (Högst överst)</option>
          <option value="sizeAsc">Storlek (Minst överst)</option>
          <option value="sizeDesc">Storlek (Störst överst)</option>
        </select>

        <label for="residenceType">Bostadstyp:</label>
        <select id="residenceType">
          <option value="all">Alla</option>
          <option value="Villa">Villa</option>
          <option value="Lägenhet">Lägenhet</option>
          <option value="Radhus">Radhus</option>
        </select>

        <button onclick="filterResidences()">Filtrera</button>
      </div>

      <ul class="residencesList">
        ${residencesList}
      </ul>
    `;
  } catch (error) {
    console.error("Error fetching residences data:", error);
    return "Det uppstod ett fel vid hämtning av bostadsdata.";
  }
}

window.showResidenceDetails = async (residenceId) => {
  const residence = await getResidenceById(residenceId);
  document.getElementById("app").innerHTML = renderResidenceDetails(residence);
};

async function getResidenceById(id) {
  return await getOne("buy", id)
}

window.backToAllResidences = async () => {
  document.getElementById("app").innerHTML = await buy();
};

window.filterResidences = async function () {
  try {
    const sortOrder = document.getElementById('sortOrder').value;
    const residenceType = document.getElementById('residenceType').value;
    let residencesData = await getAll("buy");

    if (residenceType !== 'all') {
      residencesData = residencesData.filter(residence => residence.type === residenceType);
    }

    switch (sortOrder) {
      case 'priceAsc':
        residencesData.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        residencesData.sort((a, b) => b.price - a.price);
        break;
      case 'sizeAsc':
        residencesData.sort((a, b) => a.area - b.area);
        break;
      case 'sizeDesc':
        residencesData.sort((a, b) => b.area - a.area);
        break;
    }

    lastFilteredResidences = residencesData;

    const residencesList = residencesData.map(residence =>
      `<li onclick="showResidenceDetails(${residence.id})">
        <img src="${residence.photo}" alt="Preview of ${residence.address}" class="residence-preview-image">
        ${residence.address}
        </br>
        ${residence.price}
        </br>
        ${residence.area}
      </li>`

    ).join('');

    const residencesContainer = document.querySelector('.residencesList');
    residencesContainer.innerHTML = residencesList;

  } catch (error) {
    console.error("Error fetching residences data:", error);
    return "Det uppstod ett fel vid hämtning av bostadsdata.";
  }
}

window.toggleInterestForm = function (residenceId) {
  const form = document.getElementById(`interestForm-${residenceId}`);
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
};

function validatePhone(phone) {
  const re = /^[0-9]+$/;
  return re.test(phone);
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
}

window.submitInterest = async function (residenceId) {
  const nameInterest = document.getElementById(`nameInterest-${residenceId}`).value;
  const phoneInterest = document.getElementById(`phoneInterest-${residenceId}`).value;
  const emailInterest = document.getElementById(`emailInterest-${residenceId}`).value;

  if (!validatePhone(phoneInterest)) {
    alert("Ange ett giltigt telefonnummer (endast siffror).");
    return;
  }

  if (!validateEmail(emailInterest)) {
    alert("Ange en giltig e-postadress.");
    return;
  }

  const bostad = await getOne("buy", residenceId)

  let intrest = new NewIntrest(residenceId, bostad.address, nameInterest, phoneInterest, emailInterest)
  console.log(intrest);
  console.log(intrest.dataInfo());
  addOne("intrest", intrest.dataInfo());
  console.log('Intresseanmälan skickad');
  alert("Din intresseanmälan har skickats!");
};