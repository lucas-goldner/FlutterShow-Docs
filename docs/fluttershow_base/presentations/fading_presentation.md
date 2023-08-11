---
sidebar_position: 2
---

# Fading Presentation

This presentation widget transitions between slides using a fading animation.

## Preview

![Fading Presentation Preview](./img/fading_presentation.gif)

## Constructor

```dart
const FadingPresentation({
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
FadingPresentation(
  pageIndex: 0,
  presentationPages: [PresentationSlide(slideWidget: Text('LOL'))],
  pageController: PageController(),
)
```
