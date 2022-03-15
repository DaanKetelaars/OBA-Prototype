const routing = newData => {

    const sections = document.querySelectorAll('section');
    const section = document.querySelector(`section[data-route="detail"]`);
    const ul = document.createElement("ul");
    section.appendChild(ul)

    routie({
        'book/:id': (id) => {
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
            let filterOnID = newData.filter(book => book.id === id);

            filterOnID.forEach(book => {
                const books = `
                    <div>
                        <h2>${book.title} - ${book.author}</h2>
                        <p>${book.description}</p>
                    </div>
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
        sections.forEach((item) => {
            item.classList.add("disabled");
        });
        let activeSection = document.querySelector(`[data-route=${route}]`);
        activeSection.classList.remove("disabled");
    }

    return newData
}

export {
    routing
}