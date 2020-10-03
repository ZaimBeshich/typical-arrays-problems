exports.min = function min(array) {
    if (Array.isArray(array) && array.length > 0) {
        return array.sort((a, b) => a - b)[0];
    } else return 0;
}

exports.max = function max(array) {
    if (Array.isArray(array) && array.length > 0) {
        return array.sort((a, b) => a - b)[array.length - 1];
    } else return 0;
}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length > 0) {
        return (array.reduce((sum, current) => sum + current, 0)) / array.length;
    } else return 0;
}