// * variable
const information = document.getElementById('row-information'),
  searchInput = document.getElementById('search-input'),
  searchList = document.querySelector('.search-list');

//  ? function

function showMovieDetail(data) {
  return `
    <div class="col-md-5">
    <img src="${data.Poster}" alt="" class="img-thumbnail" />
    </div>
  
      <div class="col-md">
        <h1 class="title-info">${data.Title}</h1>
        <div class="desc-info my-4">
          <span class="year">Year : <span class="text-pale">${data.Year}</span></span>
          <span class="ratings bg-warning p-2 rounded-2">Ratings : ${data.Ratings[0].Value}</span>
          <span class="released">Released : <span class="text-pale">${data.Released}</span> </span>
        </div>
  
        <div class="genre my-4">
          <span class="">Genre : <span class="text-grey">${data.Genre}</span></span>
        </div>
  
        <div class="writer my-4">
          <span class="">Writer : <span class="text-pale">${data.Writer}</span></span>
        </div>
  
        <div class="actors my-4">
          <span class="">Actors : <span class="text-pale">${data.Actors}</span></span>
        </div>
  
        <div class="plot">
          <p>
            Plot :
            <span class="text-grey">
              ${data.Plot}
            </span>
          </p>
        </div>

        
      </div>
    `;
}

function showListItem(data) {
  return `
      <div class="search-item-thumbnail">
        <img src="${data.Poster}" alt="img" />
      </div>
      <div class="search-item-info">
          <h3 class="title-search">${data.Title}</h3>
          <p class="year-search">${data.Year}</p>
      </div>
      `;
}

function displayMovieDetail(item) {
  item.addEventListener('click', function () {
    let imdbID = this.dataset.id;

    fetch(`http://www.omdbapi.com/?apikey=d5a13458&i=${imdbID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Poster != 'N/A') {
          data.Poster;
        } else {
          data.Poster = 'img/img-not-found.jpg';
        }

        const movieDetail = showMovieDetail(data);

        searchList.classList.add('hide-search-list');
        searchInput.value = '';

        information.innerHTML = movieDetail;
      });
  });
}

export { showListItem, displayMovieDetail };
