import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import { cssMargins, cssText } from '../../util/cssConstants';

export const AboutHeaders = styled('h2')({
  fontFamily: cssText.fontFamilyPrimary,
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.marginNone,
  marginBottom: cssMargins.marginHalf,
});
export const AboutParagraphs = styled('p')({
  fontFamily: cssText.fontFamilySecondary,
  margin: cssMargins.marginNone,
  lineHeight: cssText.lineHeight1xl,
});
export const CardMediaAction = styled(CardMedia)(
  () => `
    object-fit: fill;`
);
