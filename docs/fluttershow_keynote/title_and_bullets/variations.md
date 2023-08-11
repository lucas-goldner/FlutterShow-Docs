# Variations

## Variation 1

### Preview

![Title and Bullets Variation 1](../img/title_and_bullets_one.png)

```dart
KeynoteTitleAndBulletsSlideVariants.variantOne(
  titleText: 'Title',
  subTitleText: 'Subtitle',
  bulletPoints: ['1', '2', '3'],
)
```

### Constructor

```dart
  KeynoteTitleAndBulletsSlide variantOne({
    required String titleText,
    required String subTitleText,
    required List<String>? bulletPoints,
    TextStyle? bulletTextStyle,
    ListBullets? bullets,
    TextStyle? titleStyle,
    TextStyle? subtitleStyle,
    Alignment? bulletPointsAlignment,
    Alignment? titleAlignment,
    Alignment? subtitleAlignment,
    TextAlign? titleTextAlignment,
    TextAlign? subtitleTextAlignment,
    TextAlign? bulletTextAlignment,
    Widget? titleSubTitleSpacing,
    Widget? subtitleBulletTextSpacing,
    EdgeInsets? bulletPointsPadding,
    EdgeInsets? padding,
    int? headerFlexUnits,
    int? bodyFlexUnits,
    int? footerFlexUnits,
    Widget? titleWidgetReplacement,
    Widget? subtitleWidgetReplacement,
    Widget? bulletPointsWidgetReplacement,
    int? animationIndex,
    AnimationArguments? animationArguments,
  }) {
    return KeynoteTitleAndBulletsSlide(
      titleText: titleText,
      subTitleText: subTitleText,
      bulletPoints: bulletPoints,
      bulletTextStyle: bulletTextStyle ?? KeynoteTextstyles.body(),
      bullets: bullets ?? ListBullets.circle,
      titleStyle: titleStyle ?? KeynoteTextstyles.titleSmall(),
      subtitleStyle: subtitleStyle ?? KeynoteTextstyles.subtitleSmall(),
      bulletPointsAlignment: bulletPointsAlignment ?? Alignment.topLeft,
      titleAlignment: titleAlignment ?? Alignment.bottomCenter,
      subtitleAlignment: subtitleAlignment ?? Alignment.topCenter,
      titleTextAlignment: titleTextAlignment,
      subtitleTextAlignment: subtitleTextAlignment,
      bulletTextAlignment: bulletTextAlignment,
      titleSubTitleSpacing: titleSubTitleSpacing,
      subtitleBulletTextSpacing: subtitleBulletTextSpacing,
      bulletPointsPadding: bulletPointsPadding,
      padding: padding,
      headerFlexUnits: headerFlexUnits,
      bodyFlexUnits: bodyFlexUnits,
      footerFlexUnits: footerFlexUnits,
      titleWidgetReplacement: titleWidgetReplacement,
      subtitleWidgetReplacement: subtitleWidgetReplacement,
      bulletPointsWidgetReplacement: bulletPointsWidgetReplacement,
      animationIndex: animationIndex,
      animationArguments: animationArguments,
    );
  }
```

## Variation 2

### Preview

![Title and Bullets Variation 2](../img/title_and_bullets_two.png)

```dart
KeynoteTitleAndBulletsSlideVariants.variantTwo(
  titleText: 'Title',
  subTitleText: 'Subtitle',
  bulletPoints: ['1', '2', '3'],
)
```

### Constructor

```dart
  KeynoteTitleAndBulletsSlide variantTwo({
    required String titleText,
    required String subTitleText,
    required List<String>? bulletPoints,
    TextStyle? bulletTextStyle,
    ListBullets? bullets,
    TextStyle? titleStyle,
    TextStyle? subtitleStyle,
    Alignment? bulletPointsAlignment,
    Alignment? titleAlignment,
    Alignment? subtitleAlignment,
    TextAlign? titleTextAlignment,
    TextAlign? subtitleTextAlignment,
    TextAlign? bulletTextAlignment,
    Widget? titleSubTitleSpacing,
    Widget? subtitleBulletText,
    Widget? subtitleBulletTextSpacing,
    EdgeInsets? bulletPointsPadding,
    EdgeInsets? padding,
    int? headerFlexUnits,
    int? bodyFlexUnits,
    int? footerFlexUnits,
    Widget? titleWidgetReplacement,
    Widget? subtitleWidgetReplacement,
    Widget? bulletPointsWidgetReplacement,
    int? animationIndex,
    AnimationArguments? animationArguments,
  }) {
    return KeynoteTitleAndBulletsSlide(
      titleText: titleText,
      subTitleText: subTitleText,
      bulletPoints: bulletPoints,
      bulletTextStyle: bulletTextStyle ?? KeynoteTextstyles.body(),
      bullets: bullets ?? ListBullets.circle,
      titleStyle: titleStyle ?? KeynoteTextstyles.titleSmall(),
      subtitleStyle: subtitleStyle ?? KeynoteTextstyles.subtitle(),
      bulletPointsAlignment: bulletPointsAlignment ?? Alignment.topLeft,
      titleAlignment: titleAlignment ?? Alignment.bottomLeft,
      subtitleAlignment: subtitleAlignment ?? Alignment.topLeft,
      titleTextAlignment: titleTextAlignment,
      subtitleTextAlignment: subtitleTextAlignment,
      bulletTextAlignment: bulletTextAlignment,
      titleSubTitleSpacing: titleSubTitleSpacing,
      subtitleBulletTextSpacing: subtitleBulletTextSpacing,
      bulletPointsPadding: bulletPointsPadding,
      padding: padding,
      headerFlexUnits: headerFlexUnits,
      bodyFlexUnits: bodyFlexUnits,
      footerFlexUnits: footerFlexUnits,
      titleWidgetReplacement: titleWidgetReplacement,
      subtitleWidgetReplacement: subtitleWidgetReplacement,
      bulletPointsWidgetReplacement: bulletPointsWidgetReplacement,
      animationIndex: animationIndex,
      animationArguments: animationArguments,
    );
  }
```
