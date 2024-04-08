import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../../redux/actions/counterActions";
import "./Counter.css";

// useDispatch() reducer içerisinde tanımlanan actionsların çalıştırılması için kullanılır.
//? dispatch; Action’ı parametre alarak reducer’ı tetikler. Bunun sonucunda state değiştirilir. Bu fonksiyon her çalıştırıldığında abone olan tüm componen’tler tekrar render edilir.Tabii ki state değiştikten sonra, render işlemi yapılır. Bu işlemden sonra listeners’da abone olan tüm component’lerin içinde gezerek render ediyor. Bu sayede güncel state view’e yansıyor.

const Counter = () => {
  // useSelector(state => state.reducer)
  // useSelector; Reducer içerisinde tanımlanan state bilgisine erişmek ve değişikliklerden haberdar olmak için kullanılır.
  // const {count} = useSelector(state => state)
  const count = useSelector((state) => state.counter.count); //state in kendisne
  const dispatch = useDispatch(); // setter
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button
          className="counter-button negative"
          onClick={() => dispatch(decrement())}
        >
          decrease
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button positive"
          // onClick={() => dispatch("INC")} //! action obje olmak zorunda o nedenle argüman gönderirken obje olarak göndermek zorundayız. Bu şekilde hata alırız.
          // onClick={() => dispatch({ tip: "INC" })}//? obje içerisinde gönderdiğimiz property type adında olmalı
          //onClick={() => dispatch({ type: "inc" })} //* dispatch içerisinde verdiğimiz argüman reducer içerisindeki action parametresine karşılık gelir.
          // onClick={() => dispatch({ type: INC })}
          onClick={() => dispatch(increment())}
        >
          increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
