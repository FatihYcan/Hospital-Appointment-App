// Home.jsx

import { useState } from "react";
import Doctors from "../components/Doctors";
import AppointmentList from "../components/AppointmentList";
// import { appointmentData } from "../helper/data";

const Home = () => {
  // const [appointment, setAppointment] = useState(appointmentData);
  const [appointment, setAppointment] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  const handleAdd = (newAppoinment) => {
    setAppointment([...appointment, newAppoinment]);
    localStorage.setItem(
      "list",
      JSON.stringify([...appointment, newAppoinment])
    );
  };

  const handleDelete = (id) => {
    const fiteredList = appointment.filter((i) => i.id !== id);
    setAppointment(fiteredList);
    localStorage.setItem("list", JSON.stringify(fiteredList));
  };

  const handleDoubleClick = (id) => {
    const updatedList = appointment.map((i) =>
      i.id === id ? { ...i, consulted: !i.consulted } : i
    );
    setAppointment(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  return (
    <>
      <h1 className="display-5 text-danger text-center mt-2">
        Hospital Appointment App
      </h1>
      <main className="text-center mt-2">
        <Doctors handleAdd={handleAdd} />
        <AppointmentList
          appointment={appointment}
          handleDelete={handleDelete}
          handleDoubleClick={handleDoubleClick}
        />
      </main>
    </>
  );
};

export default Home;
