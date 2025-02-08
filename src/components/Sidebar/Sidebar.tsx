
import { NavLink } from 'react-router-dom';
import { ListGroup} from 'react-bootstrap';
import { QUOTATION_CATEGORY } from '../../globalConstant.ts';

const Sidebar = () => {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as={NavLink} to="/quotes/all">All</ListGroup.Item>
      {QUOTATION_CATEGORY.map((category, index) => (
        <ListGroup.Item key={index} as={NavLink} to={`/quotes/${category.id}`}>{category.title}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Sidebar;