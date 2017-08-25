'use strict';



module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.filter(function a(val) {
        return objectB.value.includes(val);
    })
}
