/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let curHeight = height[i] > height[j] ? height[j] : height[i];
            let curArea = curHeight * (j - i);
            console.log(curArea, i);
            if (curArea > area) {
                area = curArea;
            }
        }
    }
    console.log(area);
    return area;
};

maxArea([1,8,6,2,5,4,8,3,7]);
