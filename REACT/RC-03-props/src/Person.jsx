import Message from "./Message";

const Person = (props) => {
  console.log(props);
  const { name, img, tel } = props; // destructuring

  return (
    <div>
      <h3>{name}</h3>
      <Message name={name} tel={tel} />
      <img src={img} alt="" width="100px" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
