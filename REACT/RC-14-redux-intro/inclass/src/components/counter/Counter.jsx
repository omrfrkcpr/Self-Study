import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import {
  decrement,
  reset,
  increment,
} from "../../redux/actions/counterActions";

const Counter = () => {
  // useSelector(state => state.reducer)
  // const {count} = useSelector(state => state)
  const count = useSelector((state) => state.count); //state in kendisne
  const dispatch = useDispatch(); // setter
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button
          className="counter-button negative"
          // onClick={() => dispatch({ type: DEC })}
          onClick={() => dispatch(decrement())}
        >
          decrease
        </button>
        <button
          className="counter-button zero"
          // onClick={() => dispatch({ type: RESET })}
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button positive"
          // onClick={() => dispatch("INC")} //! action obje olmak zorunda o nedenle argüman gönderirken obje olarak göndermek zorundayız. Bu şekilde hata alırız.
          // onClick={() => dispatch({ tip: "INC" })}//? obje içerisinde gönderdiğimiz property type adında olmalı
          // onClick={() => dispatch({ type: INC })} //* dispatch içerisinde verdiğimiz argüman reducer içerisindeki action parametresine karşılık gelir.
          onClick={() => dispatch(increment())}
        >
          increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
