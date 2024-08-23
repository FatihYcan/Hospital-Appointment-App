// AppointmentList.jsx

import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({ appointment, handleDelete, handleDoubleClick }) => {
  return (
    <Container className="p-2 justify-content-center align-items-center d-flex flex-column">
      <h3 className="display-6 mb-2">Appointment List</h3>

      {appointment.length === 0 && (
        <img src="./img/appointment.jpg" alt="appointment" width={"50%"} />
      )}

      {appointment.map(({ id, patient, day, consulted, doctor, dep }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
          role="button"
          onDoubleClick={() => handleDoubleClick(id)}
        >
          <Row className="justify-content-between align-items-center">
            <Col>
              <h4>{patient}</h4>
              <h5> {doctor} </h5>
              <h6>{dep}</h6>
            </Col>
            <Col className="text-center">
              <h5> Date: {new Date(day).toLocaleDateString("tr")} </h5>
              <h6> Time: {new Date(day).toLocaleTimeString("tr")} </h6>
            </Col>

            <Col className="text-end">
              <TiDelete
                className="text-danger fs-1"
                type="button"
                onClick={() => handleDelete(id)}
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
