const { insert } = require("./repository");
const { cellphoneFormatter } = require("./helpers");

function post(name, cellphone) {
    const formattedName = name.toUpperCase();
    const formattedCellphone = cellphoneFormatter(cellphone);
    insert(formattedName, formattedCellphone);
}

module.exports = {
    post
}

