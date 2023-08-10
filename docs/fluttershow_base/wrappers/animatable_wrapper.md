# Animatable Wrapper

A widget that applies animations to its child based on the provided index values.
Can be used to animate the appearance of certain widgets.

## Constructor

```dart
const AnimatableWrapper(
  this.child, {
  this.animationIndex,
  this.indexToShowAt,
  this.animationArguments,
  super.key,
})
```

Properties:

- `child` (required): The widget to be wrapped and potentially animated.
- `animationArguments`: The optional animation arguments for the child animation.
- `animationIndex`: The optional index at which the animation should start.
- `indexToShowAt`: The optional index at which the child should become visible. This is required if [animationIndex] is set.

Example:

```dart
AnimatableWrapper(
  child,
  animationIndex: 2,
  indexToShowAt: 1,
  animationArguments: AnimationArguments(
    animation: DirectionalAnimation(
      child: MyWidget(),
      delay: 200,
      direction: DirectionalAnimationDirection.left,
    ),
  ),
)
```
