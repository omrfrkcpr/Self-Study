# PIZZA API

### ERD:

![ERD](./erdPizzaAPI.png)

### Folder/File Structure:

```
┣ 📂src
 ┃ ┣ 📂logs
 ┃ ┣ 📂configs
 ┃ ┃ ┣ 📜dbConnection.js
 ┃ ┃ ┗ 📜swagger.json
 ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┣ 📜order.js
 ┃ ┃ ┣ 📜pizza.js
 ┃ ┃ ┣ 📜token.js
 ┃ ┃ ┣ 📜topping.js
 ┃ ┃ ┗ 📜user.js
 ┃ ┣ 📂errors
 ┃ ┃ ┗ 📜customError.js
 ┃ ┣ 📂helpers
 ┃ ┃ ┣ 📜passwordEncrypt.js
 ┃ ┃ ┗ 📜sync.js
 ┃ ┣ 📂middlewares
 ┃ ┃ ┣ 📜authentication.js
 ┃ ┃ ┣ 📜errorHandler.js
 ┃ ┃ ┣ 📜idValidation.js
 ┃ ┃ ┣ 📜logging.js
 ┃ ┃ ┣ 📜permissions.js
 ┃ ┃ ┗ 📜queryHandler.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜order.js
 ┃ ┃ ┣ 📜pizza.js
 ┃ ┃ ┣ 📜token.js
 ┃ ┃ ┣ 📜topping.js
 ┃ ┃ ┗ 📜user.js
 ┃ ┗ 📂routes
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┣ 📜documents.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜order.js
 ┃ ┃ ┣ 📜pizza.js
 ┃ ┃ ┣ 📜token.js
 ┃ ┃ ┣ 📜topping.js
 ┃ ┃ ┗ 📜user.js
 ┣ 📜.env
 ┣ 📜.env-sample
 ┣ 📜.gitignore
 ┣ 📜erdPizzaAPI.png
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜readme.md
 ┗ 📜swaggerAutogen.js
```