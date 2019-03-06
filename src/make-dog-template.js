export default function makeDogTemplate(dog) {
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