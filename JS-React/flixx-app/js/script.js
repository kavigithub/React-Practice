//console.log(window.location.pathname.split('/').slice(-1).join(''));
//const currentLocation = window.location.pathname.split('/').slice(-1).join('');
//c6f538287e160466ee88291cea36e984
const spinner = document.querySelector('.spinner');
const API_URL = "https://api.themoviedb.org/3/";

const global = {
  currentLocation: window.location.pathname,
  search: {
    term: '',
    type: '',
    pagination: 1,
    totalPages: 1,
    page: 1,
    total_pages: 0,
    total_results: 0
  }
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
  popularTVshow: "tv/popular",
  nowPlaying: "movie/now_playing"
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

//Make serach API call
async function searchAPIdata(){
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmY1MzgyODdlMTYwNDY2ZWU4ODI5MWNlYTM2ZTk4NCIsInN1YiI6IjY1MTQ0MjRjMDQ5OWYyMDBjNDRlNGVmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WxdgP0yD83QLWFz_b9LyYWYqlenjajGu3oMyj2rBvrg",
    },
  };

  try {
    spinner.classList.add('show');                  
    /* search/tv?query=Gran%20Turismo&include_adult=false&language=en-US&page=1 */
    const response = await fetch(`${API_URL}search/${global.search.type}?query=${global.search.term}&language=en-US&page=${global.search.page}`, options);
    const data = await response.json();
    console.log(data);
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

//Search moview and TV
async function serach(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  console.log(queryString);
  console.log(urlParams);
  console.log(urlParams.get('type'));

  global.search.type = urlParams.get('type');
  global.search.term = urlParams.get('search-term');


  if(global.search.term !== '' && global.search.term !== null) {
    const { results, total_pages, page, total_results } = await searchAPIdata();
    console.log(results);
    if(results.length === 0){
      showAlert('No results found', 'alert-error')
      return;
    }
      global.search.page = page;
      global.search.total_pages= total_pages;
      global.search.total_results = total_results;

    displaySearchResults(results);

  } else {
   // alert('please enter')
   showAlert('Please enter a serach term', 'alert-error')
  }
}

function displaySearchResults(results){
  document.querySelector("#search-results").innerHTML = "";
  document.querySelector("#pagination").innerHTML = "";

  results.forEach((result) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <a href="${global.search.type}-details.html?id=${result.id}">
    ${
      result.poster_path
        ? `<img src="https://image.tmdb.org/t/p/w500${result.poster_path}" class="card-img-top" alt=${global.search.type === 'movie' ? result.title : result.name}/>`
        : `<img src="../images/no-image.jpg" class="card-img-top" alt=${global.search.type === 'movie' ? result.title : result.name} />`
    }
    </a>
    <div class="card-body">
      <h5 class="card-title">${global.search.type === 'movie' ? result.title : result.name}</h5>
      <p class="card-text">
        <small class="text-muted">Release: ${global.search.type === 'movie' ? result.release_date : result.first_air_date}</small>
      </p>
    </div>
  `;
  document.getElementById("search-results-heading").innerHTML = `<h2>${results.length} of ${global.search.total_results}, Results for ${global.search.term}</h2>`

    document.getElementById("search-results").appendChild(div);
  });
  displayPaginationHMTL();
}

function displayPaginationHMTL(){
  let div = document.createElement('div');
  div.classList.add("pagination");
  div.innerHTML = ` <button class="btn btn-primary" id="prev">Prev</button>
  <button class="btn btn-primary" id="next">Next</button>
  <div class="page-counter">Page ${global.search.page} of ${global.search.total_pages}</div>`;
  document.querySelector("#pagination").appendChild(div);

  if(global.search.page === 1){
    document.querySelector('#prev').disabled = true;
  }

  if(global.search.total_pages === global.search.page){
    document.querySelector('#next').disabled = true;
  }

  document.querySelector('#next').addEventListener('click', async function(){
    global.search.page++;
    const { results, total_pages, page, total_results } = await searchAPIdata();
    displaySearchResults(results);
    //console.log(results++);
  });

  document.querySelector("#prev").addEventListener("click", async function(){
    global.search.page--;
    const { results, total_pages, page, total_results } = await searchAPIdata();
    displaySearchResults(results);
  })
}

async function displaySlider(){
  try {
    let {results} = await fetchAPIdata(endPoints.nowPlaying);
    results.forEach((item) => {
      let div = document.createElement('div');
      div.classList.add('swipper-slide');
      div.innerHTML = sliderHTML(item);
      document.querySelector('.swiper-wrapper').appendChild(div);
      initSwipper(); 
    });  
  } catch (error) {
    console.log(error);
  }
}

function sliderHTML(param){
  let htmlSlider = `
  <a href="movie-details.html?id=${param.id}">
    <img  src="https://image.tmdb.org/t/p/w500${param.poster_path}" alt=${param.title} />
  </a>
  <h4 class="swiper-rating">
    <i class="fas fa-star text-secondary"></i> ${param.vote_average} / 10
  </h4>`;
  return htmlSlider;
}

function initSwipper(){
  const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
      // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoPlay: {
      delay: 4000,
      disbaleOnInteraction: false
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      500: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 3
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
      }
    }
  })
  return swiper;
}

function addCommasToNumbes(number){
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //return number.toLocaleString("en-US");
}

function showAlert(message, className){
  const alertElement = document.createElement('div');
  alertElement.classList.add('alert', className);
  alertElement.appendChild(document.createTextNode(message));
  document.getElementById('alert').appendChild(alertElement);

  setTimeout(() => {
    alertElement.remove();
  }, 3000)
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
    displaySlider();
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
    serach();
    console.log("search");
  }

  highlightLink();
}

document.addEventListener("DOMContentLoaded", init);

//http://127.0.0.1:5500/JS-React/flixx-app/index.html
