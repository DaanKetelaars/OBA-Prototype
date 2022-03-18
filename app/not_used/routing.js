function routing(newData) {

    const divs = document.querySelectorAll('div');
    const div = document.querySelector(`div[data-route="detail"]`);
    const ul = document.createElement("ul");
    div.appendChild(ul)

    routie({
        'book/': (title) => {

            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
            let filter = newData.filter(book => {
                book.title = book.title.replace(/\s/g, '');
                book.title === title;
            });

            filter.forEach(book => {
                const books = `
                    <article>
                        <h2>${book.title} - ${book.author}</h2>
                        <p>${book.summaries}</p>
                    </article>
            `;
                const li = document.createElement('li');
                li.innerHTML = books;
                ul.appendChild(li);
            })
            updateUI("detail");
        },
        " ": () => {
            updateUI("normal");
        }
    });

    function updateUI(route) {
        divs.forEach((item) => {
            item.classList.add("disabled");
        });
        let activeDiv = document.querySelector(`[data-route=${route}]`);
        activeDiv.classList.remove("disabled");
    }

    return newData
}

export {
    routing
}