import fakeDogList from '../data/fake-dogs.js';
import loadDogs from './load-dogs.js';
import { readOptions } from './hash-query.js';
import './search-component.js';

loadDogs(fakeDogList);






// fetch('https://api.thedogapi.com/v1/images/search', {
//     headers: {
//         'x-api-key': 'cda1a7db-e4a5-4e81-808d-95185ad8b15e'
//     }
// })
//     .then(res => res.json())
//     .then(console.log);