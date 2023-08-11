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
  this.strutStyle,
  this.textAlign,
  this.textDirection,
  this.locale,
  this.softWrap,
  this.overflow,
  this.textScaleFactor,
  this.maxLines,
  this.semanticsLabel,
  this.textWidthBasis,
  this.textHeightBehavior,
  this.selectionColor,
});
```

Properties:

- `text` (required): The text to be displayed.
- `gradient` (required): The gradient applied to the text.
- `style`: The text style to be applied.
- `strutStyle`: The strut style to be applied.
- `textAlign`: The text alignment to be applied.
- `textDirection`: The text direction to be applied.
- `locale`: The locale to be applied.
- `softWrap`: Controls whether text should break at soft line breaks.
- `overflow`: Determines how text should be handled when it overflows.
- `textScaleFactor`: The number of font pixels for each logical pixel.
- `maxLines`: The maximum number of lines for the text to span.
- `semanticsLabel`: A label for the text used by screen reading software.
- `textWidthBasis`: Determines how the width of the text is calculated.
- `textHeightBehavior`: Specifies how to handle the height of the text.
- `selectionColor`: Specifies the color of the selection highlight.

Example:

```dart
GradientText(
  'Hello',
  gradient: LinearGradient(
    colors: [Colors.red, Colors.blue],
  )
)
```
