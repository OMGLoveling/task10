'use strict';

function trans(collection, ch) {
    return collection.find(elem => {
        return elem.key === ch;
    });
}


module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach(item => {
        let a = trans(result, item);
        a ? a.count++ : result.push({key: item, count: 1});
    });
    return result;
}
