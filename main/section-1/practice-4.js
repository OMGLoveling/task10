
'use strict';


module.exports = function collectSameElements(collectionA, objectB) {
    return objectB.value.filter(function a(val) {
        return trans(collectionA,val);
    })
}
function trans(array,va)
{

    return array.some(function b(object)
    {
        if(object.key===va)
            return va;

    })
}

