import { useContext } from "react";
import { StudentContext } from "../App";

const OgrenciItem = () => {
  //! 3- context consumer
  const { students, changeColor } = useContext(StudentContext);

  return (
    <div>
      {students.map((i) => {
        const { name, email, age, color, id } = i;
        return (
          <div style={{ backgroundColor: color }} key={id}>
            <h3>NAME: {name}</h3>
            <h4>EMAİL: {email} </h4>
            <h4> AGE: {age}</h4>
            Color:{" "}
            <input
              type="text"
              value={color}
              onChange={(e) => changeColor(e.target.value, id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OgrenciItem;
