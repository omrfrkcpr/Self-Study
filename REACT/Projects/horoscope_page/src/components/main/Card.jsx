import React from "react";

const Card = ({ title, date, desc, image }) => {
  // console.log(item);
  return (
    <div className="cards">
      <div className="cards--title">
        <h1>{title}</h1>
      </div>
      <div className="cards--date">
        <h1>{date}</h1>
      </div>
      <div className="cards--img">
        <img src={image} alt="" />
      </div>
      <div className="cards--desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;

// return (
//   <div>
//     {date.includes("February") && (
//       <div className="cards">
//         <div className="cards--title">
//           <h1>{title}</h1>
//         </div>
//         <div className="cards--date">
//           <h1>{date}</h1>
//         </div>
//         <div className="cards--img">
//           <img src={image} alt="" />
//         </div>
//         <div className="cards--desc">
//           <p>{desc}</p>
//         </div>
//       </div>
//     )}
//   </div>
// );
