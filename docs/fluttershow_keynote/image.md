---
sidebar_position: 6
---

# Image

## Example

![Blank slide](./img/img.png)

```dart
final size = MediaQuery.sizeOf(context);

KeynoteImageSlide(
  image: Image.asset(
    'path_to_asset',
    fit: BoxFit.cover,
    height: size.height,
    width: size.width,
  ),
)
```

## Properties

The `KeynoteImageSlide` widget provides several properties to customize its appearance and behavior:

- `image` (required): The widget representing the image to display on the slide.
- `padding`: The optional padding for the slide.
