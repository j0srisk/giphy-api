import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

var query = 'Dog'

document.querySelector('#app').innerHTML = `
  <img src="#" alt="GIF">
  <input type="text" id="search-input" value=` + query + `>
`

function loadGif(query) {
  const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=QWPzoxlZ0gYPSUgrJzyfeywlk6aeqJrI&s='+query, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    })
    .catch(function(error) {
      alert(error);
    });
}

const searchInput = document.querySelector('input[type="text"]');

searchInput.addEventListener('focusout', function() {
  query = searchInput.value;
  loadGif(query);
});

searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    query = searchInput.value;
    searchInput.blur();
    loadGif(query);
  }
});

loadGif(query);