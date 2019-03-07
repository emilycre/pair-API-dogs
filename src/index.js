import fakeDogList from '../data/fake-dogs.js';

import loadDogs from './load-dogs.js';
import { readOptions } from './hash-query.js';
import './search-component.js';
import { updateSearchTerm } from './search-component.js';

loadDogs(fakeDogList);

window.addEventListener('hashchange', loadQuery);
loadQuery();

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readOptions(query);
    updateSearchTerm(queryOptions.searchTerm);
}



// fetch('https://api.thedogapi.com/v1/images/search', {
//     headers: {
//         'x-api-key': 'cda1a7db-e4a5-4e81-808d-95185ad8b15e'
//     }
// })
//     .then(res => res.json())
//     .then(console.log);