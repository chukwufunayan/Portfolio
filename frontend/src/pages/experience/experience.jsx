import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardMedia } from '@mui/material';
import PsychologySharpIcon from '@mui/icons-material/PsychologySharp';
import HardwareSharpIcon from '@mui/icons-material/HardwareSharp';
import ColorLensSharpIcon from '@mui/icons-material/ColorLensSharp';
import Button from '@mui/material/Button';
import GlassPaper from '../../components/glasspaper/glasspaper';
import { colors, cssButton, cssMargins, cssText } from '../../cssConstants';
// images
import {
  CPlus,
  Css,
  Html,
  Java,
  Js,
  Linux,
  NodeJs,
  ReactJs,
} from '../../util/photoExport';
import ReactIcon from '../../icons/reactJs.png';

const TitleHeaders = styled('h1')({
  fontFamily: cssText.fontFamilyPrimary,
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.marginNone,
  marginBottom: cssMargins.marginHalf,
  textAlign: 'center',
});
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
const DescSecondaryColorInline = styled('h4')(
  ({ theme }) => `color:${theme.palette.secondary.main};
  display: inline-block;
  font-family: ${cssText.fontFamilyPrimary};
  letter-spacing: ${cssText.letterSpacing};
  margin-top: ${cssMargins.marginNone};
  margin-bottom: ${cssMargins.marginHalf};`
);
const DescSecondaryColorBlock = styled('h4')(
  ({ theme }) => `color:${theme.palette.secondary.main};
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
const CardMediaIcon = styled(CardMedia)(
  ({ theme }) => `
  height: 80px;
  background-size: contain;
  background-position: left;
  margin-bottom:${cssMargins.marginHalf};
`
);
function experience() {
  console.log('icons', module);
  return (
    <GlassPaper>
      <TitleHeaders
        sx={{
          backgroundColor: colors.transparent,
          marginBottom: {
            mobile: cssMargins.margin1Halfxl,
            tablet: cssMargins.margin2xl,
          },
        }}
      >
        Experience
      </TitleHeaders>
      <AboutSubHeaders>Companies worked for</AboutSubHeaders>
      <Box>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item mobile={12} tablet={6}>
            <NumHeaders>01</NumHeaders>
            <DescSecondaryColorInline>Home Depot,</DescSecondaryColorInline>
            <ExperienceDesc> Software Engineer</ExperienceDesc>
            <AboutParagraphs>
              I currently work here as a fullstack engineer in the retail media
              Department.
            </AboutParagraphs>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <NumHeaders>02</NumHeaders>
            <DescSecondaryColorInline>
              NCR Corporation,
            </DescSecondaryColorInline>
            <ExperienceDesc> Application Developer</ExperienceDesc>
            <AboutParagraphs>
              I currently work here as a fullstack engineer.
            </AboutParagraphs>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <AboutSubHeaders>Skills</AboutSubHeaders>
        <AboutParagraphs>
          With about 2 and a half years of professional Experience, I have both
          grown in and developed new skills along the way to help tackle any
          challenge.
        </AboutParagraphs>
        <Grid container rowSpacing={2} marginTop={cssMargins.margin1xl}>
          <Grid item mobile={4}>
            <CardMediaIcon image={ReactJs} />
            <ExperienceDesc>React.Js</ExperienceDesc>
          </Grid>
          <Grid item mobile={4}>
            <CardMediaIcon image={NodeJs} />
            <ExperienceDesc>Node.JS</ExperienceDesc>
          </Grid>
          <Grid item mobile={4}>
            <CardMediaIcon image={Linux} />
            <ExperienceDesc>Linux</ExperienceDesc>
          </Grid>
          <Grid item mobile={4}>
            <CardMediaIcon image={Js} />
            <ExperienceDesc>JavaScript</ExperienceDesc>
          </Grid>
          <Grid item mobile={4}>
            <CardMediaIcon image={Java} />
            <ExperienceDesc>JAVA</ExperienceDesc>
          </Grid>
          <Grid item mobile={4}>
            <CardMediaIcon image={Html} />
            <ExperienceDesc>HTML</ExperienceDesc>
          </Grid>
          <Grid item mobile={4}>
            <CardMediaIcon image={Css} />
            <ExperienceDesc>css</ExperienceDesc>
          </Grid>
          <Grid item mobile={4}>
            <CardMediaIcon image={CPlus} />
            <ExperienceDesc>C ++</ExperienceDesc>
          </Grid>
        </Grid>
      </Box>
    </GlassPaper>
  );
}
export default experience;
