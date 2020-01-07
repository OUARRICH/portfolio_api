const splitString = (str, delimiter) => {
    if(!str) return [];

    const arr = str.split(delimiter);

    return arr;
}

module.exports = {
    splitString
};
