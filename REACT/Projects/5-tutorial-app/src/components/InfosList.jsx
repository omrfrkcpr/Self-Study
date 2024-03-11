import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const InfosList = ({ tutorials }) => {
  console.log(tutorials);

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map(({ id, title, description }) => {
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center">
                  <AiFillDelete
                    type="button"
                    style={{
                      color: "indianred",
                      marginRight: ".5rem",
                    }}
                    size={22}
                  />
                  <FaEdit type="button" style={{ color: "orange" }} size={22} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InfosList;
