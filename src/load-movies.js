import makeMovieTemplate from './make-movie-template.js';
const movieList = document.getElementById('movie-list');

export default function loadMovies(movies) {
    clearImages();
    movies.forEach(movie => {
        const dom = makeMovieTemplate(movie);
        movieList.appendChild(dom);
    });
}

function clearImages() {
    while(movieList.children.length > 0) {
        movieList.lastElementChild.remove();
    }
}