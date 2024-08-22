import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({ appointment }) => {
  return (
    <Container className="p-2 justify-content-center align-items-center d-flex flex-column">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>

      {appointment.map(({ id, patient, day, consulted, doctor }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
          role="button"
        >
          <Row className="justify-content-between align-items-center">
            <Col md={6}>
              <h4>{patient}</h4>
              <h5> {doctor} </h5>
            </Col>
            <Col>
              <h5> Date: {day.toLocaleDateString("tr")} </h5>
              <h6> Time: {day.toLocaleTimeString("tr")} </h6>
            </Col>

            <Col className=" text-end">
              <TiDelete className="text-danger fs-1" type="button" />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
