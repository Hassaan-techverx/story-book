import React from "react";
import { Spinner } from "react-bootstrap";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="d-flex align-items-center h-100 w-100 justify-content-center">
      <Spinner
        animation="border"
        variant="primary"
        style={{ width: "5rem", height: "5rem" }}
      />
    </div>
  );
};

export default Loader;
