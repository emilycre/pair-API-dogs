import makeDogTemplate from './make-dog-template.js';

const dogList = document.getElementById('dog-list');

export default function loadDogs(dogs) {
    dogs.forEach(dog => {
        const dom = makeDogTemplate(dog);
        dogList.appendChild(dom);
    });
}