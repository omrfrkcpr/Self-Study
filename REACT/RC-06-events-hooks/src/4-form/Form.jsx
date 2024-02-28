import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [country, setCountry] = useState("");

  const getDatabase = (e) => {
    e.preventDefault();

    //? ileride bir submit islemin neticesinde verilerin nasıl post edilebileceğini gostermek adina eklenmistir.
    //? const res = axios.post("url", { isim, pass, country })

    alert(`Name: ${name} \nPassword: ${pass} \nCountry: ${country}`);

    //!database e yollandıktan sonra değişkenlerin içini temizledik, bunu ekranda da temiz görmek için inputlarda value değişkenleri tanımladık
    setName("");
    setPass("");
    setCountry("");
  };

  return (
    <div className="container text-center mt-4">
      <h1>************************************</h1>
      <h1 className="text-danger m-2 mb-5">FORM(EVENTS)</h1>
      <form onSubmit={getDatabase}>
        <div>
          <label className="form-label mb-2" htmlFor="name">
            NAME:
            <span className="name-span ms-2 fs-5 text-info fw-bold">
              {name}
            </span>
          </label>
          <input
            className="form-control mb-2"
            id="name"
            type="text"
            onInput={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div>
          <label className="form-label mb-2" htmlFor="password">
            PASSWORD:
            <span className="pass-span ms-2 fs-5 text-info fw-bold"></span>
          </label>
          <input
            className="form-control mb-2"
            id="password"
            type="password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            required
          />
        </div>
        <div>
          <label className="form-label mb-2" htmlFor="country">
            COUNTRY:
            <span className="country-span ms-2 fs-5 text-info fw-bold">
              {country}
            </span>
          </label>
          <select
            className="form-select"
            name=""
            id=""
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            required
          >
            {/* Database e value degerleri gider. */}
            <option value="TURKIYE" selected>
              TURKIYE
            </option>
            <option value="UNITED KINGDOM">UNITED KINGDOM</option>
            <option value="GERMANY">GERMANY</option>
            <option value="USA">USA</option>
            <option value="FRANCE">FRANCE</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-5">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
