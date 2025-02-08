import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { IQuote } from '../../types';

interface Props {
  quote: IQuote;
}

const QuoteCard: React.FC<Props> = ({quote}) => {
  return (
    <Card className="mb-4">
      <Card.Header>Category: {quote.category}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <Card.Text  className="fst-italic">"{quote.quote}"</Card.Text>
          <footer className="blockquote-footer">
            Author {quote.author}
          </footer>
        </blockquote>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default QuoteCard;