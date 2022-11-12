import MButton from '@mui/material/Button';

const Button = ({ children, ...props }) => (
  <MButton disableElevation {...props}>
    {children}
  </MButton>
);

export default Button;
