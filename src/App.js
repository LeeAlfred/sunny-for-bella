// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import './App.css';

// Components

import Heading from './Heading';
import Slide from './Slide';
import Polaroid from './Polaroid';
import About from './About';
import Footer from './Footer';
import cartoon from './cartoon';

function createPolaroid(cartoon){
  return <Polaroid key={cartoon.id} img={cartoon.img} caption={cartoon.caption}/>
}



function App() {
  return (
    <div className="App">
   <Container id="home" fluid>
     <Row>
       <Col><Heading /></Col>
      <Row>
        <Col><Slide /></Col>
      </Row>
     </Row>
     {cartoon.map(createPolaroid)}
     <Row>
       <Col>
         <About />
       </Col>
     </Row>
     <Row>
       <Footer />
     </Row>
   </Container>
   
    </div>
  );
}

export default App;
