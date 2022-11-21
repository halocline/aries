import React from 'react';
import { Box, Button, Diagram, Grid, Page, PageContent, Stack } from 'grommet';
import { Annotation } from '../../../layouts';
import { connection } from '../../../utils/utils';
import { LayerHeader } from './components/LayerHeader';

const connections = [
  connection('1', 'layer-close-button'),
  connection('2', 'layer-actions'),
];

export const FullscreenLayerAnatomy = () => (
  <Stack interactiveChild="first">
    <Grid
      align="center"
      columns={['flex', 'auto']}
      rows={['24px', '37px', '24px', '24px', 'small', '24px', '36px', '24px']}
      areas={[
        ['layer', 'empty-1'],
        ['layer', 'annotation-1'],
        ['layer', 'empty-2'],
        ['layer', 'empty-2'],
        ['layer', 'empty-2'],
        ['layer', 'empty-2'],
        ['layer', 'annotation-2'],
        ['layer', 'empty-3'],
      ]}
      gap={{ column: 'medium' }}
    >
      <Annotation
        alignSelf="center"
        id="1"
        target="1"
        gridArea="annotation-1"
      />
      <Annotation
        alignSelf="center"
        id="2"
        target="2"
        gridArea="annotation-2"
      />
      <LayerContent gridArea="layer" />
    </Grid>
    <Diagram connections={connections} />
  </Stack>
);

const LayerContent = ({ ...rest }) => (
  <Page background="background-front" id="layer-container" {...rest}>
    <PageContent gap="medium" pad="medium">
      <LayerHeader informational />
      <Box
        border={{ style: 'dashed' }}
        height="small"
        align="center"
        justify="center"
      >
        Layer body content goes here.
      </Box>
      <Box direction="row" gap="small" justify="end" flex={false}>
        <Button label="Cancel" />
        <Button label="Confirm action" primary id="layer-actions" />
      </Box>
    </PageContent>
  </Page>
);
