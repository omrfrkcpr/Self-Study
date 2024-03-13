import { useState } from "react";

const ContactForm = () => {
  const [person, setPerson] = useState({
    name: "",
    password: "",
    email: "",
  });

  const { name, password, email } = person;

  const handlePerson = (event) => {
    setPerson({ ...person, [event.target.id]: event.target.value });
  };

  const getDatabase = (e) => {
    e.preventDefault();

    alert(`Name: ${name} \nPassword: ${password} \nEmail: ${email}`);

    //? clear state

    setPerson({ name: "", password: "", email: "" });
  };
  return (
    <div className="container text-center mt-4">
      <h1>*********************************************</h1>

      <h1 className="text-danger m-4 mb-5">FORM(EVENTS)</h1>

      <form onSubmit={getDatabase}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            NAME: <span className="text-danger">{name} </span>
          </label>
          <input
            className="form-control"
            id="name"
            type="text"
            onInput={handlePerson}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            PASSWORD: <span>{password}</span>
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            onChange={handlePerson}
            value={password}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            EMAIL: <span className="fw-bold">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            // value={email}
            id="email"
            name="email"
            onChange={handlePerson}
            value={email}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
