# Variations

## Variation 1

### Preview

![Big Fact Variation 1](../img/big_fact_one.png)

```dart
KeynoteBigFactSlideVariants.variantOne(
  titleText: '100%',
  subTitleText: 'Fact information',
  gradient: KeynoteGradients.quoteGradient,
)
```

### Constructor

```dart
  KeynoteBigFactSlide variantOne({
    required String titleText,
    required String subTitleText,
    required Gradient titleGradient,
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
    int? animationIndex,
    AnimationArguments? animationArguments,
  }) {
    return KeynoteBigFactSlide(
      titleText: titleText,
      subTitleText: subTitleText,
      titleGradient: titleGradient,
      titleStyle: titleStyle ?? KeynoteTextstyles.fact(),
      subtitleStyle: subtitleStyle ?? KeynoteTextstyles.subtitle(),
      titleAlignment: titleAlignment,
      subtitleAlignment: subtitleAlignment,
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

![Big Fact Variation 2](../img/big_fact_two.png)

```dart
KeynoteBigFactSlideVariants.variantTwo(
  titleText: '100%',
  subTitleText: 'Fact information',
)
```

### Constructor

```dart
  KeynoteBigFactSlide variantTwo({
    required String titleText,
    required String subTitleText,
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
    int? animationIndex,
    AnimationArguments? animationArguments,
  }) {
    return KeynoteBigFactSlide(
      titleText: titleText,
      subTitleText: subTitleText,
      titleStyle: titleStyle ?? KeynoteTextstyles.fact(variant: Variants.two),
      subtitleStyle:
          subtitleStyle ?? KeynoteTextstyles.subtitle(variant: Variants.two),
      titleAlignment: titleAlignment,
      subtitleAlignment: subtitleAlignment,
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
