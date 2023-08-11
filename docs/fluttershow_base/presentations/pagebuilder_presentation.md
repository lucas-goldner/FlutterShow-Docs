---
sidebar_position: 1
---

# PageBuilder Presentation

The `PageBuilder` presentation widget that is used as a default for FlutterShow⚡️.
Internally it uses a `PageView`, so it will switch between the slides like it would when using a PageView.

## Preview

![PageBuilder Presentation Preview](./img/pagebuilder_presentation.gif)

## Constructor

```dart
const PageBuilderPresentation({
  required this.presentationPages,
  required this.pageController,
  super.key,
});
```

Properties:

- `presentationPages` (required): The list of pages in the presentation.
- `pageController` (required): The controller used to navigate between the pages.

Example:

```dart
PageBuilderPresentation(
  presentationPages: [PresentationSlide(slideWidget: Text('LOL'))],
  pageController: PageController(),
)
```
