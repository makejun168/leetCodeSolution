/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    if (start > destination) {
        let tmp = start;
        start = destination;
        destination = tmp;
    }
    let orderRes = 0;
    let revOrderRes = 0;
    distance.slice(start, destination).forEach(item => {
        orderRes += item
    });
    distance.slice(destination, distance.length).concat(distance.slice(0, start)).forEach(item => {
        revOrderRes += item
    });
    console.log(orderRes > revOrderRes ? revOrderRes : orderRes);
    return orderRes > revOrderRes ? revOrderRes : orderRes;
};

distanceBetweenBusStops([7,10,1,12,11,14,5,0], 7, 2)
