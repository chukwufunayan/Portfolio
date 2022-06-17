import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { styled, useTheme } from '@mui/material/styles';
import {
  cssPadding,
  cssText,
  cssMargins,
  colors,
  cssBorders,
} from '../../cssConstants';
// images
import blackEngineer from '../../icons/blackEngineer.jpeg';
import avatarHeadshot from '../../icons/blackmanheadshot.jpeg';

const AboutHeaders = styled('h2')({
  fontFamily: cssText.fontFamilyPrimary,
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.marginNone,
  marginBottom: cssMargins.marginHalf,
});
const AboutSubHeaders = styled('h2')({
  fontFamily: cssText.fontFamilyPrimary,
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.padding1Halfxl,
  marginBottom: cssMargins.margin1xl,
  textDecoration: 'underline',
});
const BioDateHeaders = styled('h5')({
  fontFamily: cssText.fontFamilyPrimary,
  letterSpacing: cssText.letterSpacing,
  marginTop: cssMargins.marginNone,
  marginBottom: cssMargins.marginNone,
});
const AboutParagraphs = styled('p')({
  fontFamily: cssText.fontFamilySecondary,
  margin: cssMargins.marginNone,
  lineHeight: cssText.lineHeightBase,
});

function landingpage() {
  const {
    palette: { mode },
  } = useTheme();
  return (
    <Box>
      <CardMedia component="img" image={blackEngineer} />
      <Paper
        variant={mode}
        sx={{
          width: '95%',
          margin: 'auto',
          padding: cssPadding.padding2xl,
        }}
      >
        <Stack
          direction={{ mobile: 'column', tablet: 'row' }}
          alignItems={{ mobile: 'center' }}
          spacing={{ mobile: cssPadding.padding1Halfxl }}
          sx={{
            backgroundColor: colors.transparent,
            marginBottom: cssMargins.margin1Halfxl,
          }}
        >
          <Box>
            <AboutHeaders>Funayan Ojiagbaje</AboutHeaders>
            <AboutParagraphs>Developer / Freelancer / Believer</AboutParagraphs>
          </Box>
          <Box width="100px" height="100px">
            {' '}
            <Avatar
              alt="self portrait avatar"
              src={avatarHeadshot}
              sx={{
                minWidth: '100%',
                minHeight: '100%',
                border: cssBorders.borderWhite1,
              }}
            />
          </Box>
        </Stack>
        <AboutParagraphs>
          Hey There, I'm Funayan! A passionate developer based in Atlanta,ga who
          is always in persuit of constant learning. I have interests in solving
          real world problems, and being able to use my skills in programming
          and development to do that is always an opportunity I look forward to!
        </AboutParagraphs>
        <Box>
          <AboutSubHeaders>Bio</AboutSubHeaders>
          <Grid container rowSpacing={1} alignItems="flex-start">
            <Grid item mobile={4}>
              <BioDateHeaders>1998</BioDateHeaders>
            </Grid>
            <Grid item mobile={8}>
              <AboutParagraphs>Born In Lagos,Nigeria</AboutParagraphs>
            </Grid>
            <Grid item mobile={4}>
              <BioDateHeaders>2020</BioDateHeaders>
            </Grid>
            <Grid item mobile={8}>
              <AboutParagraphs>
                Graduated Georgia College & State University with a Bachelors in
                Computer Science
              </AboutParagraphs>
            </Grid>
            <Grid item mobile={4}>
              <BioDateHeaders>2020 - Present</BioDateHeaders>
            </Grid>
            <Grid item mobile={8}>
              <AboutParagraphs>
                Worked for NCR; now currently at Home Depot and also a
                free-Lance dev on the side
              </AboutParagraphs>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <AboutSubHeaders>Interests</AboutSubHeaders>
          <AboutParagraphs>
            I'm a very adventurous individual who also likes challenging
            himself. When i'm not coding, I enjoy cycling, listening to music,
            cooking, and watching sports.Celtics
          </AboutParagraphs>
        </Box>
        <Box>
          <AboutSubHeaders>Socials</AboutSubHeaders>
          <AboutParagraphs>(Social Media Icons)</AboutParagraphs>
        </Box>
      </Paper>
    </Box>
  );
}
export default landingpage;
