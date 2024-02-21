const Message = ({ name, tel }) => {
  // const { name, tel } = props; // destructuring
  return (
    <div>
      <p style={{ color: "red" }}>
        Hi, my name is {name} and my phone number is {tel}
      </p>
    </div>
  );
};

export default Message;
