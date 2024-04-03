let convertrupees = (dollor) => {
    if (typeof dollor === 'number') {
        return dollor * 83.43
    } else {
        throw Error ('Amount Must Be In Numbers')
    }
}
try {
    console.log(convertrupees(19))
} catch (xname) {
    console.error(xname);
}

console.log('Try Catch Method Is Use For Run Complete Program If Inside Error Comes')