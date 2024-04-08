// const [count,setCount] = useState(0)

import { DEC, INC, RESET } from "../types/counterTypes";

const initialState = {
  count: 10,
};

//! action parametresi bir obje olmak zorunda. Bu obje de bizden type ve payload propertylerini bekliyor.
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };
    case DEC:
      return { count: state.count - 1 };
    case RESET:
      // return initialState
      return { ...state, count: 0 };
    default:
      return state; //* olmayan bir type bilgisi geldiğinde de statei olduğu gibi döndürmelidir.
  }
  //! Reducer fonksiyonu muhakkak bir state objesi dondurmelidir.
};

// Reducers global state’in güncellendiği, kontrol edildiği ve güncellenmiş state’i return eden klasik bir javascript function’udur. Aşağıda açıklacağım iki parametre alır:

// - state: uygulamanın geçerli state’i

// - action: global state’i güncellemek için gönderilen action

// - Reducer oluşturmak için aşağıdaki kurallara uymak zorundasınız.

// Reducer’ın state parametresini her zaman başlangıç state’ine eşitleyin.

// Oluşturduğunuz reducer her zaman benzersiz bir obje dönmelidir. .push(), .splice() gibi methodlar yerine spread operator, concat() veya Object.assign() gibi yöntemler kullanın. Eğer counter örneğinde olduğuı gibi ise de o zaman yeni bir obje dönerek işlemi tamamlamalısınız

// Bahsettiğim kurallara uygun reducer örneğimizi yukarıda oluşturmak olduk. Dilerseniz switch/case yerine if/else yapısını da kullanabilirsiniz.
