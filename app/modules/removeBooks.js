const removeBooks = () => {
    const allBooks = document.querySelectorAll("div ul");

    allBooks.forEach(item => {
        item.remove()
    })
}

export {
    removeBooks
}