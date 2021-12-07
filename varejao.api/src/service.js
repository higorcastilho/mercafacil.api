const { insert, get } = require("./repository");
const { cellphoneFormatter } = require("./helpers");

async function post(name, cellphone) {
    // const formattedName = name.toUpperCase();
    // const formattedCellphone = cellphoneFormatter(cellphone);
    await insert(name, cellphone);
}

async function getAll() {
    const result = await get();
    return result;
}

module.exports = {
    post,
    getAll
}

