const { insert } = require("./repository");
const { cellphoneFormatter } = require("./helpers");

async function post(name, cellphone) {
    const formattedName = name.toUpperCase();
    const formattedCellphone = cellphoneFormatter(cellphone);
    await insert(formattedName, formattedCellphone);
}

module.exports = {
    post
}

