# Variations

## Variation 1

### Preview

![Title Variation 1](../img/title_one.png)

```dart
KeynoteTitleSlideVariants.variantOne(
  titleText: 'Title',
  subTitleText: 'Subtitle',
  footerText: 'Footer',
  gradient: KeynoteGradients.titleSlideGradient,
)
```

### Constructor

```dart
  KeynoteTitleSlide variantOne({
    required String titleText,
    required String subTitleText,
    required String footerText,
    Gradient? gradient,
    int? animationIndex,
    AnimationArguments? animationArguments,
    TextStyle? titleStyle,
    TextStyle? subtitleStyle,
    TextStyle? footerStyle,
    Alignment? titleAlignment,
    Alignment? subtitleAlignment,
    Alignment? footerAlignment,
    TextAlign? titleTextAlignment,
    TextAlign? subtitleTextAlignment,
    TextAlign? footerTextAlignment,
    Widget? titleSubTitleSpacing,
    Widget? footerBottomSpacing,
    EdgeInsets? padding,
    int? headerFlexUnits,
    int? bodyFlexUnits,
    int? footerFlexUnits,
    Widget? titleWidgetReplacement,
    Widget? subtitleWidgetReplacement,
    Widget? footerWidgetReplacement,
  }) =>
      KeynoteTitleSlide(
        titleText: titleText,
        subTitleText: subTitleText,
        footerText: footerText,
        titleGradient: gradient,
        titleStyle: titleStyle ?? KeynoteTextstyles.title(),
        subtitleStyle: subtitleStyle ?? KeynoteTextstyles.subtitle(),
        footerStyle: footerStyle ?? KeynoteTextstyles.footer(),
        titleAlignment: titleAlignment ?? Alignment.bottomCenter,
        subtitleAlignment: subtitleAlignment ?? Alignment.topCenter,
        footerAlignment: footerAlignment ?? Alignment.bottomCenter,
        titleTextAlignment: titleTextAlignment,
        subtitleTextAlignment: subtitleTextAlignment,
        footerTextAlignment: footerTextAlignment,
        titleSubTitleSpacing: titleSubTitleSpacing,
        footerBottomSpacing: footerBottomSpacing,
        padding: padding,
        headerFlexUnits: headerFlexUnits,
        bodyFlexUnits: bodyFlexUnits,
        footerFlexUnits: footerFlexUnits,
        titleWidgetReplacement: titleWidgetReplacement,
        subtitleWidgetReplacement: subtitleWidgetReplacement,
        footerWidgetReplacement: footerWidgetReplacement,
        animationIndex: animationIndex,
        animationArguments: animationArguments,
      );
```

## Variation 2

### Preview

![Title Variation 2](../img/title_only_two.png)

```dart
KeynoteTitleSlideVariants.variantTwo(
  titleText: 'Title',
  subTitleText: 'Subtitle',
  footerText: 'Footer',
)
```

### Constructor

```dart
  KeynoteTitleSlide variantTwo({
    required String titleText,
    required String subTitleText,
    required String footerText,
    int? animationIndex,
    AnimationArguments? animationArguments,
    TextStyle? titleStyle,
    TextStyle? subtitleStyle,
    TextStyle? footerStyle,
    Alignment? titleAlignment,
    Alignment? subtitleAlignment,
    Alignment? footerAlignment,
    TextAlign? titleTextAlignment,
    TextAlign? subtitleTextAlignment,
    TextAlign? footerTextAlignment,
    Widget? titleSubTitleSpacing,
    Widget? footerBottomSpacing,
    EdgeInsets? padding,
    int? headerFlexUnits,
    int? bodyFlexUnits,
    int? footerFlexUnits,
    Widget? titleWidgetReplacement,
    Widget? subtitleWidgetReplacement,
    Widget? footerWidgetReplacement,
  }) =>
      KeynoteTitleSlide(
        titleText: titleText,
        subTitleText: subTitleText,
        footerText: footerText,
        titleStyle:
            titleStyle ?? KeynoteTextstyles.title(variant: Variants.two),
        subtitleStyle:
            subtitleStyle ?? KeynoteTextstyles.subtitle(variant: Variants.two),
        footerStyle:
            footerStyle ?? KeynoteTextstyles.footer(variant: Variants.two),
        titleAlignment: titleAlignment ?? Alignment.bottomLeft,
        subtitleAlignment: subtitleAlignment ?? Alignment.topLeft,
        footerAlignment: footerAlignment ?? Alignment.bottomLeft,
        titleTextAlignment: titleTextAlignment,
        subtitleTextAlignment: subtitleTextAlignment,
        footerTextAlignment: footerTextAlignment,
        titleSubTitleSpacing: titleSubTitleSpacing,
        footerBottomSpacing: footerBottomSpacing,
        padding: padding ?? allPadding48,
        headerFlexUnits: headerFlexUnits,
        bodyFlexUnits: bodyFlexUnits,
        footerFlexUnits: footerFlexUnits,
        titleWidgetReplacement: titleWidgetReplacement,
        subtitleWidgetReplacement: subtitleWidgetReplacement,
        footerWidgetReplacement: footerWidgetReplacement,
        animationIndex: animationIndex,
        animationArguments: animationArguments,
      );
```
