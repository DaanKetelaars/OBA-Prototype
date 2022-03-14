import {
    getData
} from "./getData.js";
import {
    renderData
} from "./renderData.js";
import {
    routing
} from "./routing.js";

const fetchData = () => {


    const allBooks = document.querySelectorAll("section ul");

    allBooks.forEach(item => {
        item.remove()
    })


    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=classification:informatieboek%20';
    const key = "1e19898c87464e239192c8bfe422f280"
    const result = document.getElementById("searchBar").value;

    const api = `${endpoint}${result}&authorization=${key}&refine=true&output=json`
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(getData)
        .then(renderData)
        .then(routing)
}


export {
    fetchData
}