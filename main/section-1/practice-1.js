'use strict';


module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(function a(val){
        return collectionB.includes(val);
    })
};
