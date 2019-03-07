import './html-equal.js';
import makeMovieTemplate from '../src/make-movie-template.js';
import { readOptions, writeSearchToQuery, writePageToQuery } from '../src/hash-query.js';
import makeMovieSearchUrl from '../src/make-movie-search-url.js';

const test = QUnit.test;

const movie = {
    title: 'Star Wars',
    poster_path: '/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg'
};

test('url includes query and page', assert => {
    const queryOptions = {
        searchTerm: 'star wars',
        page: 2
    };

    const expected = 'https://api.themoviedb.org/3/search/movie?api_key=a9c1c53b2d714000fd04fb94fe4ad651&query=star+wars&page=2';
    const url = makeMovieSearchUrl(queryOptions);

    assert.equal(url, expected);
});

test('read options from query', assert => {
    //arrange
    const query = 'searchTerm=star+wars&page=1';
    const expected = {
        searchTerm: 'star wars',
        page: 1
    };
    //act
    const result = readOptions(query);
    //assert
    assert.deepEqual(result, expected);
});

test('write page to existing', assert => {
    //arrange
    const existingQuery = 'searchTerm=star+wars&page=2';
    const page = 3;
    //act
    const query = writePageToQuery(existingQuery, page);
    //assert
    assert.equal(query, 'searchTerm=star+wars&page=3');
});

test('write search to existing query changes search', assert => {
    //arrange
    const existingQuery = 'searchTerm=star+wars&page=1';
    const searchTerm = 'star wars';
    //act
    const query = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(query, 'searchTerm=star+wars&page=1');
});

test('dynamically populating movie gallery', assert => {
    const expected = `
    <li>
        <h2>Title: Star Wars</h2>
        <img src="https://api.themoviedb.org/3/search/movie/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg" alt="picture of Star Wars poster">
    </li>
    `;

    const result = makeMovieTemplate(movie);
    assert.htmlEqual(result, expected);
});

test('write search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'star wars';
    //act
    const query = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(query, 'searchTerm=star+wars');
});