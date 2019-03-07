export default function makeMovieTemplate(movie) {
    const html = `
    <li>
        <h2>Title: ${movie.title}</h2>
        <img src="https://api.themoviedb.org/3/search/movie${movie.poster_path}" alt="picture of ${movie.title} poster">
    </li>
    `
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}