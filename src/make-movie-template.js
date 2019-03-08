export default function makeMovieTemplate(movie) {
    const html = `
    <li>
        <h2>Title: ${movie.title}</h2>
        <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="picture of ${movie.title} poster">
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}