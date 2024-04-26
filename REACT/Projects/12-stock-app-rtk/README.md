# Stock App

Yüklü Olan Paketler

- MUI and MUI icons
- axios
- redux/redux toolkit
- react-toastify
- react-router-dom
- mui x data grid

# Formik ve Yup

**_“Build forms in React, without the tears.”_**

Gözyaşları olmadan reactta formlşar oluşturun.

_Jared Palmer, Creator of Formik._

Formik, React uygulamalarında form yönetimini kolaylaştırmak için tasarlanmış bir kütüphanedir. Formik, form state yönetimini, değerlerin izlenmesini, hata mesajlarının görüntülenmesini ve formun sunucuya gönderilmesini kolaylaştıran bir dizi özelliği sağlar. Aynı zamanda formun değerlerini takip etmek, formun durumunu kontrol etmek ve formların yapısını düzenlemek için kullanışlı yardımcı işlevler sunar.

Yup ise form doğrulama kurallarını tanımlamak için kullanılan bir şema tabanlı doğrulama kütüphanesidir. Yup, formun alanlarını, gereklilikleri, veri türlerini, uzunluk sınırlamalarını, özel doğrulama işlevlerini vb. tanımlamak için kullanılır. Formun giriş değerlerini bu kurallara göre doğrular ve hata mesajları üretir.

Formik ve Yup'ın avantajları şunlardır:

1. Kolay kullanım: Formik, form işlemlerini kolayca yönetmenizi sağlar. Form state'i, giriş değerlerini ve hata mesajlarını otomatik olarak yönetir, böylece bu işleri manuel olarak yapmak zorunda kalmazsınız.
2. Doğrulama: Yup, form girişlerinin doğruluğunu kontrol etmek için güçlü bir şema tabanlı doğrulama sağlar. Kullanıcıların girdikleri verileri belirli kurallara göre kontrol edebilir ve hatalı girişler için uygun hata mesajlarını görüntüleyebilirsiniz.
3. Esneklik: Formik ve Yup, birlikte çalışarak esnek bir form yönetimi çözümü sunar. Özelleştirilebilir bileşenler ve işlevler kullanarak formları ihtiyaçlarınıza göre özelleştirebilirsiniz.

Formik, React uygulamalarında form yönetimini kolaylaştıran bir kütüphanedir ve aşağıdaki avantajlara sahiptir:

1. Form State Yönetimi: Formik, form state yönetimini kolaylaştırır. Formunuzdaki giriş alanlarındaki değerleri, seçili seçenekleri ve diğer form durumunu izler ve günceller. Bu sayede form verilerini manuel olarak yönetmek zorunda kalmazsınız.
2. Değerlerin İzlenmesi: Formik, formdaki her bir giriş alanının değerini izler ve değişiklikleri algılar. Bu şekilde, kullanıcı formdaki herhangi bir alana giriş yaptığında veya bir değeri değiştirdiğinde anında geri bildirim alabilirsiniz.
3. Hata Mesajlarının Görüntülenmesi: Formik, formunuzdaki hata durumlarını kolayca ele almanıza olanak tanır. Hata mesajlarını görüntülemek için özel hata bileşenlerini kullanabilir ve formun doğrulama kurallarına uymayan girişlere anında geri bildirim verebilirsiniz.
4. Formun Sunucuya Gönderilmesi: Formik, formun sunucuya gönderilmesini kolaylaştırır. Formun verilerini sunucuya iletmek için gerekli işlemleri yapmanızı sağlar ve sunucu yanıtlarını yönetmenize olanak tanır.
5. Yardımcı İşlevler: Formik, formların yapısını düzenlemek ve kontrol etmek için kullanışlı yardımcı işlevler sunar. Örneğin, formun doğrulama durumunu kontrol etmek, giriş alanlarını temizlemek, formu sıfırlamak veya formu yeniden başlatmak gibi işlemleri kolaylıkla gerçekleştirebilirsiniz.

Yup form doğrulama kurallarını tanımlamak için kullanılan bir şema tabanlı doğrulama kütüphanesidir. Yup'un bazı özellikleri ve nasıl kullanıldığı aşağıda açıklanmaktadır:

1. Şema Tanımlama: Yup ile form doğrulama kurallarını tanımlayabilirsiniz. Örneğin, alanların gerekliliğini, veri türünü, minimum/maximum uzunluğu, özel doğrulama işlevlerini vb. belirtebilirsiniz.
2. Doğrulama Kuralları: Yup, bir dizi doğrulama kuralını birleştirebilir ve bu kuralların formun alanlarına uygulanmasını sağlar. Örneğin, **`required()`** bir alanın boş geçilemez olduğunu belirtirken, **`email()`** bir alanın geçerli bir e-posta adresi olması gerektiğini belirtir.
3. Hata Mesajları: Yup, form doğrulama kurallarına uymayan girişler için hata mesajları üretir. Hata mesajlarını özelleştirebilir veya varsayılan hata mesajlarını kullanabilirsiniz.

https://github.com/jquense/yup

https://formik.org/

# Redux Persist

Redux Persist, Redux tabanlı uygulamaları için yerel depolama (local storage) ve/veya Async Storage üzerinde verileri saklamak için kullanılan bir kütüphanedir. Redux Persist, uygulamanın yeniden başlatılması veya sayfa yenilenmesi durumunda Redux store'daki verilerin kaybolmasını önlemek için kullanılır.

Redux Persist'in kullanımı oldukça basittir. İlk olarak, `redux-persist` kütüphanesini yüklemeli ve `persistReducer` ve `persistStore` fonksiyonlarını kullanarak bir `persistedReducer` ve bir `persistor` oluşturmalısınız. `persistedReducer`, normal bir Redux reducer'ı gibi çalışır, ancak verileri saklamak için `redux-persist` tarafından sağlanan bir depolama stratejisi kullanır. `persistor`, `persistedReducer`'ın bir örneğidir ve `redux-persist` tarafından sağlanan `persistStore` fonksiyonunu kullanarak Redux store'u store ile birlikte ayarlanır.

Örnek olarak, `redux-persist` kullanarak bir `persistedReducer` ve `persistor` oluşturmak için şu adımları izleyebilirsiniz:

1. `redux-persist` kütüphanesini yükleyin: `npm install redux-persist`
2. Redux store'unu oluştururken `persistReducer` kullanarak bir `persistedReducer` oluşturun:

```
import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

```

1. `persistor`'u oluşturmak için `persistStore` fonksiyonunu kullanın:

```
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

```

Bu şekilde oluşturduğunuz `persistedReducer` ve `persistor`, Redux store'unuzu yerel depolama veya Async Storage üzerinde saklamak için kullanılabilir.

```jsx
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
// ... normal setup, create store and persistor, import components etc.

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};
```

Daha fazla bilgi için, Redux Persist'in resmi dokümantasyonuna göz atabilirsiniz: https://github.com/rt2zz/redux-persist

[Non serializable hatası için bakınız.](https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist)

### Absolute Path ve Relative Path

'Absolute Path' ve 'Relative Path' terimleri, React Router DOM bağlamında doğru şekilde kullanılmamaktadır. React Router DOM'da, yolları tanımlamak için 'yol' prop'u kullanılır ve yol yolunun ne kadar spesifik olduğunu belirler.

Route path='search' element={ Home/ } / : Bu rota tanımı, 'arama' yol segmentine sahip herhangi bir URL ile eşleşir. '/search' ile başlayan herhangi bir URL ile eşleşir (ör. '/search/results', '/search/users', vb.).

Route path='/search' element={ Home/ } / : Bu rota tanımı yalnızca tam '/search' URL'si ile eşleşir. Yalnızca '/search' ile tam olarak eşleşen URL'lerle eşleşir ve '/search/results' veya '/search/users' gibi daha spesifik alt yollarla eşleşmez.

React Router DOM'da, başında '/' karakteri olan bir 'yol' pervanesi, köke göre “absolute path”i temsil eder. Başında '/' karakteri olmayan 'yol' öğeleri, geçerli URL'ye dayalı “relative path”i temsil eder.

Nested routelarda alt yollar relative path ile tanımlandığında path kısmında üst yolu belirtmemize gerek kalmaz.

```jsx
<Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="stock" element={<PrivateRouter />}>
      <Route path="" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="purchases" element={<Purchases />} />
        <Route path="sales" element={<Sales />} />
        <Route path="products" element={<Products />} />
        <Route path="firms" element={<Firms />} />
        <Route path="brands" element={<Brands />} />
      </Route>
    </Route>
  </Routes>
</Router>
```

Ama nested routelarda alt yollarıda absolute path ile tanımlamak istersek o zaman path kısmında üst yolu da açık bir şekilde belirtmeliyiz:

```jsx
<Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/stock" element={<PrivateRouter />}>
      <Route path="" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/stock/purchases" element={<Purchases />} />
        <Route path="/stock/sales" element={<Sales />} />
        <Route path="/stock/products" element={<Products />} />
        <Route path="/stock/firms" element={<Firms />} />
        <Route path="/stock/brands" element={<Brands />} />
      </Route>
    </Route>
  </Routes>
</Router>
```

## Public Klasörü ve CSS Mask Özelliği

- Public klasörüne konulan resimler vb. dosyaları react projemizde import etmeden sanki dosyamız public klasöründeymiş gibi direkt olarak yol vererek kullanabiliriz. Bunun sebebi react projeleri build edildiğinde index.html ve public klasörü içinde bulunan dosyalar aynı dizinde olurlar. Bizde drawer daki iconların yolunu bu şekilde vermiş olduk.
- Css mask özelliği kullanarak dive iconları(.svg uzantılı resimler) yerleştirmiş olduk. Neden bgImage kullanmadık. Çünkü bgImage de resim divin tamamını kaplıyor. bu sefer arka plan rengini yansıtamıyoruz. O nedenle svg uzantılı resimlerde mask özelliğini kullanarak renk ayarlaması da yapabiliriz.

### Axios Instance ve Interceptors

Axios, HTTP istekleri yapmak için kullanılan bir kütüphanedir. Axios instance'ları, farklı endpoint'lere yönelik istekleri yönetmek için kullanışlıdır. Interceptor'lar ise isteklerin öncesinde ve sonrasında çalışan işlevlerdir ve örneğin token'ların otomatik olarak eklenmesi veya hata durumlarının ele alınması gibi işlemleri gerçekleştirmek için kullanılabilir.

Axios instance'ı oluşturmak için `axios.create()` fonksiyonu kullanılır. Bu fonksiyon, özelleştirilmiş bir Axios instance'ı döndürür. Örneğin:

```
import axios from 'axios';

const instance = axios.create({
  baseURL: '<https://example.com/api>',
  headers: {'Authorization': `Token ${token}`}
});

```

Bu kod, `https://example.com/api` endpoint'ine yönelik istekler için bir Axios instance'ı oluşturur ve her isteğe `Authorization` başlığına `Token ${token}` değerini ekler.

Interceptor'lar, `instance.interceptors` nesnesi üzerinden tanımlanabilirler. Örneğin:

```
instance.interceptors.request.use(
  (config) => {
    // istek göndermeden önce yapılacak işlemler
    return config;
  },
  (error) => {
    // istek gönderirken hata oluşursa yapılacak işlemler
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // başarılı yanıt alındığında yapılacak işlemler
    return response;
  },
  (error) => {
    // hata yanıtı alındığında yapılacak işlemler
    return Promise.reject(error);
  }
);

```

Bu kod, `instance`'a interceptor'lar ekler. `request` interceptor'ı, istek göndermeden önce yapılacak işlemleri tanımlar ve `response` interceptor'ı, yanıt alındığında yapılacak işlemleri tanımlar. Bu interceptor'lar, isteklerin öncesinde veya sonrasında otomatik olarak çalıştırılır ve örneğin token'ların otomatik olarak eklenmesi veya hata durumlarının ele alınması gibi işlemleri gerçekleştirmek için kullanılabilir.

### Promise.All()

**Promise.all() Nedir? Ne İçin Kullanılır?**

Promise.all(), birden fazla Promise nesnesinin sonucunu tek bir dizi içinde birleştirmek için kullanılan bir JavaScript metodudur. Promise.all() metodunun parametresi bir dizi Promise nesnesidir. Bu Promise nesneleri, farklı işlemleri gerçekleştirebilir ve farklı sürelerde tamamlanabilirler. **`Promise.all()`** yöntemi, birden fazla Promise nesnesinin tamamlanmasını bekler ve tüm sonuçları bir dizi olarak döndürür. Bu yöntem, birden çok asenkron işlemi aynı anda çalıştırmak ve sonuçlarını toplu olarak elde etmek için kullanılır. Promise.all() metoduna verilen Promise dizisi içindeki tüm Promise nesneleri tamamlandığında, Promise.all() metodunun geri dönüş değeri, her bir Promise nesnesinin sonucunu içeren bir dizi olacaktır.

Örnek olarak, bir web uygulamasında, farklı API'lerden veri almak için Promise nesneleri kullanıldığını düşünelim. Bu API'lerden her biri, farklı bir veri türü döndürür ve farklı bir sürede tamamlanabilir. Promise.all() metodu, tüm bu Promise nesnelerinin tamamlanmasını bekleyebilir ve sonuçları tek bir dizi içinde birleştirilebilir. Böylece, uygulamanın farklı bölümlerinde kullanılmak üzere, farklı API'lerden alınan veriler tek bir dizi içinde sunulabilir.

**`Promise.all()`** yöntemi kullanmanın avantajları şunlardır:

1. Birden çok asenkron işlemi aynı anda çalıştırabilir ve sonuçlarını toplu olarak elde edebilirsiniz.
2. İşlemler paralel olarak gerçekleştirilir, bu da performansı artırabilir.
3. Hata yakalama için **`catch()`** bloğunu kullanabilirsiniz, böylece herhangi bir Promise hata durumunda diğerlerinin tamamlanmasını beklemek zorunda kalmazsınız.

**`Promise.all()`** yöntemi, birden çok asenkron işlemin sonuçlarını eşzamanlı olarak takip etmek ve elde etmek için kullanışlı bir yöntemdir.

**Axios ile Promise.all() Kullanımı**

Axios, HTTP istekleri yapmak için kullanılan bir kütüphanedir. Promise.all() metodu, birden fazla Axios isteğinin sonucunu birleştirmek için kullanılabilir. Her bir Axios isteği bir Promise nesnesi olarak döndürülebilir ve bu Promise nesneleri Promise.all() metoduna parametre olarak verilebilir.

Örnek olarak, farklı bir API'den kullanıcının profil bilgilerini almak ve bir diğer API'den kullanıcının fotoğrafını almak istediğinizi düşünelim. Bu iki işlem de Axios ile gerçekleştirilebilir ve her biri bir Promise nesnesi olarak döndürülebilir. Bu Promise nesneleri, Promise.all() metoduna parametre olarak verilerek, sonuçları tek bir dizi içinde birleştirilebilir.e

```jsx
import axios from "axios";

const profilePromise = axios.get("/api/profile");
const photoPromise = axios.get("/api/photo");
//* then
Promise.all([profilePromise, photoPromise])
  .then(([profileResponse, photoResponse]) => {
    const profile = profileResponse.data;
    const photo = photoResponse.data;
    // Verileri kullanarak bir şeyler yapın
  })
  .catch((error) => {
    // Hata durumunda yapılacak işlemler
  });
//* async-await
const [profilePromise, photoPromise] = await Promise.all([
  //? Promise dizisindeki sıra, sonuç dizisindeki sıraya karşılık gelir.
  // axios.get('/api/profile'),//! promiseları oluşturduk. bunları dışarda değişken olarak da oluşturabiliriz.
  // axios.get('/api/photo')
  profilePromise,
  photoPromise,
]);
```

Bu örnekte, `/api/profile` ve `/api/photo` endpoint'lerine yönelik iki farklı Axios isteği gerçekleştirilir. Her bir istek bir Promise nesnesi olarak döndürülür ve bu Promise nesneleri, Promise.all() metoduna parametre olarak verilir. Promise.all() metodunun geri dönüş değeri, her bir Promise nesnesinin sonucunu içeren bir dizi olacaktır. Bu dizi, `[profileResponse, photoResponse]` şeklinde bir değişkene atılır ve sonuçlar kullanılarak bir şeyler yapılır.

Daha fazla bilgi için, Promise.all() metodunun resmi dokümantasyonuna göz atabilirsiniz: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
