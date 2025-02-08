import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{ height: "50vh" }}
      className="container m-auto d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
