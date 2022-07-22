import { styled } from '@mui/material/styles';
import { cssText } from '../../cssConstants';

export const PopupLinksParagraph = styled('p')(
  ({
    theme: {
      palette: { primary },
    },
  }) => `
  font-family: ${cssText.fontFamilySecondary};
  color: ${primary.contrastText};
  margin: 0rem;
  display: flex;
  align-items: center;
  column-gap:.25rem;
  padding: .5rem;
  text-underline-offset: .2rem;
  cursor: pointer;
  :hover {
    color: white;
    text-decoration: underline;
    box-shadow: 0 0 0 5px rgba(66, 153, 225, 0.6);`
);

export const PopupLinks = styled('a')(
  ({
    theme: {
      palette: { primary },
    },
  }) => `
  font-family: ${cssText.fontFamilySecondary};
  color: ${primary.contrastText};
  margin: 0rem;
  display: flex;
  align-items: center;
  column-gap:.25rem;
  padding: .5rem;
  text-decoration:none;
  text-underline-offset: .2rem;
  cursor: pointer;
  :hover {
    color: white;
    text-decoration: underline;
    box-shadow: 0 0 0 5px rgba(66, 153, 225, 0.6);`
);
