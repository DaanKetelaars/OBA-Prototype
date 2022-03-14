const getData = data => {
    const newData = data.results;
    console.log(newData);
    let keys = newData.map(item => {
        const title = item.titles[0];
        const id = item.id;
        const year = item.year
        const authors = item.authors;
        const description = item.description[0];
        const coverimage = item.coverimages[0];
        return {
            title,
            id,
            year,
            authors,
            description,
            coverimage,
        };
    })
    return keys;
}

export {
    getData
}