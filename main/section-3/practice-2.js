'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    collectionA.map(item => {
        let key = item.key;
        let count = item.count;
        if (objectB.value.includes(key))
        {
            count=count-parseInt(count/3)*1;
        }
        result.push({key, count});
    });
    return result;
}
