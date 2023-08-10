# Brightness Wrapper

A widget that takes two children, `lightThemeChild` and `darkThemeChild.`
Depending on the current brightness of the presentation, it will automatically display either
the light theme or dark theme version of the widget. This can be really useful if you want to show different images.

## Constructor

```dart
const BrightnessWrapper({
  required this.lightThemeChild,
  required this.darkThemeChild,
  super.key,
})
```

Properties:

- `lightThemeChild` (required): Specifies the widget to be displayed when the theme is light.
- `darkThemeChild`: (required): Specifies the widget to be displayed when the theme is dark.

Example:

```dart
BrightnessWrapper(
  lightThemeChild: Text("LightMode"),
  darkThemeChild: Text("DarkMode"),
),
```
