# Variations

## Variation 1

### Preview

![Title and Photo Variation 1](../img/title_and_photo_one.png)

```dart
KeynoteTitleAndPhotoSlideVariants.variantOne(
  image: Image.asset(
    'path_to_asset',
      fit: BoxFit.fill,
      height: size.height,
      width: size.width,
    ),
    titleText: t.flutterShow,
    subTitleText: t.presentationsInFlutter,
    headingText: t.author,
    gradient: FSGradients.background,
)
```

### Constructor

```dart
KeynoteTitleAndPhotoSlide variantOne({
    required String titleText,
    required Widget image,
    required String subTitleText,
    required String headingText,
    required Gradient gradient,
    int? animationIndex,
    AnimationArguments? animationArguments,
  }) =>
      KeynoteTitleAndPhotoSlide(
        titleText: titleText,
        subTitleText: subTitleText,
        headingText: headingText,
        titleGradient: gradient,
        titleStyle: KeynoteTextstyles.title(),
        subtitleStyle: KeynoteTextstyles.subtitle(),
        headingStyle: KeynoteTextstyles.heading(),
        titleAlignment: Alignment.bottomCenter,
        subtitleAlignment: Alignment.topCenter,
        headingAlignment: Alignment.bottomCenter,
        image: image,
        variant: Variants.one,
        animationIndex: animationIndex,
        animationArguments: animationArguments,
      )
```

## Variation 2

### Preview

![Title and Photo Variation 2](../img/title_and_photo_two.png)

```dart
KeynoteTitleAndPhotoSlideVariants.variantTwo(
  image: Image.asset(
    'path_to_asset',
    fit: BoxFit.fill,
    height: size.height,
    width: size.width,
  ),
  titleText: t.flutterShow,
  subTitleText: t.presentationsInFlutter,
  headingText: t.author,
)
```

### Constructor

```dart
KeynoteTitleAndPhotoSlide variantTwo({
    required String titleText,
    required String subTitleText,
    required String headingText,
    required Widget image,
    int? animationIndex,
    AnimationArguments? animationArguments,
  }) =>
      KeynoteTitleAndPhotoSlide(
        titleText: titleText,
        subTitleText: subTitleText,
        headingText: headingText,
        titleStyle: KeynoteTextstyles.title(),
        subtitleStyle: KeynoteTextstyles.subtitle(),
        headingStyle: KeynoteTextstyles.heading(),
        titleAlignment: Alignment.bottomLeft,
        subtitleAlignment: Alignment.topLeft,
        headingAlignment: Alignment.topLeft,
        image: image,
        variant: Variants.two,
        animationIndex: animationIndex,
        animationArguments: animationArguments,
      )
```
