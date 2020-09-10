import React from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navigation from "./components/Navigation/Navigation";
import Heading from "./components/Heading/Heading";
import Objects from "./components/Objects/Objects";



function App() {
  return (
    <Container>
      <Navigation />
      <Heading />
      <Container>
        <Objects />
      </Container>
    </Container>
  );
}

export default App;
