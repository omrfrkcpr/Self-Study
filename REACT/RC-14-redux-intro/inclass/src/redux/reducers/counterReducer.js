// const [count, setCount] = useState();
// const [todos, setTodos] = useState([]);

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    case "RESET":
      // return initialState
      return { ...state, count: 0 };
    default:
      return state; //* olmayan bir type bilgisi geldiğinde de statei olduğu gibi döndürmelidir.
  }
  //! Reducer fonksiyonu muhakkak bir state objesi dondurmelidir.
};
