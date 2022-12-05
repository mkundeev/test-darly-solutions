import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import Container from '../Container';

export default function Loader() {
  return (
    <Container maxWidth="fit-content">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible
      />
    </Container>
  );
}
