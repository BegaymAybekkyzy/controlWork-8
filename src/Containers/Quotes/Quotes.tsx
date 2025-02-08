import { Container } from 'react-bootstrap';
import Sidebar from '../../components/Sidebar/Sidebar.tsx';
import { Outlet } from 'react-router-dom';

const Quotes = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-4">
          <h3 className="text-center mb-2">Category</h3>
          <Sidebar/>
        </div>

        <div className="col-8">
        <Outlet/>
        </div>
      </div>
    </Container>
  );
};

export default Quotes;