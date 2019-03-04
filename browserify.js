const projectionModule = require('./index.js');

document.ProjectionCalculator2d = function (...theArgs) {
  return new projectionModule.ProjectionCalculator2d(...theArgs);
}

document.ProjectionCalculator3d = function (...theArgs) {
  return new projectionModule.ProjectionCalculator3d(...theArgs);
}
