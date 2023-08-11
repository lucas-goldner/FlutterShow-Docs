# Variations

## Variation 1

### Preview

![Title and Photo Variation 1](../img/title_bullet_and_photo_one.png)

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
  KeynoteTitleBulletAndPhotoSlide variantOne({
    required String titleText,
    required String subTitleText,
    required Widget image,
    required List<String> bulletPoints,
    int? animationIndex,
    AnimationArguments? animationArguments,
    TextStyle? titleStyle,
    TextStyle? subtitleStyle,
    ListBullets? bullets,
    TextStyle? bulletTextStyle,
    Alignment? titleAlignment,
    Alignment? subtitleAlignment,
    Alignment? bulletPointsAlignment,
    TextAlign? titleTextAlignment,
    TextAlign? subtitleTextAlignment,
    TextAlign? bulletTextAlignment,
    EdgeInsets? padding,
    EdgeInsets? bulletPointsPadding,
    Widget? titleSubTitleSpacing,
    Widget? subtitleBulletSpacing,
    int? headerFlexUnits,
    int? bodyFlexUnits,
    int? footerFlexUnits,
    Widget? titleWidgetReplacement,
    Widget? subtitleWidgetReplacement,
    Widget? imageWidgetReplacement,
    Widget? bulletPointsWidgetReplacement,
  }) {
    return KeynoteTitleBulletAndPhotoSlide(
      image: image,
      titleText: titleText,
      subTitleText: subTitleText,
      bulletPoints: bulletPoints,
      titleStyle: titleStyle ?? KeynoteTextstyles.titleSmall(),
      subtitleStyle: subtitleStyle ?? KeynoteTextstyles.subtitleSmall(),
      bullets: bullets,
      bulletTextStyle: bulletTextStyle ?? KeynoteTextstyles.body(),
      titleAlignment: titleAlignment ?? Alignment.bottomCenter,
      subtitleAlignment: subtitleAlignment ?? Alignment.topCenter,
      bulletPointsAlignment: bulletPointsAlignment,
      titleTextAlignment: titleTextAlignment,
      subtitleTextAlignment: subtitleTextAlignment,
      bulletTextAlignment: bulletTextAlignment,
      padding: padding,
      bulletPointsPadding:
          bulletPointsPadding ?? horizontalPadding48 + horizontalPadding48,
      titleSubTitleSpacing: titleSubTitleSpacing,
      subtitleBulletSpacing: subtitleBulletSpacing,
      headerFlexUnits: headerFlexUnits,
      bodyFlexUnits: bodyFlexUnits,
      footerFlexUnits: footerFlexUnits,
      titleWidgetReplacement: titleWidgetReplacement,
      subtitleWidgetReplacement: subtitleWidgetReplacement,
      imageWidgetReplacement: imageWidgetReplacement,
      bulletPointsWidgetReplacement: bulletPointsWidgetReplacement,
      animationIndex: animationIndex,
      animationArguments: animationArguments,
    );
  }
```

## Variation 2

### Preview

![Title and Photo Variation 2](../img/title_bullet_and_photo_two.png)

```dart
KeynoteTitleBulletAndPhotoSlideVariants.variantTwo(
  titleText: 'Title',
  subTitleText: 'Subtitle',
  image: Image.asset(
    'path_to_asset',
    fit: BoxFit.fill,
    height: size.height,
    width: size.width,
  ),
  bulletPoints: const ['1', '2', '3'],
)
```

### Constructor

```dart
  KeynoteTitleBulletAndPhotoSlide variantTwo({
    required String titleText,
    required String subTitleText,
    required Widget image,
    required List<String> bulletPoints,
    int? animationIndex,
    AnimationArguments? animationArguments,
    TextStyle? titleStyle,
    TextStyle? subtitleStyle,
    ListBullets? bullets,
    TextStyle? bulletTextStyle,
    Alignment? titleAlignment,
    Alignment? subtitleAlignment,
    Alignment? bulletPointsAlignment,
    TextAlign? titleTextAlignment,
    TextAlign? subtitleTextAlignment,
    TextAlign? bulletTextAlignment,
    EdgeInsets? padding,
    EdgeInsets? bulletPointsPadding,
    Widget? titleSubTitleSpacing,
    Widget? subtitleBulletSpacing,
    int? headerFlexUnits,
    int? bodyFlexUnits,
    int? footerFlexUnits,
    Widget? titleWidgetReplacement,
    Widget? subtitleWidgetReplacement,
    Widget? imageWidgetReplacement,
    Widget? bulletPointsWidgetReplacement,
  }) {
    return KeynoteTitleBulletAndPhotoSlide(
      image: image,
      titleText: titleText,
      subTitleText: subTitleText,
      bulletPoints: bulletPoints,
      titleAlignment: titleAlignment ?? Alignment.bottomLeft,
      subtitleAlignment: subtitleAlignment ?? Alignment.topLeft,
      padding: padding ?? allPadding48,
      titleStyle: titleStyle ?? KeynoteTextstyles.titleSmall(),
      subtitleStyle: subtitleStyle ?? KeynoteTextstyles.subtitle(),
      bullets: bullets,
      bulletTextStyle: bulletTextStyle ?? KeynoteTextstyles.body(),
      bulletPointsPadding: bulletPointsPadding,
      titleSubTitleSpacing: titleSubTitleSpacing,
      subtitleBulletSpacing: subtitleBulletSpacing,
      headerFlexUnits: headerFlexUnits,
      bodyFlexUnits: bodyFlexUnits,
      footerFlexUnits: footerFlexUnits,
      titleWidgetReplacement: titleWidgetReplacement,
      subtitleWidgetReplacement: subtitleWidgetReplacement,
      imageWidgetReplacement: imageWidgetReplacement,
      bulletPointsWidgetReplacement: bulletPointsWidgetReplacement,
      animationIndex: animationIndex,
      animationArguments: animationArguments,
    );
  }
```
