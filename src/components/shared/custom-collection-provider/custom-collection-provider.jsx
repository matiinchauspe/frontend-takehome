import { CustomCollectionProvider as CustomColProvider } from '@context';

const CustomCollectionProvider = ({ children }) => {
  const valueToProvider = {};

  return <CustomColProvider value={valueToProvider}>{children}</CustomColProvider>;
};

export default CustomCollectionProvider;
