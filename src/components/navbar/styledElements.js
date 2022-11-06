import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import {
  cssText,
  cssBorders,
  colors,
  cssButton,
  cssMargins,
} from '../../util/cssConstants';

export const AppBarStyled = styled(AppBar)`
  padding: 0.4rem 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
`;
export const LinkStyled = styled(Link)`
  font-family: ${cssText.fontFamilyPrimary};
  text-decoration: none;
  color: ${colors.commonWhite};
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: ${cssMargins.marginHalf};
`;
export const ButtonStyled = styled(Button)(({ theme: { breakpoints } }) => ({
  backgroundColor: '#f7f3f321',
  border: cssBorders.borderWhite1,
  padding: cssButton.padding,
  [breakpoints.up('tablet')]: {
    display: 'none',
  },
}));
