# Variations

## Variation 1

### Preview

![Quote Variation 1](../img/quote_one.png)

```dart
KeynoteQuoteSlideVariants.variantOne(
  quoteText: '"Notable Quote"',
  attributionText: 'Attribution',
  gradient: FSGradients.titlePrimary,
)
```

### Constructor

```dart
  KeynoteQuoteSlide variantOne({
    required String quoteText,
    required String attributionText,
    required Gradient quoteGradient,
    TextStyle? quoteStyle,
    TextStyle? attributionStyle,
    TextAlign? quoteTextAlignment,
    TextAlign? attributionTextAlignment,
    Alignment? quoteAlignment,
    Alignment? attributionAlignment,
    Widget? quoteAttributionSpacing,
    EdgeInsets? padding,
    int? headerFlexUnits,
    int? bodyFlexUnits,
    Widget? quoteWidgetReplacement,
    Widget? attributionWidgetReplacement,
    int? animationIndex,
    AnimationArguments? animationArguments,
  }) {
    return KeynoteQuoteSlide(
      quoteText: quoteText,
      attributionText: attributionText,
      quoteGradient: quoteGradient,
      quoteStyle: quoteStyle ?? KeynoteTextstyles.quote(),
      attributionStyle: attributionStyle ?? KeynoteTextstyles.attribution(),
      quoteTextAlignment: quoteTextAlignment,
      attributionTextAlignment: attributionTextAlignment,
      quoteAlignment: quoteAlignment ?? Alignment.bottomCenter,
      attributionAlignment: attributionAlignment ?? Alignment.bottomCenter,
      quoteAttributionSpacing: quoteAttributionSpacing,
      padding: padding,
      headerFlexUnits: headerFlexUnits,
      bodyFlexUnits: bodyFlexUnits,
      quoteWidgetReplacement: quoteWidgetReplacement,
      attributionWidgetReplacement: attributionWidgetReplacement,
      animationIndex: animationIndex,
      animationArguments: animationArguments,
    );
  }
```

## Variation 2

### Preview

![Quote Variation 2](../img/quote_two.png)

```dart
KeynoteQuoteSlideVariants.variantTwo(
  quoteText: '"Notable Quote"',
  attributionText: 'Attribution',
)
```

### Constructor

```dart
  KeynoteQuoteSlide variantTwo({
    required String quoteText,
    required String attributionText,
    TextStyle? quoteStyle,
    TextStyle? attributionStyle,
    Alignment? quoteAlignment,
    Alignment? attributionAlignment,
    TextAlign? quoteTextAlignment,
    TextAlign? attributionTextAlignment,
    Widget? quoteAttributionSpacing,
    EdgeInsets? padding,
    int? headerFlexUnits,
    int? bodyFlexUnits,
    Widget? quoteWidgetReplacement,
    Widget? attributionWidgetReplacement,
    int? animationIndex,
    AnimationArguments? animationArguments,
  }) {
    return KeynoteQuoteSlide(
      quoteText: quoteText,
      attributionText: attributionText,
      quoteStyle: quoteStyle ?? KeynoteTextstyles.quote(variant: Variants.two),
      attributionStyle: attributionStyle ??
          KeynoteTextstyles.attribution(variant: Variants.two),
      quoteAlignment: quoteAlignment ?? Alignment.bottomLeft,
      attributionAlignment: attributionAlignment ?? Alignment.centerLeft,
      quoteTextAlignment: quoteTextAlignment,
      attributionTextAlignment: attributionTextAlignment,
      quoteAttributionSpacing: quoteAttributionSpacing,
      padding: padding,
      headerFlexUnits: headerFlexUnits,
      bodyFlexUnits: bodyFlexUnits,
      quoteWidgetReplacement: quoteWidgetReplacement,
      attributionWidgetReplacement: attributionWidgetReplacement,
      animationIndex: animationIndex,
      animationArguments: animationArguments,
    );
  }
```
