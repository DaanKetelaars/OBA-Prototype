// import {
//     fetchBooks
// } from "./fetchBooks.js";

// fetchBooks()
// const fetchQuotes = () => {
//     const api = "https://type.fit/api/quotes"
//     console.log(api);
//     fetch(api)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             let titleArr = [];
//             let result = '';
//             let i = 0;
//             let size = 10;
//             let items = data.slice(0, size);
//             const fruit = document.getElementById('fruit');
//             const titles = items.map(item => {
//                 return item.text
//             });
//             titleArr.push(titles)
//             const item = titleArr[Math.floor(Math.random() * titleArr.length)];
//             fruit.innerHTML = item[0];
//             setInterval(() => {
//                 fruit.innerHTML = item[i++];
//                 if (i == item.length) i = 0;
//             }, 5000)
//         })
// }


// export {
//     fetchBooks,
//     fetchQuotes
// }