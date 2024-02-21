const CourseCard = ({ dataChild }) => {
  console.log({ dataChild });
  return (
    <div>
      {/* <h2>{dataChild[0].name}</h2>
      <h2>{dataChild[1].name}</h2>
      <h2>{dataChild[2].name}</h2> */}

      {dataChild.map((item, index) => (
        <h2 key={index}>{item.name}</h2>
      ))}
    </div>
  );
};

export default CourseCard;
