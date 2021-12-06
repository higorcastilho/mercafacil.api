function cellphoneFormatter(cellphone) {
    const DDICode = `+${cellphone.slice(0,2)}`;
    const DDD = `(${cellphone.slice(2, 4)})`;
    const firstChunk = cellphone.slice(4, 9);
    const secondChunk = cellphone.slice(9, 13) 

    const formattedCellphone = `${DDICode} ${DDD} ${firstChunk}-${secondChunk}`;
    return formattedCellphone;
}

module.exports = {
    cellphoneFormatter
}