'use strict';

function trans(collection, ch) {

    return collection.find(elem => {
        return elem.key === ch;
    });

}

function summarize(collection) {
    let result = [];
    collection.map(item => {
        let obj = trans(result, item);
        obj ? obj.count++ :  result.push({key: item, count: 1});
    });
    return result;
}


function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    collection.forEach(item =>{
        if (item.length === 1) {
            result.push(item);
        } else {
            let item_arr = item.split('-');
            let {key, count} = {key: item_arr[0], count: parseInt(item_arr[1])};
            push(result, key, count);
        }
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
    let expandedArray = expand(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB.value);
}
