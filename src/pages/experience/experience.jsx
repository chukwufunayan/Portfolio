import React from 'react';
// Mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GlassPaper from '../../components/glasspaper/glasspaper';
// import Card from '../../components/card/card';

// Css Constants
import { colors, cssMargins } from '../../util/cssConstants';
// Styled Elements
import {
  TitleHeaders,
  NumHeaders,
  DescSecondaryColorInline,
  AboutSubHeaders,
  ExperienceDesc,
  AboutParagraphs,
  CardMediaIcon,
} from './styledComponents';
// Constants Imports
import { skillsList } from './experiencelist';

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
            <DescSecondaryColorInline>
              Home Depot,&nbsp;
            </DescSecondaryColorInline>
            <ExperienceDesc> Software Engineer</ExperienceDesc>
            <AboutParagraphs>
              I currently work here as a fullstack engineer in the retail media
              Department.Currently working helping the development of a new
              offsite advertisement application in our retail media platform.
            </AboutParagraphs>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <NumHeaders>02</NumHeaders>
            <DescSecondaryColorInline>
              NCR Corporation,&nbsp;
            </DescSecondaryColorInline>
            <ExperienceDesc> Application Developer</ExperienceDesc>
            <AboutParagraphs>
              I Worked here in the banking department as an application
              developer.Maintained, updated and developed ongoing features on
              different the frontend and backend apps for a web platform called
              Operation O-360
            </AboutParagraphs>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <AboutSubHeaders>Skills</AboutSubHeaders>
        <AboutParagraphs>
          With about 2 and a half years of professional Experience, I have both
          grown in and developed new skills along the way to help tackle any
          challenge .
        </AboutParagraphs>
        <Grid container rowSpacing={3} marginTop={cssMargins.marginHalf}>
          {skillsList.map((item) => (
            <Grid key={item.desc} item mobile={12} phone={6} tablet={3.8}>
              <CardMediaIcon image={item.image} />
              <ExperienceDesc>{item.desc}</ExperienceDesc>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <Box>
        <AboutSubHeaders>My Projects</AboutSubHeaders>
        <AboutParagraphs>
          Projects that I&#39;ve done over the years.
        </AboutParagraphs>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={1}
          marginTop={cssMargins.marginHalf}
        >
          {projectsList.map((item) => (
            <Grid item mobile={12} tablet={5.7}>
              {" "}
              <Card
                img={item.image}
                title={item.title}
                desc={item.desc}
                link={item.link}
              />
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </GlassPaper>
  );
}
export default experience;
