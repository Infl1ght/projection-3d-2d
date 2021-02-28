
declare module 'projection-3d-2d' {
  import { Matrix } from 'ml-matrix';

  class ProjectionCalculator2d {
    constructor(points3d: [[number, number], [number, number], [number, number], [number, number]], points2d: [[number, number], [number, number], [number, number], [number, number]]);
    getProjectedPoint(point3d: [number, number]): [number, number];
    getUnprojectedPoint(point2d: [number, number]): [number, number];
    readonly resultMatrix: Matrix;
    readonly resultMatrixInversed: Matrix;
  }

  class ProjectionCalculator3d {
    constructor(points3d: [[number, number, number], [number, number, number], [number, number, number], [number, number, number], [number, number, number], [number, number, number]], points2d: [[number, number], [number, number], [number, number], [number, number], [number, number], [number, number]]);
    getProjectedPoint(point3d: [number, number, number]): [number, number];
    getUnprojectedPoint(point2d: [number, number], height: number): [number, number, number];
    readonly resultMatrix: Matrix;
    readonly resultMatrixInversed: Matrix;
  }
}
