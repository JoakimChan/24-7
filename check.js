function sell() {
  let sellContainer = document.getElementById('sell');

  if (sellContainer.classList.contains('clicked')) {
    sellContainer.classList.remove('clicked');
  } else {
    sellContainer.classList.add('clicked');
  }
  alert('Sälj-rutan klickades!');
}

function buy() {
  let buyContainer = document.getElementById('buy');

  if (buyContainer.classList.contains('clicked')) {
    buyContainer.classList.remove('clicked');
  } else {
    buyContainer.classList.add('clicked');
  }
  alert('Köp-rutan klickades!');
}

