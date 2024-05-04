/*Task 4: Implementing Debounce Function*/

function debouncedSearch(query) {
	// Perform search operation with the query
	console.log("Searching for:", query);
}

function debounce(func, delay){
    let timeId;
    return function(...args){
        const context = this;
        clearTimeout(timeId);
        timeId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);

const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
	debouncedSearchHandler(event.target.value);
});