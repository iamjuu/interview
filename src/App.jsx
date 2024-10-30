// App.jsx
import React from 'react';
import styled from 'styled-components';
import AnimatedText from './components/AnimationText';
import Navbar from './components/navbar';

const App = () => {
  return (
    <>
    <Container>
      <Navbar/>
      <AnimatedText />
    </Container>
 

    </>
  );
};

const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 700px; */
  width: 100%;
`;

export default App;