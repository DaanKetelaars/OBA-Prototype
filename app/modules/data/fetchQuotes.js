import {
    getQuoteData
} from "./data_quotes/getQuoteData.js";
const fetchQuotes = () => {
    const api = "https://type.fit/api/quotes"
    console.log(api);
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(getQuoteData)
}

export {
    fetchQuotes
}