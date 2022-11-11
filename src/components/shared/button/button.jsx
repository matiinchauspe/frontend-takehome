import MButton from '@mui/material/Button';

const Button = ({ children, ...props }) => <MButton {...props}>{children}</MButton>;

export default Button;
