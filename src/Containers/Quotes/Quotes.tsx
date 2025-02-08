import { Container } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar.tsx";
import { Outlet, useOutlet } from "react-router-dom";

const Quotes = () => {
  console.log();
  return (
    <Container>
      <div className="row">
        <div className="col-4">
          <h3 className="text-center mb-2">Category</h3>
          <Sidebar />
        </div>

        <div className="col-8">
          {useOutlet() ? (
            <Outlet />
          ) : (
            <h3 className="text-center">Select a category of quote</h3>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Quotes;
