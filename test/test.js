const assert = require('assert');
const { ProjectionCalculator3d, ProjectionCalculator2d } = require('../index.js');

describe('Projection calculator', () => {
  const EPSILON = 0.0001;
  it('Test 2d projection', () => {
    const points3d = [
      [0, 0],
      [16.5, 0],
      [16.5, 40],
      [0, 40],
    ];
    const points2d = [
      [744, 303],
      [486, 349],
      [223, 197],
      [424, 176],
    ];
    const projectionCalculator = new ProjectionCalculator2d(points3d, points2d);
    const projectedPoint = projectionCalculator.getUnprojectedPoint(points2d[0]);
    const restoredPoint = projectionCalculator.getProjectedPoint(projectedPoint);
    assert.strictEqual(points2d[0][0] - EPSILON < restoredPoint[0], true);
    assert.strictEqual(restoredPoint[0] > points2d[0][0] - EPSILON, true);
    assert.strictEqual(points2d[0][1] - EPSILON < restoredPoint[1], true);
    assert.strictEqual(restoredPoint[1] > points2d[0][1] - EPSILON, true);
  });
  it('Test 3d projection', () => {
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
    const projectionCalculator = new ProjectionCalculator3d(points3d, points2d);
    const projectedPoint = projectionCalculator.getUnprojectedPoint(points2d[0], 0);
    const restoredPoint = projectionCalculator.getProjectedPoint(projectedPoint);
    assert.strictEqual(points2d[0][0] - EPSILON < restoredPoint[0], true);
    assert.strictEqual(restoredPoint[0] > points2d[0][0] - EPSILON, true);
    assert.strictEqual(points2d[0][1] - EPSILON < restoredPoint[1], true);
    assert.strictEqual(restoredPoint[1] > points2d[0][1] - EPSILON, true);
  });
});
