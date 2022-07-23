import { styled } from '@mui/material/styles';
import { CardMedia } from '@mui/material';
import { cssMargins, cssText } from '../../util/cssConstants';

export const TitleHeaders = styled('h1')({
  fontFamily: cssText.fontFamilyPrimary,
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.marginNone,
  marginBottom: cssMargins.marginHalf,
  textAlign: 'center',
});
export const NumHeaders = styled('h1')(
  ({
    theme: {
      palette: { primary },
    },
  }) => `
  color: ${primary.main};
  font-size: ${cssText.fontSize2Halfxl};
  font-family: ${cssText.fontFamilyPrimary};
  letter-spacing: ${cssText.letterSpacing};
  margin-top: ${cssMargins.marginNone};
  margin-bottom: ${cssMargins.marginHalf};`
);
export const DescSecondaryColorInline = styled('h4')(
  ({ theme }) => `color:${theme.palette.primary.main};
  display: inline-block;
  font-family: ${cssText.fontFamilyPrimary};
  letter-spacing: ${cssText.letterSpacing};
  margin-top: ${cssMargins.marginNone};
  margin-bottom: ${cssMargins.marginHalf};`
);
export const AboutSubHeaders = styled('h2')({
  fontFamily: cssText.fontFamilyPrimary,
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.margin1Halfxl,
  marginBottom: cssMargins.margin1xl,
  textDecoration: 'underline',
});
export const ExperienceDesc = styled('h4')({
  fontFamily: cssText.fontFamilyPrimary,
  display: 'inline-block',
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.marginNone,
  marginBottom: cssMargins.marginHalf,
});

export const AboutParagraphs = styled('p')({
  fontFamily: cssText.fontFamilySecondary,
  margin: cssMargins.marginNone,
  lineHeight: cssText.lineHeightBase,
});
export const CardMediaIcon = styled(CardMedia)(
  () => `
  height: 80px;
  background-size: contain;
  background-position: left;
  margin-bottom:${cssMargins.marginHalf};
`
);
