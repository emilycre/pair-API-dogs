import { writePageToQuery } from './hash-query.js';

const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const currentPage = document.getElementById('page');
const totalPages = document.getElementById('total-pages');

let currentPageNumber = 1;

export function updatePagingInfo(pagingInfo) {
    currentPageNumber = pagingInfo.page;
    currentPage.textContent = currentPageNumber;
    totalPages.textContent = pagingInfo.totalPages;
    nextButton.disabled = currentPageNumber === pagingInfo.totalPages;
    previousButton.disabled = currentPageNumber === 1;
}

function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}

previousButton.addEventListener('click', () => {
    currentPageNumber--;
    updateQuery();
});

nextButton.addEventListener('click', () => {
    currentPageNumber++;
    updateQuery();
});