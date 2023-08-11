# Variations

## Variation 1

### Preview

![Title and Photo Alt Variation 1](../img/title_and_photo_alt_one.png)

```dart
final size = MediaQuery.sizeOf(context);

KeynoteTitleAndPhotoAltSlideVariants.variantOne(
  image: Image.asset(
    'path_to_image',
    fit: BoxFit.fill,
    height: size.height,
    width: size.width,
  ),
  titleText: 'Title',
  subTitleText: 'Subtitle',
)
```

### Constructor

```dart
  KeynoteTitleAndPhotoAltSlide variantOne({
    required String titleText,
    required String subTitleText,
    required Widget image,
    TextStyle? titleStyle,
    TextStyle? subtitleStyle,
    Alignment? titleAlignment,
    Alignment? subtitleAlignment,
    TextAlign? titleTextAlignment,
    TextAlign? subtitleTextAlignment,
    EdgeInsets? padding,
    Widget? titleSubTitleSpacing,
    Widget? titleWidgetReplacement,
    Widget? subtitleWidgetReplacement,
    Widget? imageWidgetReplacement,
    int? animationIndex,
    AnimationArguments? animationArguments,
  }) {
    return KeynoteTitleAndPhotoAltSlide(
      image: image,
      titleText: titleText,
      subTitleText: subTitleText,
      titleStyle: titleStyle ?? KeynoteTextstyles.titleSmall(),
      subtitleStyle: subtitleStyle ?? KeynoteTextstyles.subtitle(),
      titleAlignment: titleAlignment,
      subtitleAlignment: subtitleAlignment,
      titleTextAlignment: titleTextAlignment,
      subtitleTextAlignment: subtitleTextAlignment,
      padding: padding,
      titleSubTitleSpacing: titleSubTitleSpacing,
      titleWidgetReplacement: titleWidgetReplacement,
      subtitleWidgetReplacement: subtitleWidgetReplacement,
      imageWidgetReplacement: imageWidgetReplacement,
      animationIndex: animationIndex,
      animationArguments: animationArguments,
    );
  }
```

## Variation 2

### Preview

![Title and Photo Alt Variation 2](../img/title_and_photo_alt_two.png)

```dart
KeynoteTitleAndPhotoAltSlideVariants.variantTwo(
  image: Image.asset(
    'path_to_asset',
    fit: BoxFit.fill,
    height: size.height,
    width: size.width,
  ),
  titleText: 'Title',
  subTitleText: 'Subtitle',
)
```

### Constructor

```dart
  KeynoteTitleAndPhotoAltSlide variantTwo({
    required String titleText,
    required String subTitleText,
    required Widget image,
    int? animationIndex,
    AnimationArguments? animationArguments,
    TextStyle? titleStyle,
    TextStyle? subtitleStyle,
    Alignment? titleAlignment,
    Alignment? subtitleAlignment,
    TextAlign? titleTextAlignment,
    TextAlign? subtitleTextAlignment,
    EdgeInsets? padding,
    Widget? titleSubTitleSpacing,
    Widget? titleWidgetReplacement,
    Widget? subtitleWidgetReplacement,
    Widget? imageWidgetReplacement,
  }) {
    return KeynoteTitleAndPhotoAltSlide(
      image: image,
      titleText: titleText,
      subTitleText: subTitleText,
      titleStyle: titleStyle ?? KeynoteTextstyles.titleSmall(),
      subtitleStyle: subtitleStyle ?? KeynoteTextstyles.subtitle(),
      titleAlignment: titleAlignment ?? Alignment.bottomLeft,
      subtitleAlignment: subtitleAlignment ?? Alignment.topLeft,
      titleTextAlignment: titleTextAlignment,
      subtitleTextAlignment: subtitleTextAlignment,
      padding: padding,
      titleSubTitleSpacing: titleSubTitleSpacing,
      titleWidgetReplacement: titleWidgetReplacement,
      subtitleWidgetReplacement: subtitleWidgetReplacement,
      imageWidgetReplacement: imageWidgetReplacement,
      animationIndex: animationIndex,
      animationArguments: animationArguments,
    );
  }
```
