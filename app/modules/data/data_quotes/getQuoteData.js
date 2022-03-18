const getQuoteData = (data) => {
    // variables
    let titleArr = [];
    let authorArr = [];

    let i = 0;
    let size = 10;
    const h2 = document.querySelector(".title");
    const p = document.querySelector(".author")


    let items = data.slice(0, size);

    const titles = items.map(item => {
        return item.text
    });
    const authors = items.map(item => {
        return item.author
    });



    titleArr.push(titles)
    authorArr.push(authors)

    const text = titleArr[Math.floor(Math.random() * titleArr.length)];
    const author = authorArr[Math.floor(Math.random() * authorArr.length)];

    h2.innerHTML = `"${text[0]}"`;
    p.innerHTML = author[0];

    setInterval(() => {
        h2.innerHTML = `"${text[i++]}"`;
        if (i == text.length) i = 0;
        p.innerHTML = author[i++];
        if (i == author.length) i = 0;
    }, 5000)


}
export {
    getQuoteData
}