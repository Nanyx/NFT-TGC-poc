import {Card} from 'react-bootstrap';

import './game-card.css';

const GameCard = ({id, name, desc, fingerprint = null}) => {

  const getCardColor = () => {
    switch(name[0]){
      case "u": return "unco";
      case "r": return "rare";
      case "m": return "myth";
      default: return "";
    }
  }

  return (
    <Card>
      <Card.Header className={getCardColor()}>
        <Card.Title>{name}</Card.Title>
      </Card.Header>
      <Card.Body>{desc}</Card.Body>
      <Card.Footer>
        <div>{id}</div>
        {fingerprint && <div>{fingerprint}</div>}
      </Card.Footer>
    </Card>
  );
}

export default GameCard;