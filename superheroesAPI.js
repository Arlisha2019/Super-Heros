const BATEMAN_MOVIES_URL = `http://www.omdbapi.com/?s=batman&apikey=${apikey}`

let movieTitle = $("#movieTitle")
let completeMovieInfo = $("#completeMovieInfo")
let container2 = $("#container2")

function showMovies(data) {

  let movie = data.Search.map(function(list) {
    return `

    <li id="movie">
    <img id="image" src="${list.Poster}" />
    <a onclick=getAdditonal("${list.imdbID}")><h4>${list.Title}</h4></a>
    </li>

    `
  })
    movieTitle.html(movie.join(''))
}

function showOne(data){
  let newmovie = `
  <li ="moreInfo">
    <h3>${data.Title}</h3>
    <img id="singleImg" src=${data.Poster} />
    <h4>Year: ${data.Year}</h4>
    <h4>Rated: ${data.Rated}</h4>
    <h4>Released: ${data.Released}</h4>
    <h4>Director: ${data.Director}</h4>
  </li>
  `
  completeMovieInfo.html(newmovie)
}


function getMovies() {

  $.get(BATEMAN_MOVIES_URL,function(result){
    showMovies(result)
 })
}

function getAdditonal(movieid) {
$.get(`http://www.omdbapi.com/?i=${movieid}&apikey=${apikey}`, (data)=>{
  showOne(data)
})

}


getMovies()
