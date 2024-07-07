/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    let minOperations = 0;
    bitPositionCounter = 0;
    while (n !== 0) {
        if (n & (1 << bitPositionCounter)) {
            if (n & (1 << bitPositionCounter + 1)) {
                n += Math.pow(2, bitPositionCounter);
            } else {
                n -= Math.pow(2, bitPositionCounter);
            }
            minOperations++;
        }
        bitPositionCounter++
    }
    return minOperations;
};

minOperations(156);
minOperations(39);
minOperations(54);