# Fade

A widget that performs a fade animation on its child widget.

## Preview

![Fade Animation](./img/fade.gif)

## Constructor

```dart
const FadeAnimation({
  required this.child,
  required this.delay,
  super.key,
});
```

Example:

```dart
FadeAnimation(
  child: MyWidget(),
  delay: 200,
)
```
