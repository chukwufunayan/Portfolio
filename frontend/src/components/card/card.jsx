import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import { cssMargins, cssPadding, cssText } from '../../cssConstants';

const AboutHeaders = styled('h2')({
  fontFamily: cssText.fontFamilyPrimary,
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.marginNone,
  marginBottom: cssMargins.marginHalf,
});
const AboutParagraphs = styled('p')({
  fontFamily: cssText.fontFamilySecondary,
  margin: cssMargins.marginNone,
  lineHeight: cssText.lineHeight1xl,
});
const CardMediaAction = styled(CardMedia)(
  () => `
    object-fit: fill;`
);
function card({ img, title, desc }) {
  return (
    <Card sx={{ maxWidth: '350px', backgroundColor: 'themeColor' }}>
      <CardActionArea>
        <CardMediaAction component="img" image={img} height="170" />
        <CardContent sx={{ padding: cssPadding.padding1xl }}>
          <AboutHeaders>{title}</AboutHeaders>
          <AboutParagraphs>{desc}</AboutParagraphs>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default card;
