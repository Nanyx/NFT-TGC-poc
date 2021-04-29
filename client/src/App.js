import {useEffect, useState} from 'react';
import {Container, Accordion, Card, Row, Col, Button} from 'react-bootstrap';

import GameCard from "./components/game-card";

const App = () => {
  const [boosters, setBooster] = useState([]);

  const addBooster = (cards) => {
    setBooster(b => [...b, cards]);
  }

  return (
    <Container>
      <Achat addBooster={addBooster}/>
      <hr/>
      <Accordion>
        {boosters.map((cards, i) => { console.log(cards); return(<Booster key={i} cards={cards} index={i}/>)})}
      </Accordion>
    </Container>
  );
}

const Achat = ({addBooster}) => {
  const [left, setLeft] = useState("");

  useEffect(() => {
    getLeft();
  }, [])

  const buyBooster = () => {
    fetch("/booster", {
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name: Date.now()})
    }).then(r => r.json()).then(d => {
      addBooster(d);
      getLeft();
    });
  }

  const getLeft = () => {
    fetch(`/booster?d=${Date.now()}`).then(r => r.json()).then(d => setLeft(d.left));
  }

  return (
    <Row>
      <Col>Booster left : {left}</Col>
      <Col className="text-right"><Button variant="primary" size="lg" onClick={buyBooster}>Acheter un Booster !!!</Button></Col>
    </Row>
  );
}

const Booster = ({cards, index}) => (
  <Card>
    <Card.Header>
      Booster {index}
    </Card.Header>
    <Card.Body>
      <Row>
        {cards.map((c, i) => <Col key={i} xs={2}><GameCard key={i} {...c}/></Col>)}
      </Row>
    </Card.Body>
  </Card>
)

export default App;
