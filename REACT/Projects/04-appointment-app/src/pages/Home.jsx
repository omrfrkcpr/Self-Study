import React, { useState } from "react";
import { hastaData, doctorData } from "../helper/Data";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);
  const [show, setShow] = useState(true);

  const doctorClick = (drId) => {
    setShow(!show);
    setDoctors(show ? doctors.filter((doc) => doc.id === drId) : doctorData);
  };

  return (
    <div
      style={{
        display: show ? "block" : "flex",
        justifyContent: show ? "" : "space-between",
      }}
    >
      <div>
        <header>
          <h1>HOSPITAL</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            {doctors.map((dr) => (
              <div key={dr.id}>
                <img
                  src={dr.doctorImg}
                  alt="doctor-img"
                  width="180px"
                  height="150px"
                  className="btn"
                  style={{ background: show ? "aqua" : "lightgreen" }}
                  onClick={() => doctorClick(dr.id)}
                />
                <h4
                  style={{
                    background: show ? "aqua" : "lightgreen",
                    borderLeft: `10px solid ${show ? "blue" : "green"} `,
                  }}
                >
                  {dr.doctorName}
                </h4>
              </div>
            ))}
          </div>
        </header>

        {!show && (
          <AddPatient
            hastalar={hastalar}
            setHastalar={setHastalar}
            doctors={doctors}
          />
        )}
      </div>
      <PatientList
        hastalar={hastalar}
        setHastalar={setHastalar}
        doctors={doctors}
      />
    </div>
  );
};

export default Home;
