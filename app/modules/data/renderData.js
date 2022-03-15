const renderData = cleanData => {
    const section = document.querySelector("main section");
    const ul = document.createElement("ul");
    section.appendChild(ul)

    const newData = cleanData;

    newData.forEach(book => {
        const books = `
        <a href="#book/${book.id}">
            <div>
                <h2>${book.title}</h2>
                <p>${book.authors}</p>
            </div>
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