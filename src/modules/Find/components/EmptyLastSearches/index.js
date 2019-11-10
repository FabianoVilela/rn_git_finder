import React from 'react';
import { Image } from './styles';
import { Container, Text } from '~shared/styles/theme';

export default function EmptyLastSearches() {
  return (
    <Container alignItems="center">
      <Image />
      <Text size="LARGER">No recent profile views</Text>
    </Container>
  );
}
