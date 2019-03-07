// import fakeMovieList from '../data/fake-ass-movies.js';

import './search-component.js';
import loadMovies from './load-movies.js';
import { readOptions } from './hash-query.js';
import { updateSearchTerm } from './search-component.js';
import makeMovieSearchUrl from './make-movie-search-url.js';

window.addEventListener('hashchange', loadQuery);
loadQuery();

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readOptions(query);
    updateSearchTerm(queryOptions.searchTerm);
    
    const url = makeMovieSearchUrl(queryOptions);
    
    fetch(url)
        .then(response => response.json())
        .then(results => {
        loadMovies(results.results);
    });
}







    // fetch('https://api.thedogapi.com/v1/images/search', {
//     headers: {
//         'x-api-key': 'cda1a7db-e4a5-4e81-808d-95185ad8b15e'
//     }
// })
//     .then(res => res.json())
//     .then(console.log);