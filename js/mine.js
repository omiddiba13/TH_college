const div = document.querySelector('#login');
let isActive = true;

function toggleDiv() {
  isActive = isActive;
  div.classList.toggle('active', isActive);
}

document.querySelector('#my-button').addEventListener('click', toggleDiv('#login'));