import makeMovieTemplate from './make-movie-template.js';
const movieList = document.getElementById('movie-list');

export default function loadMovies(movies) {
    movies.forEach(movie => {
        const dom = makeMovieTemplate(movie);
        movieList.appendChild(dom);
    });
}