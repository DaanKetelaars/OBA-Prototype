function renderData(keys) {
    const div = document.querySelector("main div");
    const ul = document.createElement("ul");
    div.appendChild(ul)

    const newData = keys;

    newData.forEach(book => {
        const books = `
        <a href="${book.detailLink}" target="_blank">
            <figure>
                <figcaption>
                    <h2>${book.title}</h2>
                    <p>${book.authors} <br/> ${book.summaries}</p>
                </figcaption>
            </figure>
        </a>
    `;
        const li = document.createElement('li');
        li.innerHTML = books;
        ul.appendChild(li);
    })
    return newData
}

export {
    renderData
}