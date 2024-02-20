import React from "react";

// import Local images
import img2 from "../img/dunya-haritasi-min.jpg";

const Msg = () => {
  //! JavaScript field

  //! Below return => React (jsx) field
  return (
    <div>
      <h2>This is MSG.jsx file</h2>
      <p>Welcome to REACT</p>

      {/* img return methods */}

      {/* direct browser src */}
      <img
        src="https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_1280.jpg"
        alt="cat"
        width="200px"
      />

      {/* from local img folder with import*/}
      <img src={img2} alt="img2" width="500px" />

      {/* from public folder relative-path src */}
      <img src="./assets/PngItem_415236.png" alt="animated-cat" width="200px" />
    </div>
  );
};

export default Msg;
