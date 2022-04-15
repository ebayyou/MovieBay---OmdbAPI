// import
import { showListItem, displayMovieDetail } from './modules/function.js';

// * Global Variable
const searchInput = document.getElementById('search-input'),
  searchList = document.querySelector('.search-list');

//

// ? find movies : search for movies based on what is entered in the search field ('#search-list')

function findMovies() {
  let searchTerm = searchInput.value.trim();

  if (searchTerm.length > 0) {
    searchList.classList.remove('hide-search-list');
    loadMovies(searchTerm);
  } else {
    searchList.classList.add('hide-search-list');
  }
}

// ? Load Movies from api

async function loadMovies(searchItem) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=d5a13458&s=${searchItem}`);
  const dataMovie = await res.json();

  if (dataMovie.Response === 'True') {
    displayMovieList(dataMovie.Search);
  } else {
    return (searchList.innerHTML = `
    <div class="search-list-item">
      <h1 class="fs-3">${dataMovie.Error}</h1>
    </div>
    `);
  }
}

// ? display movie list

function displayMovieList(movies) {
  searchList.innerHTML = '';

  movies.forEach((data) => {
    let movieListItem = document.createElement('div');
    movieListItem.dataset.id = data.imdbID;
    movieListItem.classList.add('search-list-item');

    if (data.Poster != 'N/A') {
      data.Poster;
    } else {
      data.Poster = 'img/img-not-found.jpg';
    }

    movieListItem.innerHTML = showListItem(data);
    searchList.appendChild(movieListItem);

    // ? display movie detail
    displayMovieDetail(movieListItem);
  });
}

// Todo When the key : "enter" in pressed in the input "#search-input", request public API : data Movie
searchInput.addEventListener('keyup', () => findMovies());

// Todo /* ========== Change light theme ========== */

const btnTheme = document.getElementById('icon-theme'),
  lightTheme = 'light-theme',
  iconTheme = 'bxs-moon';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => (document.body.classList.contains(lightTheme) ? 'dark' : 'light');
const getCurrentIcon = () => (btnTheme.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun');

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
  btnTheme.classList[selectedIcon === 'bx bx-sun' ? 'add' : 'remove'](iconTheme);
}

btnTheme.addEventListener('click', () => {
  document.body.classList.toggle(lightTheme);
  btnTheme.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
