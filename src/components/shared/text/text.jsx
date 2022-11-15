import { memo } from 'react';
import MTypography from '@mui/material/Typography';

const Text = ({ children, ...props }) => <MTypography {...props}>{children}</MTypography>;

export default memo(Text);
