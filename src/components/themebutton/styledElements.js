import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { cssButton } from '../../cssConstants';

export const ThemeButton = styled(Button)(
  ({ theme: { palette } }) => `background-color:${palette.themeButton.main};
      padding:${cssButton.padding};
      :hover{background-color:${palette.themeButton.secondary}`
);
