---
sidebar_position: 1
---

# GradientText

A widget that displays text with a gradient effect.

## Constructor

```dart
const GradientText(
  this.text, {
  required this.gradient,
  super.key,
  this.style,
})
```

Example:

```dart
GradientText(
  'Hello',
  gradient: LinearGradient(
    colors: [Colors.red, Colors.blue],
  )
)
```
