import './html-equal.js';
import makeDogTemplate from '../src/make-dog-template.js';

const test = QUnit.test;

const dog = {
    name: "Griffon Bruxellois",
    id: "ryoYGec4Q",
    url: "https://cdn2.thedogapi.com/images/ryoYGec4Q_1280.jpg"
};

function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);

    return searchParams.toString();
}

test('dynamically populating dog gallery', assert => {
    const expected = `
    <li>
        <h2>Breed: Griffon Bruxellois</h2>
        <img src="https://cdn2.thedogapi.com/images/ryoYGec4Q_1280.jpg" alt="picture of Griffon Bruxellois">
    </li>
    `;

    const result = makeDogTemplate(dog);
    assert.htmlEqual(result, expected);
});

test('write search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'bulldog';
    //act
    const query = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(query, 'searchTerm=bulldog&page=1');
});