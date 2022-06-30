import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GlassPaper from '../../components/glasspaper/glasspaper';
import { cssMargins, cssText } from '../../cssConstants';

const AboutHeaders = styled('h2')({
  fontFamily: cssText.fontFamilyPrimary,
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.marginNone,
  marginBottom: cssMargins.marginHalf,
});
const NumHeaders = styled('h1')(
  ({ theme }) => `
  color: ${theme.palette.primary.main};
  font-size: ${cssText.fontSize2Halfxl};
  font-family: ${cssText.fontFamilyPrimary};
  letter-spacing: ${cssText.letterSpacing};
  margin-top: ${cssMargins.marginNone};
  margin-bottom: ${cssMargins.marginHalf};`
);
const CompanyNameDesc = styled('h4')(
  ({ theme }) => `color:${theme.palette.secondary.main};
  display: inline-block;
  font-family: ${cssText.fontFamilyPrimary};
  letter-spacing: ${cssText.letterSpacing};
  margin-top: ${cssMargins.marginNone};
  margin-bottom: ${cssMargins.marginHalf};`
);
const AboutSubHeaders = styled('h2')({
  fontFamily: cssText.fontFamilyPrimary,
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.margin1Halfxl,
  marginBottom: cssMargins.margin1xl,
  textDecoration: 'underline',
});
const ExperienceDesc = styled('h4')({
  fontFamily: cssText.fontFamilyPrimary,
  display: 'inline-block',
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.marginNone,
  marginBottom: cssMargins.marginHalf,
});

const AboutParagraphs = styled('p')({
  fontFamily: cssText.fontFamilySecondary,
  margin: cssMargins.marginNone,
  lineHeight: cssText.lineHeightBase,
});
function experience() {
  return (
    <GlassPaper>
      <AboutSubHeaders>Companies worked for</AboutSubHeaders>
      <Box>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item mobile={12} tablet={6}>
            <NumHeaders>01</NumHeaders>
            <CompanyNameDesc>Home Depot,</CompanyNameDesc>
            <ExperienceDesc> Software Engineer</ExperienceDesc>
            <AboutParagraphs>
              I currently work here as a fullstack engineer in the retail media
              Department.
            </AboutParagraphs>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <NumHeaders>02</NumHeaders>
            <CompanyNameDesc>NCR Corporation,</CompanyNameDesc>
            <ExperienceDesc> Application Developer</ExperienceDesc>
            <AboutParagraphs>
              I currently work here as a fullstack engineer.
            </AboutParagraphs>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <AboutSubHeaders>Skills</AboutSubHeaders>
      </Box>
    </GlassPaper>
  );
}
export default experience;
