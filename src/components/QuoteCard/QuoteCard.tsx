import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { IQuote } from '../../types';
import { NavLink } from 'react-router-dom';

interface Props {
  quote: IQuote;
  quoteDeletion: (id: string) => void;
}

const QuoteCard: React.FC<Props> = ({quote, quoteDeletion}) => {
  return (
    <Card className="mb-4">
      <Card.Header>Category: {quote.category}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-3">
          <Card.Text  className="fst-italic">"{quote.quote}"</Card.Text>
          <footer className="blockquote-footer">
            Author {quote.author}
          </footer>
        </blockquote>
        <NavLink className="btn btn-primary me-2" to={`quotes/${quote.id}/edit`}>Edit</NavLink>
        <Button variant="danger" onClick={() =>quoteDeletion(quote.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default QuoteCard;