'use strict';


function trans(collection, ch) {
    return collection.find(elem => {
        return elem.key === ch;
    });
}

function summarize(collection) {
    let result = [];
    collection.forEach(item => {
        let a = trans(result, item);
        a ? a.count++ : result.push({key: item, count: 1});
    });
    return result;
}


function discount(collection, promotionItems) {
    let result = [];
    collection.map(item => {
        let key = item.key;
        let count = item.count;
        if (promotionItems.includes(key))
        {
            count=count-parseInt(count/3)*1;
        }
        result.push({key, count});
    });
    return result;

}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}
