const cleanData = keys => {
    console.log(keys);
    let cleanedData = keys;
    return cleanedData = cleanedData.filter(item => item.coverimage !== null);
}

export {
    cleanData
}