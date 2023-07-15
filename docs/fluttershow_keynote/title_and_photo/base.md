# Base

## Example

![Title and Bullets slide](../img/title_and_bullets_base.png)

```dart
KeynoteTitleAndPhotoSlide(
  image: Image.asset(
    'path_to_asset',
    fit: BoxFit.fill,
    height: size.height,
    width: size.width,
  ),
  titleText: t.flutterShow,
  subTitleText: t.presentationsInFlutter,
  headingText: t.author,
  titleGradient: FSGradients.background,
  titleStyle: FSTextStyles.title(),
  subtitleStyle: FSTextStyles.regularText(color: Colors.white),
  headingStyle: FSTextStyles.footerText(color: Colors.white),
)
```

## Properties

The `KeynoteTitleAndPhotoSlide` widget represents a title and photo slide from Keynote.

- `titleText` (required): The text for the title of the slide.
- `image` (required): The image to display.
- `subTitleText`: The subtitle text displayed below the title.
- `headingText`: The heading text displayed at the bottom of the slide.
- `titleStyle`: The style for the title text.
- `titleGradient`: The gradient used as the background for the title.
- `subtitleStyle`: The style for the subtitle text.
- `headingStyle`: The style for the heading text.
- `titleAlignment`: The alignment of the title within the slide.
- `subtitleAlignment`: The alignment of the subtitle within the slide.
- `headingAlignment`: The alignment of the heading within the slide.
- `titleSubTitleSpacing`: A widget used to add spacing between the title and subtitle.
- `headingBottomSpacing`: A widget used to add spacing at the bottom of the heading.
- `padding`: The padding around the slide.
- `headerFlexUnits`: The flex units for the header section.
- `bodyFlexUnits`: The flex units for the body section.
- `headingFlexUnits`: The flex units for the heading section.
- `titleWidgetReplacement`: A replacement widget for the title.
- `subtitleWidgetReplacement`: A replacement widget for the subtitle.
- `headingWidgetReplacement`: A replacement widget for the heading.
- `imageWidgetReplacement`: A replacement widget for the image.
- `animationIndex`: The animation index for the slide.
- `animationArguments`: The animation arguments for the slide.
- `variant`: The variant of the slide. If not provided, the default variant is used.
