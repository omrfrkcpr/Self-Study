import React, { useState } from "react";

const AddPatient = ({ hastalar, setHastalar }) => {
  const [hastaName, setHastaName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit sonrası inputlardan value temizlemek için, hem alttaki işlemler yapılır, hemde inputlarda value={hastaName} yazarak browser da boşluksa boşluk isimse isim gözükmesi sağlanır
    setHastalar([
      ...hastalar,
      {
        id: 7,
        patientName: hastaName,
        day: date,
        isDone: false,
        myDoctor: "oya başar",
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
            Create an appointment for <span>Oya basar</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
