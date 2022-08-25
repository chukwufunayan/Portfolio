import { Link } from 'react-router-dom';

// Mui Imports
import { styled } from '@mui/material/styles';
import { cssText } from '../../util/cssConstants';

const LinkStyled = styled(Link)`
  text-decoration: none;
`;
const PopupLinksParagraph = styled('p')(
  ({ theme: { palette } }) => `
  font-family: ${cssText.fontFamilySecondary};
  color:${palette.mode === 'light' ? '#323232' : '#E2E8F0'};
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

const PopupLinks = styled('a')(
  ({ theme: { palette } }) => `
  font-family: ${cssText.fontFamilySecondary};
  color: ${palette.mode === 'light' ? '#323232' : '#E2E8F0'};
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
export { LinkStyled, PopupLinksParagraph, PopupLinks };
