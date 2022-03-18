function renderData(keys) {
    const div = document.querySelector("main div");
    const ul = document.createElement("ul");
    div.appendChild(ul)

    const newData = keys;

    newData.forEach(book => {
        const books = `
        <a href="${book.detailLink}" target="_blank">
            <article>
                    <h4>${book.title}</h4>
                    <p>${book.summaries ? book.summaries : "-"}</p>
            </article>
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