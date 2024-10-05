

document.addEventListener('DOMContentLoaded', () => {

    const { fromEvent, of } = rxjs;
    const {
        debounceTime,
        map,
        switchMap,
        catchError,
    } = rxjs.operators;
    const { ajax } = rxjs.ajax;


    console.log("hola")


    const fetchDataButton = document.getElementById('fetchData');
    const outputDiv = document.getElementById('output');
    const errorDiv = document.getElementById('error');


    //const fetchUrl = `https://api.api-onepiece.com/v2/characters/en/search?name=shanks`;

    function showUserData(onepiece) {
        outputDiv.innerHTML = `
    <h3>${onepiece.name}</h3>
    <p>Recompensa: ${onepiece.bounty}</p>
    <p>Fruta: ${onepiece.fruit.name}, tipo ${onepiece.fruit.type}</p>
  `
    }

    function logError(error) {
        errorDiv.textContent = `Error: ${error}`
    }


    fromEvent(fetchDataButton, 'click').pipe(

        switchMap(() => {

            const entrada = document.getElementById('nombre')
            let nombre = entrada.value

            return ajax.getJSON(`https://api.api-onepiece.com/v2/characters/en/search?name=${nombre}`).pipe(
                catchError((error) => {
                    logError(error);
                    console.log(error)
                    return of(error);
                }),
            );
        }),
        map(response => response ? response[0] : null),
    ).subscribe({
        next: (onepiece) => {
            console.log(onepiece)
            showUserData(onepiece);
            errorDiv.textContent = "";
        },
        error: (error) => {
            console.log(error);
        }
    });

});