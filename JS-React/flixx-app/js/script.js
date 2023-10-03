//console.log(window.location.pathname.split('/').slice(-1).join(''));
//const currentLocation = window.location.pathname.split('/').slice(-1).join('');
//c6f538287e160466ee88291cea36e984
const spinner = document.querySelector('.spinner');
const API_URL = "https://api.themoviedb.org/3/";

const global = {
  currentLocation: window.location.pathname,
};

const page = global.currentLocation;
console.log(page);

function highlightLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((item) => {
    //console.log(item.getAttribute('href').split('.').slice(0, 1).join());
    const pageActive = item.getAttribute("href").split(".").slice(0, 1).join();
    if (page.includes(pageActive)) {
      item.classList.add("active");
    }
  });
}

const endPoints = {
  popularMovies: "movie/popular",
  popularTVshow: "tv/popular"
};

//fetch data from TMDB API
async function fetchAPIdata(endpoints) {
  //let API_KEY = 'c6f538287e160466ee88291cea36e984';
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmY1MzgyODdlMTYwNDY2ZWU4ODI5MWNlYTM2ZTk4NCIsInN1YiI6IjY1MTQ0MjRjMDQ5OWYyMDBjNDRlNGVmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WxdgP0yD83QLWFz_b9LyYWYqlenjajGu3oMyj2rBvrg",
    },
  };

  //const response = await fetch(`${API_URL}${endpoints}?api_key=${API_KEY}`);
  try {
    spinner.classList.add('show');
    const response = await fetch(`${API_URL}${endpoints}`, options);
    const data = await response.json();
    spinner.classList.remove('show');
    return data;
  } catch (error) {
    console.log(error)
  }

}

async function displayPopularMovies() {
  let { results } = await fetchAPIdata(endPoints.popularMovies);
  /* let movieDiv = results.map((item) => moviesPolular(item)).join('');
   document.getElementById('popular-movies').innerHTML = movieDiv; */
  results.forEach((movie) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = moviesPolular(movie);
    document.getElementById("popular-movies").appendChild(div);
  });
}

function moviesPolular(movie) {
  let movieCard = `
  <a href="movie-details.html?id=${movie.id}">
  ${
    movie.poster_path
      ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt=${movie.title}/>`
      : `<img src="../images/no-image.jpg" class="card-img-top" alt=${movie.title} />`
  }
  </a>
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">
      <small class="text-muted">Release: ${movie.release_date}</small>
    </p>
  </div>
`;
  return movieCard;
}

//movie details
async function getMovieDetails(){
  let movieId = window.location.search.split("=")[1];
  //console.log(getId);
  let response = await fetchAPIdata(`movie/${movieId}`);

  //Background Image
  showCoverBgImage('movie', response.backdrop_path);
  console.log(response);
  const div = document.createElement('div');
  div.innerHTML =  movieDetailHtml(response);
 document.getElementById('movie-details').appendChild(div);
}

function showCoverBgImage(type, bgPath){
  const overlayDiv = document.createElement('div');
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${bgPath})`;
  console.log( overlayDiv.style.backgroundImage)
  overlayDiv.classList.add('bgConverImage');
  if(type === 'movie') {
    document.getElementById('movie-details').appendChild(overlayDiv);
  } else {
    document.getElementById('show-details').appendChild(overlayDiv);
  }
}

function movieDetailHtml(movie){
  let htmlDiv = `<div class="details-top">
  <div>
  ${
    movie.poster_path
      ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt=${movie.title}/>`
      : `<img src="../images/no-image.jpg" class="card-img-top" alt=${movie.title} />`
  }
  </div>
  <div>
    <h2>${movie.original_title}</h2>
    <p>
      <i class="fas fa-star text-primary"></i>
     ${movie.vote_average.toFixed(1)} / 10
    </p>
    <p class="text-muted">Release Date: ${movie.release_date}</p>
    <p>
      ${movie.overview}
    </p>
    <h5>Genres</h5>
    <ul class="list-group">
    ${movie.genres.map((item) =>  `<li>${item.name}</li>`).join('')}
    </ul>
    <a href=${movie.homepage} target="_blank" class="btn">Visit Movie Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Movie Info</h2>
  <ul>
    <li><span class="text-secondary">Budget:</span> $${addCommasToNumbes(movie.budget)} </li>
    <li><span class="text-secondary">Revenue:</span> $${addCommasToNumbes(movie.revenue)}</li>
    <li><span class="text-secondary">Runtime:</span> ${movie.runtime} minutes</li>
    <li><span class="text-secondary">Status:</span> ${movie.status}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">${movie.production_companies.map((company) => `<span>${company.name}</span>`).join(' , ')}</div>
</div>`
  return htmlDiv;
}

async function displayPopularTvShow(){
  let {results} = await fetchAPIdata(endPoints.popularTVshow);
  results.forEach((item) => {
    let div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = tvSeriesPolular(item);
    document.getElementById('popular-shows').appendChild(div);
  })
}

function tvSeriesPolular(tvshow) {
  let tvShowCard = `
  <a href="tv-details.html?id=${tvshow.id}">
  ${
    tvshow.poster_path
      ? `<img src="https://image.tmdb.org/t/p/w500${tvshow.poster_path}" class="card-img-top" alt=${tvshow.name}/>`
      : `<img src="../images/no-image.jpg" class="card-img-top" alt=${tvshow.name} />`
  }
  </a>
  <div class="card-body">
    <h5 class="card-title">${tvshow.name}</h5>
    <p class="card-text">
      <small class="text-muted">Air Date: ${tvshow.first_air_date}</small>
    </p>
  </div>
`;
  return tvShowCard;
}

async function getTVDetails(){
  let showId =  window.location.search.split('=')[1];
  console.log(showId);
  let response = await fetchAPIdata(`tv/${showId}`);
  console.log(response); 
  showCoverBgImage('tv', response.backdrop_path);

  let div = document.createElement('div');
  div.innerHTML = tvShowDetailHtml(response);

  document.querySelector('#show-details').appendChild(div);
}

function tvShowDetailHtml(tvShow){
  let htmlDiv = `<div class="details-top">
  <div>
  ${
    tvShow.poster_path ? `<img src="https://image.tmdb.org/t/p/w500${tvShow.poster_path}" class="card-img-top" alt=${tvShow.original_name}/>`
      : `<img src="../images/no-image.jpg" class="card-img-top" alt=${tvShow.original_name} />`
  }
  </div>
  <div>
    <h2>${tvShow.original_name}</h2>
    <p>
      <i class="fas fa-star text-primary"></i>
     ${tvShow.vote_average.toFixed(1)} / 10
    </p>
    <p class="text-muted">Last air Date: ${tvShow.last_air_date}</p>
    <p>
      ${tvShow.overview}
    </p>
    <h5>Genres</h5>
    <ul class="list-group">
    ${tvShow.genres.map((item) =>  `<li>${item.name}</li>`).join('')}
    </ul>
    <a href=${tvShow.homepage} target="_blank" class="btn">Visit Movie Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Movie Info</h2>
  <ul>
    <li><span class="text-secondary">Number of Episode:</span> ${tvShow.number_of_episodes} </li>
    <li><span class="text-secondary">Vote:</span> ${tvShow.vote_average} </li>
    <li><span class="text-secondary">Popularity:</span> ${tvShow.popularity}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">${tvShow.production_companies.map((company) => `<span>${company.name}</span>`).join(' , ')}</div>
</div>`
  return htmlDiv;
}

function addCommasToNumbes(number){
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //return number.toLocaleString("en-US");
}

function init() {
  /* switch(global.currentLocation){
        case 'index.html' :
            console.log('home');
            break;
        case 'shows.html' :
            console.log('shows');
           break;
        case 'search.html' :
            console.log('serach');
            break;
            case 'movie-details':
         console.log('movie details');
         break;
         case 'tv-details':
            console.log('tv details');                
    } */
  //['/', '/index.html'].includes(page)
  //console.log(page.endsWith('/'))
  if (page.includes("index") || page.endsWith("/")) {
    //console.log('home')
    displayPopularMovies();
  } else if (page.includes("shows")) {
    console.log("shows");
    displayPopularTvShow();
  } else if (page.includes("movie-details")) {
    console.log("movie details");
    getMovieDetails()
  } else if (page.includes("tv-details")) {
    console.log("tv details");
    getTVDetails()
  } else if (page.includes("search")) {
    console.log("search");
  }

  highlightLink();
}

document.addEventListener("DOMContentLoaded", init);

//http://127.0.0.1:5500/JS-React/flixx-app/index.html
