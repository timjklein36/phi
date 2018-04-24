const PHI = (1 + Math.sqrt(5)) / 2;

exports.PHI = PHI;

/**
 * @typedef {Object} RectangularDimensions
 * @property {number} x
 *           The x-dimension of the rectangle.
 * @property {number} y
 *           The y-dimension of the rectangle.
 */

/** 
 * similarGoldenRect
 * 
 * Given any rectangular dimensions, x and y,
 * this will return the golden rectangle that
 * has the maximum area for a golden
 * rectangle that fits within the given
 * dimensions.
 * 
 * @param {number} x
 *        The x-dimension of the input rectangle.
 * @param {number} y
 *        The y-dimension of the input rectangle.
 * 
 * @returns {RectangularDimensions}
 *          The golden rectangle dimensions.
 * 
 **/
exports.similarGoldenRect = (x, y) => {
    const landscape = x > y;
    let larger = landscape ? x : y;
    let smaller = !landscape ? x : y;
    if (larger / smaller > PHI) {
        larger = PHI * smaller;
    } else {
        smaller = larger / PHI;
    }
    if (landscape) {
        return { x: larger, y: smaller };
    } else {
        return { x: smaller, y: larger };
    }
}
