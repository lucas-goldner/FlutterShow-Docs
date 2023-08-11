# Curvy Arrow

A widget that represents a curvy arrow.

## Preview

![Curvy Arrow Preview](./img/curvy_arrow.png)

## Constructor

```dart
const CurvyArrow(
  this.height,
  this.width, {
  this.color,
  this.strokeWidth,
  this.cubicBezier,
  super.key,
});
```

Properties:

- `height` (required): The height of the curvy arrow.
- `width`: (required): The width of the curvy arrow.
- `color`: The color of the curvy arrow.
- `strokeWidth`: The width of the stroke used to draw the arrow.
- `cubicBezier`: The parameters for the cubic bezier curve used to draw the arrow.

About the cubic bezier:
This will be passed into the [relativeCubicTo](https://api.flutter.dev/flutter/dart-ui/Path/relativeCubicTo.html) method.

- `x1`: (required): The y-coordinate of the first control point.
- `y1`: (required): The y-coordinate of the first control point.
- `x2`: (required): The x-coordinate of the second control point.
- `y2`: (required): The y-coordinate of the second control point.
- `x3`: (required): The x-coordinate of the end point.
- `y3`: (required): The y-coordinate of the end point.

Example:

```dart
CurvyArrow(
  100,
  500,
  strokeWidth: 4.0,
  cubicBezier: CubicBezier(
    x1: 0,
    y1: 40,
    x2: 0.25,
    y2: 30,
    x3: 0.5,
    y3: -20,
  ),
)
```
