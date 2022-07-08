import React from 'react';
// Mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GlassPaper from '../../components/glasspaper/glasspaper';
import Card from '../../components/card/card';
// Css Constants
import { colors, cssMargins } from '../../cssConstants';
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
  Pedalup,
  Artsite,
  Naturalproduct,
} from '../../util/photoExport';

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
              Department.
            </AboutParagraphs>
          </Grid>
          <Grid item mobile={12} tablet={6}>
            <NumHeaders>02</NumHeaders>
            <DescSecondaryColorInline>
              NCR Corporation,&nbsp;
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
        <Grid container rowSpacing={3} marginTop={cssMargins.marginHalf}>
          <Grid item mobile={12} phone={6} tablet={4}>
            <CardMediaIcon image={ReactJs} />
            <ExperienceDesc>React.Js</ExperienceDesc>
          </Grid>
          <Grid item mobile={12} phone={6} tablet={3.7}>
            <CardMediaIcon image={NodeJs} alt="nodejs img" />
            <ExperienceDesc>Node.JS</ExperienceDesc>
          </Grid>
          <Grid item mobile={12} phone={6} tablet={3.7}>
            <CardMediaIcon image={Linux} alt="linuc img" />
            <ExperienceDesc>Linux</ExperienceDesc>
          </Grid>
          <Grid item mobile={12} phone={6} tablet={3.7}>
            <CardMediaIcon image={Js} alt="js img" />
            <ExperienceDesc>JavaScript</ExperienceDesc>
          </Grid>
          <Grid item mobile={12} phone={6} tablet={3.7}>
            <CardMediaIcon image={Java} alt="java img" />
            <ExperienceDesc>Java</ExperienceDesc>
          </Grid>
          <Grid item mobile={12} phone={6} tablet={3.7}>
            <CardMediaIcon image={Html} alt="html img" />
            <ExperienceDesc>HTML</ExperienceDesc>
          </Grid>
          <Grid item mobile={12} phone={6} tablet={3.7}>
            <CardMediaIcon image={Css} alt="css img" />
            <ExperienceDesc>CSS</ExperienceDesc>
          </Grid>
          <Grid item mobile={12} phone={6} tablet={3.7}>
            <CardMediaIcon image={CPlus} alt="c plus img" />
            <ExperienceDesc>C++</ExperienceDesc>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <AboutSubHeaders>My Projects</AboutSubHeaders>
        <AboutParagraphs>
          Projects that I've done over the years.
        </AboutParagraphs>
        <Grid container rowSpacing={3} marginTop={cssMargins.marginHalf}>
          <Grid item mobile={12} tablet={5.7}>
            <Card
              img={Pedalup}
              title="Buycycle"
              desc="A website geared towards selling bicycle"
            />
          </Grid>{' '}
          <Grid item mobile={12} tablet={5.7}>
            <Card
              img={Artsite}
              title="Art Portfolio"
              desc="A Project Created For a client"
            />
          </Grid>{' '}
          <Grid item mobile={12} tablet={5.7}>
            <Card
              img={Naturalproduct}
              title="E-commerce Website"
              desc="An E-commerce site made for a client to sell her natural beauty products"
            />
          </Grid>
        </Grid>
      </Box>
    </GlassPaper>
  );
}
export default experience;
