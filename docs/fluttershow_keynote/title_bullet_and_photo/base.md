# Base

## Example

![Title and Photo slide](../img/title_bullet_and_photo_base.png)

```dart
KeynoteTitleBulletAndPhotoSlide(
    titleText: 'Title',
    subTitleText: 'Subtitle',
    image: Image.asset(
      'path_to_asset',
      fit: BoxFit.fill,
      height: size.height,
      width: size.width,
  ),
  bulletPoints: const ['1', '2', '3'],
  titleStyle: KeynoteTextstyles.title(),
  subtitleStyle: KeynoteTextstyles.subtitle(),
  bulletTextStyle: KeynoteTextstyles.body(),
  bulletPointsPadding: horizontalPadding32,
)
```

## Properties

The `KeynoteTitleBulletAndPhotoSlide` widget represents a title bullet and photo slide from Keynote. It consists of a main title, an optional subtitle, an image, and bullet points.

- `titleText` (required): The main title displayed on the slide.
- `subTitleText` (required): The optional subtitle displayed below the title.
- `image` (required): The main image displayed on the slide.
- `bulletPoints` (required): The bullet points displayed on the slide.
- `bullets`: The style of the bullet points. If not provided, the default style is used.
- `titleStyle`: The style for the title text. If not provided, the default style is used.
- `subtitleStyle`: The style for the subtitle text. If not provided, the default style is used.
- `bulletTextStyle`: The style for the bullet point text. If not provided, the default style is used.
- `titleAlignment`: The alignment of the title text within its space. If not provided, the default alignment is used.
- `subtitleAlignment`: The alignment of the subtitle text within its space. If not provided, the default alignment is used.
- `bulletPointsAlignment`: The alignment of the bullet points within their space. If not provided, the default alignment is used.
- `bulletTextAlignment`: The alignment of the bullet text within each bullet point. If not provided, the default alignment is used.
- `bulletPointsPadding`: The padding around the bullet points. If not provided, the default padding is used.
- `padding`: The padding around the entire slide. If not provided, the default padding is used.
- `titleSubTitleSpacing`: The spacing between the title and subtitle. If not provided, the default spacing is used.
- `subtitleBulletSpacing`: The spacing between the subtitle and bullet points. If not provided, the default spacing is used.
- `headerFlexUnits`: The number of flex units for the header section. If not provided, the default number of units is used.
- `bodyFlexUnits`: The number of flex units for the body section. If not provided, the default number of units is used.
- `footerFlexUnits`: The number of flex units for the footer section. If not provided, the default number of units is used.
- `titleWidgetReplacement`: A replacement widget for the title text. If provided, it will be used instead of the default text widget.
- `subtitleWidgetReplacement`: A replacement widget for the subtitle text. If provided, it will be used instead of the default text widget.
- `imageWidgetReplacement`: A replacement widget for the image. If provided, it will be used instead of the default image widget.
- `bulletPointsWidgetReplacement`: A replacement widget for the bullet points. If provided, it will be used instead of the default bullet points widget.
- `animationIndex`: The index of the slide for animations.
- `animationArguments`: The configuration for the slide animations.
