import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {
  cssPadding,
  cssText,
  cssMargins,
  colors,
  cssBorders,
  cssButton,
  cssSpacing,
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
const AccentButtons = styled(Button)(
  ({ theme }) => `
  padding: ${cssButton.padding};
  border: ${theme.palette.primary.main} solid 1px;
`
);

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
        <Box maxWidth="840px" margin="auto">
          {' '}
          <Stack
            direction={{ mobile: 'column', tablet: 'row' }}
            alignItems={{ mobile: 'center' }}
            justifyContent={{ mobile: 'normal', tablet: 'center' }}
            spacing={{
              mobile: cssSpacing.spacingHalfxl,
              tablet: cssSpacing.spacing2xl,
            }}
            sx={{
              backgroundColor: colors.transparent,
              marginBottom: {
                mobile: cssMargins.margin1Halfxl,
                tablet: cssMargins.margin2xl,
              },
            }}
          >
            <Box>
              <AboutHeaders>Funayan Ojiagbaje</AboutHeaders>
              <AboutParagraphs>
                Developer / Freelancer / Believer
              </AboutParagraphs>
            </Box>
            <Box width="100px" height="100px">
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
            Hey There, I'm Funayan! A passionate developer based in Atlanta,ga
            who is always in pursuit of constant learning. I have interests in
            solving real world problems, and being able to use my skills in
            programming and development to do that is always an opportunity I
            look forward to!
          </AboutParagraphs>
          <Stack direction="row" justifyContent="center">
            {' '}
            <AccentButtons
              variant="contained"
              sx={{
                marginTop: cssMargins.margin2xl,
                marginBottom: cssMargins.margin1xl,
              }}
            >
              <BioDateHeaders sx={{ textAlign: 'center' }}>
                Download Resume <FileDownloadIcon />
              </BioDateHeaders>
            </AccentButtons>
          </Stack>
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
                  Graduated Georgia College & State University with a Bachelors
                  in Computer Science
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
            <Stack direction="row" spacing={{ mobile: cssSpacing.spacing1xl }}>
              <AccentButtons variant="contained">
                <TwitterIcon />
              </AccentButtons>
              <AccentButtons variant="contained">
                <InstagramIcon />
              </AccentButtons>
              <AccentButtons variant="contained">
                <GitHubIcon />
              </AccentButtons>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
export default landingpage;
