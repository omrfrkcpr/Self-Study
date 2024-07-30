https://ejs.co/#install

https://github.com/mde/ejs/wiki/Using-EJS-with-Express

## Tags

```
'<%' 'Scriptlet' tag, for control-flow, no output
'<%_' ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
'<%=' Outputs the value into the template (HTML escaped)
'<%-' Outputs the unescaped value into the template
'<%#' Comment tag, no execution, no output
'<%%' Outputs a literal '<%'
'%>' Plain ending tag
'-%>' Trim-mode ('newline slurp') tag, trims following newline
'_%>' ‘Whitespace Slurping’ ending tag, removes all whitespace after it

```

## VsCode Extensions

https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support

## Kurulum

```
npm install ejs
```

- index.js or app.js

```
let express = require('express');
let app = express();

app.set('view engine', 'ejs');

```

- Template de HTML Form aracılığıyla veri taşınır. Bu gelen verilerin anlaşılır olması adına da bir ara katman gerekir. Önceki sürümlerde bu işlemi yine express developerlarının geliştirdiği body-parser paketi aracılığyla yapılıyordu ama artık dogrudan yine body-parser uzantısı olan urlencoded aracılığıyla yapılıyor.

```js
// express.urlencoded() is a body parser for html post form.
// Gelen verilerin sadece string olarak ele alnıması istenirse, extended: false özelliği kullanılır, fakat eğer bir JSON nesnesi olarak ele alınması istenirse, extended: true parametresi ile kullanmak gerekir. API hizmeti de sunduğumuz için bizim için uygun olan seçenek {extended: true} olacaktır.
// app.use(express.urlencoded({extended: false}));
app.use(express.urlencoded({ extended: true }));
```

- Css,js,yüklenen paketler(bootstrap vb.) dosyaların görüntülenebilmesi için static files ayarına gerek var. Static dosyaları yerleştirdiğimiz klasörü tantıyoruz.

```
// Static Files
app.use("/assets", express.static("./public/assets")); //* /assets uzantısı görürsen bunun için public klasöründeki assetse erişim sağla.

```

### Dikkat edilmesi Gereken Hususlar

- Formlar sadece ve sadce GET ve POST isteği atabilirler.
- Form ile veri gönderirken inputlardan bulunan name attributelarının modeldeki keylerle aynı olması lazım.
- API hizmeti için send(), template hizmeti için render() metodu kullanılır.
