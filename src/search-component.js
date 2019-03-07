import { writeSearchToQuery } from './hash-query.js';

const searchForm = document.getElementById('search-form');
const movieSearch = searchForm.querySelector('input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const searchTerm = movieSearch.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
});

export function updateSearchTerm(searchTerm) {
    movieSearch.value = searchTerm;
}