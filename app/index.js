import {
    fetchData
} from "./modules/data/fetchData.js"


// on submit show results
const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    fetchData()
})