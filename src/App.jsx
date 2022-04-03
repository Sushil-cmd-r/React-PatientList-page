import React from "react";
import PatientList from "./pages/patientList/PatientList";
import { useEffect, useState } from "react";
import { getAppointments, getDentist, getFiles, getPatient } from "./api";

const App = () => {
  const [patient, setPatient] = useState({});
  const [appointment, setAppointment] = useState({});
  const [file, setFile] = useState([]);
  const [docter, setDocter] = useState({});

  useEffect(() => {
    const patients = async () => {
      try {
        const { data } = await getPatient();
        setPatient(data[0]);
      } catch (err) {
        if (!err.response) console.log(err);
        console.log(err.response);
      }
    };
    patients();
  }, []);

  useEffect(() => {
    const appointments = async () => {
      try {
        const { data } = await getAppointments();
        setAppointment(data[0]);
      } catch (err) {
        if (!err.response) console.log(err);
        console.log(err.response);
      }
    };
    appointments();
  }, []);

  useEffect(() => {
    const files = async () => {
      try {
        const { data } = await getFiles();
        setFile(data[0].files);
      } catch (err) {
        if (!err.response) console.log(err);
        console.log(err.response);
      }
    };
    files();
  }, []);

  useEffect(() => {
    const docters = async () => {
      try {
        const { data } = await getDentist();
        setDocter(data[0]);
      } catch (err) {
        if (!err.response) console.log(err);
        console.log(err.response);
      }
    };
    docters();
  }, []);

  return (
    <div>
      <PatientList
        patient={patient}
        appointment={appointment}
        file={file}
        docter={docter}
      />
    </div>
  );
};

export default App;
