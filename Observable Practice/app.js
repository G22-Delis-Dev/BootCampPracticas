
const { fromEvent } = rxjs;
const { Observable, debounceTime, map, filter } = rxjs/operators;

const forbiddenWords = ['odio', 'imbecil', 'mal parido', 'racista'];


const subscription = clickEvents.subscribe(() => {
    
})