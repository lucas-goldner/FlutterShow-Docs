# Variations

## Variation 1

### Preview

![Agenda Variation 1](../img/agenda_one.png)

```dart
KeynoteAgendaSlideVariants.variantOne(
  titleText: "Agenda",
  subTitleText: "Agenda Subtitle",
)
```

### Constructor

```dart
KeynoteAgendaSlide variantOne({
    required String titleText,
    required String subTitleText,
    Widget? footerWidget,
    int? animationIndex,
    AnimationArguments? animationArguments,
  }) =>
      KeynoteAgendaSlide(
        titleText: titleText,
        subTitleText: subTitleText,
        titleStyle: KeynoteTextstyles.titleSmall(),
        subtitleStyle: KeynoteTextstyles.subtitleSmall(),
        titleAlignment: Alignment.bottomCenter,
        subtitleAlignment: Alignment.topCenter,
        footerWidget: footerWidget,
        animationIndex: animationIndex,
        animationArguments: animationArguments,
    )
```

## Variation 2

### Preview

![Agenda Variation 1](../img/agenda_two.png)

```dart
KeynoteAgendaSlideVariants.variantTwo(
  titleText: "Agenda",
  subTitleText: "Agenda Subtitle",
)
```

### Constructor

```dart
KeynoteAgendaSlide variantTwo({
  required String titleText,
  required String subTitleText,
  Widget? footerWidget,
  int? animationIndex,
  AnimationArguments? animationArguments,
}) =>
      KeynoteAgendaSlide(
        titleText: titleText,
        subTitleText: subTitleText,
        titleStyle: KeynoteTextstyles.titleSmall(),
        subtitleStyle: KeynoteTextstyles.subtitle(),
        titleAlignment: Alignment.bottomLeft,
        subtitleAlignment: Alignment.topLeft,
        footerWidget: footerWidget,
        padding: allPadding48,
        animationIndex: animationIndex,
        animationArguments: animationArguments,
    )
```
