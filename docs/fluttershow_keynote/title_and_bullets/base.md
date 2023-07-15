# Base

## Example

![Title and Bullets slide](../img/title_and_bullets_base.png)

```dart
KeynoteTitleAndBulletsSlide(
  titleText: 'Title',
  subTitleText: 'Subtitle',
  bulletPoints: const ['1', '2', '3'],
  titleStyle: KeynoteTextstyles.title(),
  subtitleStyle: KeynoteTextstyles.subtitle(),
  bulletTextStyle: KeynoteTextstyles.body(),
)
```

## Properties

The `KeynoteTitleAndBulletsSlide` widget represents a title and bullets slide from Keynote.

- `titleText` (required): The text for the title of the slide.
- `subTitleText`: The text for the subtitle of the slide.
- `bulletPoints`: The optional list of strings representing the bullet points for the slide.
- `bulletTextStyle`: The style for the bullet points text.
- `bullets`: The type of bullets to use for the bullet points.
- `titleStyle`: The style for the title text.
- `subtitleStyle`: The style for the subtitle text.
- `bulletPointsAlignment`: The alignment of the bullet points.
- `bulletTextAlignment`: The alignment of the bullet text.
- `titleAlignment`: The alignment of the title.
- `subtitleAlignment`: The alignment of the subtitle.
- `titleSubTitleSpacing`: The widget to use for spacing between the title and subtitle.
- `subtitleBulletTextSpacing`: The widget to use for spacing between the subtitle and bullet points.
- `bulletPointsPadding`: The padding for the bullet points.
- `padding`: The padding for the entire slide.
- `headerFlexUnits`: The number of flex units for the header section.
- `bodyFlexUnits`: The number of flex units for the body section.
- `footerFlexUnits`: The number of flex units for the footer section.
- `titleWidgetReplacement`: The widget to replace the title text.
- `subtitleWidgetReplacement`: The widget to replace the subtitle text.
- `bulletPointsWidgetReplacement`: The widget to replace the bullet points.
- `animationIndex`: The index of the animation for the slide.
- `animationArguments`: The arguments for the animation.
