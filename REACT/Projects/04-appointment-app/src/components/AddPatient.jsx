import React, { useState } from "react";
import uuid from "react-uuid";

const AddPatient = ({ hastalar, setHastalar, doctors }) => {
  const [hastaName, setHastaName] = useState("");
  const [date, setDate] = useState("");

  console.log(doctors);
  console.log(hastalar);

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit sonrası inputlardan value temizlemek için, hem alttaki işlemler yapılır, hemde inputlarda value={hastaName} yazarak browser da boşluksa boşluk isimse isim gözükmesi sağlanır
    setHastalar([
      ...hastalar,
      {
        id: uuid(),
        patientName: hastaName,
        day: date,
        isDone: false,
        myDoctor: doctors[0].doctorName,
      },
    ]);
    setHastaName("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Patient's Information</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setHastaName(e.target.value)}
            value={hastaName}
          />
        </div>
        <div className="form-control">
          <label htmlFor="date">Day & Time</label>
          <input
            id="date"
            type="datetime-local"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <div>
          <button className="doc" type="submit">
            Create an appointment for <span>{doctors[0].doctorName}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
