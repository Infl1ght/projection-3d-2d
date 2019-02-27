const assert = require('assert');
const { ProjectionCalculator3d, ProjectionCalculator2d }= require('../index.js');

describe('Projection calculator', () => {
  it('Calculate matrix for plane', () => {
    const points3d = [
      [23.2, 0],
      [28.8, 0],
      [23.2, 68],
      [28.8, 68],
    ];
    const points2d = [
      [891, 406],
      [1054, 389],
      [468, 266],
      [525, 263],
    ];
    const projectionCalculator = new ProjectionCalculator2d(points3d, points2d, 1280, 720);
    const projectedPoint = projectionCalculator.getUnprojectedPoint([891, 406]);
    const restoredPoint = projectionCalculator.getProjectedPoint(projectedPoint);
  });
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
    const projectionCalculator = new ProjectionCalculator3d(points3d, points2d, 1280, 720);
    const projectedPoint = projectionCalculator.get3dPointOnHeight([891, 406], 0);
    const restoredPoint = projectionCalculator.getProjectedPoint(projectedPoint);
  });
  it('Calculate matrix and speed', () => {
    const points3d = [
      [0, 0, 0],
      [32.3, 2.6, 0],
      [32.3, 22.6, 0],
      [4, 21.2, 0],
      [0, 0, 10],
      [0, -38.5, 10],
    ];
    const points2d = [
      [876, 443],
      [1852, 365],
      [1587, 208],
      [864, 241],
      [882, 58],
      [1449, 576],
    ];
    const projectionCalculator = new ProjectionCalculator3d(points3d, points2d, 1920, 1080);
    const projectedPoint1 = projectionCalculator.get3dPointOnHeight([821, 560], 0);
    const projectedPoint2 = projectionCalculator.get3dPointOnHeight([799, 504], 0);
  });
  it('Calculate speed before braking', () => {
    const points3d = [
      [0, 0, 0],
      [32.3, 2.6, 0],
      [32.3, 22.6, 0],
      [4, 21.2, 0],
      [0, 0, 10],
      [0, -38.5, 10],
    ];
    const points2d = [
      [550, 341],
      [1138, 287],
      [980, 192],
      [544, 215],
      [554, 104],
      [895, 415],
    ];
    const projectionCalculator = new ProjectionCalculator3d(points3d, points2d, 1280, 720);
    const projectedPoint = projectionCalculator.get3dPointOnHeight([638, 631], 0);
  });
});
