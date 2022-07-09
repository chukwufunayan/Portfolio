import React from 'react';
// Mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { cssMargins, colors, cssBorders, cssSpacing } from '../../cssConstants';
import saveFile from '../../util/fileDownloader';
import GlassPaper from '../../components/glasspaper/glasspaper';
// Styled Elements
import {
  AboutHeaders,
  AboutSubHeaders,
  BioDateHeaders,
  ButtonHeader,
  AboutParagraphs,
  AboutParagSecondary,
  AccentButtons,
} from './styledElements';
// images
import avatarHeadshot from '../../icons/blackmanheadshot.jpeg';

const { dwnldFile } = saveFile();

function landingpage() {
  return (
    <Box>
      <GlassPaper>
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
          <Box sx={{ textAlign: 'center' }}>
            <AboutHeaders>Funayan Ojiagbaje</AboutHeaders>
            <AboutParagraphs>Developer / Freelancer / Believer</AboutParagraphs>
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
          Hey There, I'm Funayan! A passionate developer based in Atlanta,ga who
          is always in pursuit of constant learning. I have interests in solving
          real world problems, and being able to use my skills in programming
          and development to do that is always an opportunity I look forward to!
        </AboutParagraphs>
        <Stack direction="row" justifyContent="center">
          {' '}
          <AccentButtons
            variant="contained"
            sx={{
              marginTop: cssMargins.margin2xl,
              marginBottom: cssMargins.margin1xl,
            }}
            onClick={() => dwnldFile()}
          >
            <ButtonHeader sx={{ textAlign: 'center' }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: cssMargins.marginHalf,
                }}
              >
                Download Resume <FileDownloadIcon />
              </span>
            </ButtonHeader>
          </AccentButtons>
        </Stack>
        <Box>
          <AboutSubHeaders>Bio</AboutSubHeaders>
          <Grid container rowSpacing={1} alignItems="flex-start">
            <Grid item mobile={4}>
              <BioDateHeaders>1998</BioDateHeaders>
            </Grid>
            <Grid item mobile={8}>
              <AboutParagraphs>Born In Lagos, Nigeria</AboutParagraphs>
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
            himself. When i'm not coding, I enjoy{' '}
            <AboutParagSecondary
              href="https://www.strava.com/athletes/fojiagbaje "
              target="_blank"
            >
              cycling
            </AboutParagSecondary>
            ,{' '}
            <AboutParagSecondary
              href="https://music.apple.com/us/playlist/naija/pl.u-06oxDj6tkXBxzb"
              target="_blank"
            >
              listening to music
            </AboutParagSecondary>
            , cooking, and watching sports.
          </AboutParagraphs>
        </Box>
        <Box>
          <AboutSubHeaders>Socials</AboutSubHeaders>
          <Stack direction="row" spacing={{ mobile: cssSpacing.spacing1xl }}>
            <a
              href="https://twitter.com/FOjiagbaje"
              target="_blank"
              rel="noreferrer"
            >
              <AccentButtons variant="contained">
                <TwitterIcon />
              </AccentButtons>
            </a>
            <a
              href="https://www.instagram.com/funayan_/"
              target="_blank"
              rel="noreferrer"
            >
              <AccentButtons variant="contained">
                <InstagramIcon />
              </AccentButtons>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <AccentButtons variant="contained">
                <GitHubIcon />
              </AccentButtons>
            </a>
          </Stack>
        </Box>
      </GlassPaper>
    </Box>
  );
}
export default landingpage;
