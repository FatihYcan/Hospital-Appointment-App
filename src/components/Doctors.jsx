import { Row, Container, Col } from "react-bootstrap";
import { doctorData } from "../helper/data";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = () => {
  const [show, setShow] = useState(false);
  const [drName, setDrName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (name) => {
    setShow(true);
    setDrName(name);
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row className=" justify-content-center g-3">
        {doctorData.map(({ id, name, dep, img }) => (
          <Col xs={6} md={4} lg={3} key={id} >
            <img
              src={img}
              alt={name}
              className="doctor-img"
              onClick={() => handleShow(name)}
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal handleClose={handleClose} show={show} drName={drName} />
    </Container>
  );
};

export default Doctors;
