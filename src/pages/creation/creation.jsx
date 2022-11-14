import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Grid } from '@components/shared';
import { CollectionBuild, CollectionSelect } from '@components/creation-section';

import useStyles from './styles';

const Creation = () => {
  const { classes } = useStyles();

  return (
    <Grid container className={classes.container}>
      <DndProvider backend={HTML5Backend}>
        <CollectionSelect />
        <CollectionBuild />
      </DndProvider>
    </Grid>
  );
};

export default Creation;
