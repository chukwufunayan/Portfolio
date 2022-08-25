import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { cssButton, cssMargins, cssText } from '../../util/cssConstants';

export const AboutHeaders = styled('h1')({
  fontFamily: cssText.fontFamilyPrimary,
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.marginNone,
  marginBottom: cssMargins.marginHalf,
});
export const AboutSubHeaders = styled('h2')({
  fontFamily: cssText.fontFamilyPrimary,
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.margin1Halfxl,
  marginBottom: cssMargins.margin1xl,
  textDecoration: 'underline',
});
export const BioDateHeaders = styled('h4')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ` 
  color: ${primary.main}; 
  font-family: ${cssText.fontFamilyPrimary};
  letter-spacing: ${cssText.letterSpacing};
  margin-top: ${cssMargins.marginNone};
  margin-bottom:${cssMargins.marginNone};`
);
export const ButtonHeader = styled('h5')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ` 
  color: ${primary.contrastText}; 
  font-family: ${cssText.fontFamilyPrimary};
  letter-spacing: ${cssText.letterSpacing};
  margin-top: ${cssMargins.marginNone};
  margin-bottom:${cssMargins.marginNone};`
);
export const AboutParagraphs = styled('p')({
  fontFamily: cssText.fontFamilySecondary,
  margin: cssMargins.marginNone,
  lineHeight: cssText.lineHeightBase,
});
export const AboutParagSecondary = styled('a')(
  ({
    theme: {
      palette: { secondary },
    },
  }) => `
    font-family: ${cssText.fontFamilySecondary};
    margin:${cssMargins.marginNone};
    line-height:${cssText.lineHeightBase};
    color:${secondary.main};
    text-decoration: none;
    display: inline-block;
    
    :hover{
      text-decoration: underline;
    }
    `
);
export const AccentButtons = styled(Button)(
  ({ theme }) => `
  padding: ${cssButton.padding};
  border: ${theme.palette.primary.main} solid 1px;
`
);
