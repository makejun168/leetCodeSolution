/**
 * @param {number[][]} points
 * @return {number}
 */

var minTimeToVisitAllPoints = function(points) {
  let timeCount = 0;
  for (let i = 0; i< points.length; i++) {
    if (!points[i + 1]){
      break;
    }
    let durationX = Math.abs(points[i][0] - points[i + 1][0]);
    let durationY = Math.abs(points[i][1] - points[i + 1][1]);
    timeCount += durationX > durationY ? durationX : durationY;
  }
  return timeCount
};

let points = [[1,1],[3,4],[-1,0]];
minTimeToVisitAllPoints(points);
