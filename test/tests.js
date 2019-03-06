import './html-equal.js';

const test = QUnit.test;
const dog = {
    name: "Griffon Bruxellois",
    id: "ryoYGec4Q",
    url: "https://cdn2.thedogapi.com/images/ryoYGec4Q_1280.jpg"
};

function makeDogTemplate(dog) {
    const html = `
    <li>
        <h2>Breed: ${dog.name}</h2>
        <img src="${dog.url}" alt="picture of ${dog.name}">
    </li>
    `
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
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