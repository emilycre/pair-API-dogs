const SEARCH_DOG_URL = 'https://api.thedogapi.com/v1/images/search';
const API_KEY = 'cda1a7db-e4a5-4e81-808d-95185ad8b15e';

export default function makeDogSearchUrl(queryOptions) {
    const url = new URL(SEARCH_DOG_URL);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('query', queryOptions.searchTerm);
    url.searchParams.set('page', queryOptions.page);

    return url.toString();
}