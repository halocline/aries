import React, { useContext } from 'react';
import {
  Box,
  Card,
  Grid,
  Heading,
  Paragraph,
  ResponsiveContext,
  Stack,
  Video,
} from 'grommet';

import PropTypes from 'prop-types';

import { Meta } from '../components';
import {
  Community,
  Featured,
  Highlights,
  Quote,
  WhatIs,
} from '../components/home';
import { Layout /* , PageIntro */ } from '../layouts';
import { getPageDetails } from '../utils';

const title = 'Home';
const pageDetails = getPageDetails(title);

const calcPad = size => {
  const val = size !== 'small' ? 'xlarge' : 'large';
  return val;
};

const Intro = ({ children }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box height={{ min: 'medium' }} justify="center">
      <Grid gap="large" columns={size === 'small' ? ['auto'] : ['2/3', 'auto']}>
        <Card background="none" elevation="none">
          {children}
        </Card>
        {size !== 'small' && (
          <Card background="none" elevation="none" height="small" />
        )}
      </Grid>
    </Box>
  );
};

Intro.propTypes = {
  children: PropTypes.node,
};

const Index = () => {
  const size = useContext(ResponsiveContext);
  const backgroundImage = {
    src: { dark: '/home.svg', light: '/home.svg' },
    alt: 'HPE Design System',
    margin: { top: '75px', left: '0px' },
    style: {},
    position: size !== 'small' ? 'right' : 'left',
  };

  return (
    <Layout backgroundImage={backgroundImage} title={title} isLanding pad={{}}>
      <Meta title={title} description={pageDetails.seoDescription} />
      <Box>
        <Intro position="left">
          <Box pad={calcPad(size)}>
            {size === 'small' && (
              <Card background="none" elevation="none" height="small" />
            )}
            <Heading margin="none" size="large">
              Design, develop and deliver
            </Heading>
            <Paragraph size="xlarge">
              Created to empower designers, developers, and others to quickly
              create accessible user experiences
            </Paragraph>
          </Box>
        </Intro>
        <Stack guidingChild="last">
          <Box background="background-front" margin={{ top: 'xlarge' }} fill />
          <Featured />
        </Stack>
        <WhatIs />
        <Box fill>
          <Video controls="below" poster="/static/images/cards.png">
            <source src="/HPE Design System-v3.mp4" type="video/mp4" />
          </Video>
        </Box>
        <Highlights />
        <Quote />
        <Community />
      </Box>
    </Layout>
  );
};

export default Index;
