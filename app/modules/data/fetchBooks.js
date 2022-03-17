import {
    getData
} from "./getData.js";
import {
    renderData
} from "./renderData.js";

// get button value
import {
    getBtnValue
} from "../getBtnValue.js";
// remove books when list is selected
import {
    removeBooks
} from "../removeBooks.js";



const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=subject%3A';
const key = "d7519ea81ad4e06ab5e5dac46ddeb63a"

getBtnValue()


const fetchBooks = (btnValue) => {

    removeBooks()


    const title = document.querySelector('h3');
    if (btnValue) {
        title.innerHTML = "Hallo"
    } else {
        title.innerHTML = "OKE"
    }

    const api = btnValue ?
        `${endpoint}${btnValue}&authorization=${key}&refine=true&output=json` :
        `http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=eigen%20onderneming+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=${key}&output=json`
    console.log(api);
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(getData)
        .then(renderData)
        .catch(error => {
            console.log(`log ${error}`);
        });
}

export {
    fetchBooks
}