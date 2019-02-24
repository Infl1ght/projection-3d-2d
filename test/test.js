const assert = require('assert');
const ProjectionCalculator = require('../index.js');

describe('Projection calculator', () => {
  it('Calculate matrix', () => {
    const points3d = [
      [23.2, 0, 0],
      [23.2, 0, 2.35],
      [28.8, 0, 2.35],
      [28.8, 0, 0],
      [23.2, 68, 0],
      [23.2, 68, 2.35],
      [28.8, 68, 2.35],
      [28.8, 68, 0],
    ];
    const points2d = [
      [891, 406],
      [891, 326],
      [1055, 316],
      [1054, 389],
      [468, 266],
      [468, 242],
      [525, 241],
      [525, 263],
    ];
    const projectionCalculator = new ProjectionCalculator(points3d, points2d, 1280, 720);
    const projectedPoint = projectionCalculator.get3dPointOnHeight([891, 406], 0);
    const restoredPoint = projectionCalculator.getProjectedPoint(projectedPoint);
  });
});
