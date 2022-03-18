function getData(data) {
    console.log(data);
    const newData = data.results;

    let keys = newData.map(item => {
        const title = item.titles[0];
        const summaries = item.summaries;
        const detailLink = item.detailLink
        return {
            title,
            detailLink,
            summaries,
        };
    })

    return keys
}

export {
    getData
}