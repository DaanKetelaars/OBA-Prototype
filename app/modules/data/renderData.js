const renderData = keys => {
    const section = document.querySelector("main section");
    const ul = document.createElement("ul");
    section.appendChild(ul)

    const newData = keys;

    newData.forEach(book => {
        const books = `
        <a href="#book/${book.id}">
            <figure>
                <figcaption>
                <h2>${book.title}</h2>
                <p>${book.authors}</p>
                </figcaption>
                <img src=${book.coverimage} alt="${book.title}">
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