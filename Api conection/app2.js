const { fromEvent, of } = rxjs;
const {
    debounceTime,
    map,
    switchMap,
    catchError,
    filter,
    distinctUntilChanged,
} = rxjs.operators;
const { ajax } = rxjs.ajax;

const searchInput = document.getElementById('searchInput');
const outputDiv = document.getElementById('output');
const errorDiv = document.getElementById('error');

function showRepos(onepiece) {
    outputDiv.innerHTML = `
    <div>
      <h3>${onepiece.name}</h3>
    </div>
  `;
}

function logError(error) {
    errorDiv.textContent = `Error: ${error}`
}

fromEvent(searchInput, "input").pipe(
    debounceTime(400),
    map((event) => event.target.value),
    filter((query) => query.length > 0),
    distinctUntilChanged(),
    switchMap((query) => {
        return ajax.getJSON(`https://api.api-onepiece.com/v2/characters/en/search?name=${query}`).pipe(
            catchError((error) => {
                logError(error);
                return of(error);
            })
        );
    })
).subscribe({
    next: (onepiece) => {
        showRepos(onepiece);
        errorDiv.textContent = "";
    },
    error: (error) => {
        console.log(error)
    }
});