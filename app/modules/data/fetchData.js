// data
import {
    getData
} from "./getData.js";
import {
    renderData
} from "./renderData.js";
import {
    routing
} from "./routing.js";

// get button value
import {
    getBtnValue
} from "../getBtnValue.js";
// remove books when list is selected
import {
    removeBooks
} from "../removeBooks.js";



const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=classification:informatieboek%20';
const key = "1e19898c87464e239192c8bfe422f280"

getBtnValue()


const fetchData = (btnValue) => {

    removeBooks()

    const api = `${endpoint}${btnValue}&authorization=${key}&refine=true&output=json`
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(getData)
        .then(renderData)
        .then(routing)
        .catch(error => {
            console.log(`log ${error}`);
        });
}


export {
    fetchData
}