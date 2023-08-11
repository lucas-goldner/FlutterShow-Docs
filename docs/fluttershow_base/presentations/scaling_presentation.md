---
sidebar_position: 3
---

# Scaling Presentation

This presentation widget transitions between slides using a scaling animation.

## Preview

![Scaling Presentation Preview](./img/scaling_presentation.gif)

## Constructor

```dart
const ScalingPresentation({
  required this.pageIndex,
  required this.presentationPages,
  required this.pageController,
  this.duration,
  this.reverseDuration,
  this.switchInCurve,
  this.switchOutCurve,
  super.key,
});
```

Properties:

- `pageIndex` (required): The index of the current slide.
- `presentationPages` (required): The list of slide widgets.
- `pageController` (required): This controller needs to be provided internally from the presentation controller, but won't be used for this presentation.
- `duration`: The duration of the switch-in animation.
- `reverseDuration`: The duration of the switch-out animation.
- `switchInCurve`: The curve of the switch-in animation.
- `switchOutCurve`: The curve of the switch-out animation.

Example:

```dart
ScalingPresentation(
  pageIndex: 0,
  presentationPages: [PresentationSlide(slideWidget: Text('LOL'))],
  pageController: PageController(),
)
```
