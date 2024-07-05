"use strict";
"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */
const router = require("express").Router();
/* ------------------------------------------ */
/*              DOCUMENTATION                 */
/* ------------------------------------------ */
// https://swagger-autogen.github.io/docs/
// $ npm i swagger-autogen
// $ npm i swagger-ui-express
// $ npm i redoc-express

// vercel swagger surumden kaynakli dogrudan cekemiyor. O neden cdn linklerini bagladik.
const options = {
  customCssUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui.css",
  swaggerOptions: { persistAuthorization: true },
  customJs: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui-bundle.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui-standalone-preset.js",
  ],
};

//! SWAGGER & Redoc
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");
const redoc = require("redoc-express");

//* URL => /documents
//* JSON
router.use("/json", (req, res) => {
  res.sendFile("swagger.json", { root: "." });
});
//*swagger
router.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options)
);
//? REDOC
router.use(
  "/redoc",
  redoc({
    title: "Personnel Api",
    specUrl: "/documents/json",
  })
);

module.exports = router;
