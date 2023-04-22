import './style.css'

document.querySelector('#app').innerHTML = `
  <img src="#" alt="GIF">
  <input type="text" id="search-input" value="Swag Monkey">
`

const searchInput = document.querySelector('input[type="text"]');
const img = document.querySelector('img');

async function loadGif(query) {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=QWPzoxlZ0gYPSUgrJzyfeywlk6aeqJrI&s='+query, {mode: 'cors'})
  const data = await response.json();
  img.src = data.data.images.original.url;
}

searchInput.addEventListener('focusout', function() {
  loadGif(searchInput.value);
});

searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    loadGif(searchInput.value);
    searchInput.blur();
  }
});

loadGif(document.querySelector('input[type="text"]').value);