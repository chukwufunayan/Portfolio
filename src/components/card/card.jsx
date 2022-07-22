import React from 'react';
// Mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
// Css Constants
import { cssPadding } from '../../cssConstants';
// Styled Elements
import {
  AboutHeaders,
  AboutParagraphs,
  CardMediaAction,
} from './styledElements';

function card({ img, title, desc, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <Card sx={{ maxWidth: '330px', maxHeight: '260px' }}>
        <CardActionArea>
          <CardMediaAction component="img" image={img} height="170" />
          <CardContent sx={{ padding: cssPadding.padding1xl }}>
            <AboutHeaders>{title}</AboutHeaders>
            <AboutParagraphs>{desc}</AboutParagraphs>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}
export default card;
