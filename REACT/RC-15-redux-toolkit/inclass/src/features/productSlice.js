import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsData: [],
  loading: false,
  error: false,
};

// Redux toolkit içerisinde Async istekleri yönetmek için standart yöntem createAsyncThunk’ı kullanmaktır. Diğer yöntem workaround vb gibi kavramlarla ifade edilebilen yöntem ile createAsyncThunkın bize sağladığı action typeları manuel yazarak kendi api fonksiyonlarımızı kullanabiliriz.
// Async isteklerinizi bu fonksiyonla kullandığınızda Promise’in dönüş durumuna bağlı olarak (pending, fulfilled, rejected) bir action çağırır.
// createAsyncThunk type, payloadCreator ve options olmak üzere üç parametre alır.
// Örneğin type için “getProducts” parametresini kullandığımızda bu fonksiyon bize
// pending: ‘getProducts/pending’ => Su anda istek gönderiliyor
// fulfilled: ‘getProducts/fulfilled’ => Veri geldi, doldu
// rejected: ‘getProducts/rejected’ => Error durumu.
// action type’larını oluşturur.

export const getProductsData = createAsyncThunk("getProducts", async () => {
  const { data } = await axios("https://dummyjson.com/products");
  return data.products;
});

const productSlice = createSlice({
  name: "productsApi",
  initialState,
  reducers: {
    clearProductsData: (state) => {
      state.productsData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsData.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getProductsData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.productsData = payload;
      })
      .addCase(getProductsData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { clearProductsData } = productSlice.actions;

export default productSlice.reducer;

//! createAsyncThunk
// Asenkron İşlemlerin Kolay Yönetimi: Redux'ta, asenkron işlemleri yönetmek için birçok ekstra kod yazmanız gerekir. createAsyncThunk, asenkron işlemleri tanımlamayı ve bu işlemlerin durumlarını (pending, fulfilled, rejected) otomatik olarak yönetmeyi sağlar. Bu sayede, kodunuz daha okunabilir ve yönetilebilir hale gelir.

// Daha Az Kod Yazma: createAsyncThunk, asenkron işlemleri tanımlamak için gereken ekstra action tiplerini ve reducer'ları otomatik olarak oluşturur. Bu sayede, daha az kod yazmanız gerekir ve karmaşıklığı azaltır.

// Promise'lerle Kolay Entegrasyon: Asenkron işlemler genellikle Promise'lar veya async/await kullanılarak gerçekleştirilir. createAsyncThunk, bu asenkron yapılarla doğrudan entegre olabilir, bu da asenkron işlemlerin Redux store'unda daha kolay bir şekilde yönetilmesini sağlar.

// İşlevsellik ve Performans: createAsyncThunk, asenkron işlemleri yönetmek için Redux Middleware'lerini kullanır. Bu Middleware'ler, işlevsellik ve performans açısından optimize edilmiştir, böylece asenkron işlemler sorunsuz bir şekilde çalışır.

//! Veri çekme işlemlerini neden reducerlarda yapamıyoruz da middlewarelere ihtiyaç duyuyoruz ?
// Çünkü Reducer’larımız pure olmalı ve asla side effect yaratacak işlemleri barındırmamalıdır. Bazı durumlarda -hatta çoğu durumda- pure olmayan işlemler yapmak zorunda kalırız. Bu işlemler; api istekleri, bazı javascript fonksiyonları(math.random) veya kendi uygulamamızın gerektirdikleri olabilir. İşte tam bu noktada middleware ihtiyacı ortaya çıkıyor. Tabii, bu middleware’ler sadece side effect işlemleri için yoklar. Aynı zamanda state’timizi takip etmek için bazı ekstra araçları da middleware olarak kullanabiliriz.
// ReduxToolikt içerisinde api istekleri için kullandığımız middleware de createAsyncThunk olmuş oluyor.
// Pure Redux içerisinde bunu doğrudan redux-thunk kullanarak yapıyoruz.
