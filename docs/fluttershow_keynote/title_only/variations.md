# Variations

## Variation 1

### Preview

![Title Only Variation 1](../img/title_only_one.png)

```dart
KeynoteTitleOnlySlideVariants.variantOne(
  titleText: 'Title',
  subTitleText: 'Subtitle',
)
```

### Constructor

```dart
  KeynoteTitleOnlySlide variantOne({
    required String titleText,
    required String subTitleText,
    int? animationIndex,
    AnimationArguments? animationArguments,
    TextStyle? titleStyle,
    TextStyle? subtitleStyle,
    Alignment? titleAlignment,
    Alignment? subtitleAlignment,
    TextAlign? titleTextAlignment,
    TextAlign? subtitleTextAlignment,
    Widget? titleSubTitleSpacing,
    EdgeInsets? padding,
    int? headerFlexUnits,
    int? bodyFlexUnits,
    Widget? titleWidgetReplacement,
    Widget? subtitleWidgetReplacement,
  }) {
    return KeynoteTitleOnlySlide(
      titleText: titleText,
      subTitleText: subTitleText,
      titleStyle: titleStyle ?? KeynoteTextstyles.titleSmall(),
      subtitleStyle: subtitleStyle ?? KeynoteTextstyles.subtitleSmall(),
      titleAlignment: titleAlignment ?? Alignment.bottomCenter,
      subtitleAlignment: subtitleAlignment ?? Alignment.topCenter,
      titleTextAlignment: titleTextAlignment,
      subtitleTextAlignment: subtitleTextAlignment,
      titleSubTitleSpacing: titleSubTitleSpacing,
      padding: padding,
      headerFlexUnits: headerFlexUnits,
      bodyFlexUnits: bodyFlexUnits,
      titleWidgetReplacement: titleWidgetReplacement,
      subtitleWidgetReplacement: subtitleWidgetReplacement,
      animationIndex: animationIndex,
      animationArguments: animationArguments,
    );
  }
```

## Variation 2

### Preview

![Title Only Variation 2](../img/title_only_two.png)

```dart
KeynoteTitleOnlySlideVariants.variantTwo(
  titleText: 'Title',
  subTitleText: 'Subtitle',
)
```

### Constructor

```dart
  KeynoteTitleOnlySlide variantTwo({
    required String titleText,
    required String subTitleText,
    int? animationIndex,
    AnimationArguments? animationArguments,
    TextStyle? titleStyle,
    TextStyle? subtitleStyle,
    Alignment? titleAlignment,
    Alignment? subtitleAlignment,
    TextAlign? titleTextAlignment,
    TextAlign? subtitleTextAlignment,
    Widget? titleSubTitleSpacing,
    EdgeInsets? padding,
    int? headerFlexUnits,
    int? bodyFlexUnits,
    Widget? titleWidgetReplacement,
    Widget? subtitleWidgetReplacement,
  }) {
    return KeynoteTitleOnlySlide(
      titleText: titleText,
      subTitleText: subTitleText,
      titleStyle: titleStyle ?? KeynoteTextstyles.titleSmall(),
      subtitleStyle: subtitleStyle ?? KeynoteTextstyles.subtitleSmall(),
      titleAlignment: titleAlignment ?? Alignment.bottomLeft,
      subtitleAlignment: subtitleAlignment ?? Alignment.topLeft,
      titleTextAlignment: titleTextAlignment,
      subtitleTextAlignment: subtitleTextAlignment,
      titleSubTitleSpacing: titleSubTitleSpacing,
      padding: padding,
      headerFlexUnits: headerFlexUnits,
      bodyFlexUnits: bodyFlexUnits,
      titleWidgetReplacement: titleWidgetReplacement,
      subtitleWidgetReplacement: subtitleWidgetReplacement,
      animationIndex: animationIndex,
      animationArguments: animationArguments,
    );
  }
```
