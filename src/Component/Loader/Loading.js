import Spinner from "react-bootstrap/Spinner";

function BasicExample() {
  return (
    <div
      // className="text-center"
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default BasicExample;
