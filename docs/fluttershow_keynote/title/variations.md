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
  }) =>
      KeynoteTitleSlide(
        titleText: titleText,
        subTitleText: subTitleText,
        footerText: footerText,
        titleGradient: gradient,
        titleStyle: KeynoteTextstyles.title(),
        subtitleStyle: KeynoteTextstyles.subtitle(),
        footerStyle: KeynoteTextstyles.footer(),
        titleAlignment: Alignment.bottomCenter,
        subtitleAlignment: Alignment.topCenter,
        footerAlignment: Alignment.bottomCenter,
        animationIndex: animationIndex,
        animationArguments: animationArguments,
      )
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
  }) =>
      KeynoteTitleSlide(
        titleText: titleText,
        subTitleText: subTitleText,
        footerText: footerText,
        titleStyle: KeynoteTextstyles.title(variant: Variants.two),
        subtitleStyle: KeynoteTextstyles.subtitle(variant: Variants.two),
        footerStyle: KeynoteTextstyles.footer(variant: Variants.two),
        titleAlignment: Alignment.bottomLeft,
        subtitleAlignment: Alignment.topLeft,
        footerAlignment: Alignment.bottomLeft,
        padding: allPadding48,
        animationIndex: animationIndex,
        animationArguments: animationArguments,
      )
```
