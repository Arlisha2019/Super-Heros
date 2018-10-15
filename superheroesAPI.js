const BATEMAN_MOVIES_URL = `http://www.omdbapi.com/?s=batman&apikey=${apikey}`

let movieTitle = $("#movieTitle")
let completeMovieInfo = $("#completeMovieInfo")

function showMovies(data) {

  let movie = data.Search.map(function(list) {
    return `
    <div>
    <li>
    <img id="image" src="${list.Poster}" />
    <a onclick=getAdditonal("${list.imdbID}")><span>${list.Title}</span></a>

    </li>
    `
  })
    movieTitle.html(movie.join(''))
}

function showOne(data){
  let newmovie = `
  <img src=${data.Poster} />
  <label>${data.Year}</label>
  <label>${data.Rated}</label>
  <label>${data.Released}</label>
  <label>${data.Director}</label>
  `
  completeMovieInfo.html(newmovie)
}


function getMovies() {

  $.get(BATEMAN_MOVIES_URL,function(result){
    showMovies(result)
 })
}

function getAdditonal(movieid) {
$.get(`http://www.omdbapi.com/?i="${movieid}"&apikey="${apikey}"`, (data)=>{
  showOne(data)
})

}


getMovies()
