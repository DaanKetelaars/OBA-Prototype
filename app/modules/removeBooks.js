const removeBooks = () => {
    const allBooks = document.querySelectorAll("section ul");

    allBooks.forEach(item => {
        item.remove()
    })
}

export {
    removeBooks
}