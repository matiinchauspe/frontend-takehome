import MSkeleton from '@mui/material/Skeleton';

const Skeleton = ({ children, ...props }) => <MSkeleton {...props}>{children}</MSkeleton>;

export default Skeleton;
