// Doctor.jsx

import { Row, Container, Col } from "react-bootstrap";
import { doctorData } from "../helper/data";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const [drName, setDrName] = useState("");
  const [drDep, setDrDep] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (name, dep) => {
    setShow(true);
    setDrName(name);
    setDrDep(dep);
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3">Our Doctors</h3>
      <Row className="g-3 p-2 justify-content-center">
        {doctorData.map(({ id, name, dep, img }) => (
          <Col xs={12} sm={6} md={4} lg={3} key={id}>
            <img
              src={img}
              alt={name}
              className="doctor-img"
              onClick={() => handleShow(name, dep)}
            />
            <h5 className="name">{name}</h5>
            <h6 className="dep">{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal
        handleClose={handleClose}
        show={show}
        drName={drName}
        handleAdd={handleAdd}
        drDep={drDep}
      />
    </Container>
  );
};

export default Doctors;
