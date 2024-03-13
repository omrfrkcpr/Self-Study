import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data";

// useParams = router dan path olarak gelen namee burada useParams hook u ile yakalandı
const CardDetails = () => {
  const { namee } = useParams();

  // useNavigate() = to go back again to last page
  const navigate = useNavigate();
  return (
    <div className="text-center mt-5">
      {data.map(
        ({ name, img, text, yorum }) =>
          name === namee && (
            <div>
              <h3>{name}</h3>
              <img src={img} alt="" width="300px" className="mt-3" />
              <h3 className="mt-3">{text} </h3>
              <h4 className="mt-3">{yorum} </h4>
              <div className="w-50 m-auto mt-3">
                <button
                  onClick={() => navigate(-1)}
                  className="btn btn-warning w-25 me-3"
                >
                  Go Back
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="btn btn-primary w-25"
                >
                  Go Home
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CardDetails;
