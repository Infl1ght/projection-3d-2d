# projection-3d-2d v2.0.4
Calculates [perspective transformation (projection)](https://en.wikipedia.org/wiki/3D_projection#Perspective_projection).

Project (transform) point coordinates from 3D to 2D and unproject it back.

## Installation
Using npm:

```npm i --save projection-3d-2d```

## Features
- Projecting points from 2D plane to 2D plane
- Unprojecting points from 2D plane to 2D plane
- Projecting points from 3D space to 2D plane
- Unprojecting points from 2D plane to 3D space
- Сalculation and access to [transformation matrix](https://en.wikipedia.org/wiki/Transformation_matrix#Perspective_projection)
- Сalculation and access to inversed transformation matrix

## Usage
You can calculate perspective transformations of points in 2 modes: 2D to 2D and 3D to 2D.

### 2D points to 2D (ProjectionCalculator2d)
If you want to make a perspective transformation of coordinates from plane to plane, use ProjectionCalculator2d.
To create a projection calculator, you need to specify 4 points on the plane: their screen coordinates and coordinates in the real world. Of these 4 points, any 3 points must not lie on one straight line.

### 3D points to 2D (ProjectionCalculator3d)
Transformation 3D coordinates to 2D is similar to the previous case, however, to create a projection calculator, you need 6 points, not 4. 2 points must be non-coplanar for others 4.
Another difference from the 2D projection calculator - when unprojecting, you must specify the height of point. 
```
    const projectionCalculator3d = new ProjectionCalculator3d(points3d, points2d);
    const height = 2.36;
    const upprojectedPoint = projectionCalculator.getUnprojectedPoint(somePointScreenCoords, height);
```


## Example 2D to 2D
For example, let's take the penalty area of a football field: we know its dimensions and, accordingly, we know the coordinates of 4 points. After creating the projection calculator, we can calculate the coordinates of all the players on the field. The reverse operation is also available: it is possible to calculate the screen coordinates of any points in the field. This allows a grid to be drawn on the screen.
![Example image](https://user-images.githubusercontent.com/19838931/109158071-ef0d9d00-7783-11eb-8d1d-745d4fc5cd75.png)

```javascript
import { ProjectionCalculator2d } from 'projection-3d-2d';

const points3d = [ // Coordinates of penalty area points
  [0, 0],
  [16.5, 0],
  [16.5, 40],
  [0, 40],
]; 
const points2d = [ // Coordinates of the same points on screen
  [744, 303],
  [486, 349],
  [223, 197],
  [424, 176],
];
const projectionCalculator = new ProjectionCalculator2d(points3d, points2d); 

const goalkeeperCoords = projectionCalculator.getUnprojectedPoint([517, 227]); // Let's find coords of the goalkeeper
console.log(goalkeeperCoords); // [2.1288063865612386, 21.613738879640383] - the goalkeeper two meters away from the end line

const penaltyPointScreenCoords = projectionCalculator.getProjectedPoint([11, 20]); // Find the coordinates of the penalty point on the screen
console.log(penaltyPointScreenCoords); // [409.6322780579693, 247.83730935164368]

// Access to transformation matrix:
console.log(projectionCalculator.resultMatrix); 
// Matrix(3) [
//  [ -18.7618522018522, -3.522289674289675, 744 ],
//  [ 0.5434435834435838, -1.31632778932779, 303 ],
//  [ -0.006431046431046427, 0.010560637560637558, 1 ],
//  rows: 3,
//  columns: 3
//]

// Access to inversed transformation matrix:
console.log(projectionCalculator.resultMatrixInversed); 
// Matrix(3) [
//  [ -0.04936726859836615, 0.12438996812186748, -0.9609125037414228 ],
//  [ -0.027240978581837424, -0.15278635813291436, 66.56155457916007 ],
//  [ -0.000029801094930157486, 0.002413479012999591, 0.2908878736891611 ],
//  rows: 3,
//  columns: 3
//]

```

## Resources
[Wikipedia article about perspective transformations](https://en.wikipedia.org/wiki/3D_projection#Perspective_projection)

## Lisence
[MIT](https://github.com/Infl1ght/projection-3d-2d/blob/master/LICENSE)
