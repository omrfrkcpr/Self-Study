"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Pizza Controller:

const Pizza = require('../../models/pizza')

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Pizza, {}, "toppingIds");

    // res.status(200).send({
    //     error: false,
    //     details: await res.getModelListDetails(Pizza),
    //     data
    // })

    // Add '?' parameters to url if there is not:
    if (!req.originalUrl.includes("?")) req.originalUrl += "?";

    res.render("pizzaList", {
      details: await res.getModelListDetails(Pizza),
      pizzas: data,
      pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, ""),
      user: req.session?.user,
    });
  },

  create: async (req, res) => {
    if (req.method == "POST") {
      if (req.files) {
        const images = [];
        req.files.forEach((image) => images.push("/uploads/" + image.filename)); //* upload ile gelen resimlerin ismini yakaladık
        //* db ye kaydetmek için req.body ye ekliyoruz
        req.body.images = req.body.images
          ? Array.isArray(req.body.images)
            ? [...req.body.images, ...images]
            : [req.body.images, ...images]
          : images; //* aynı anda hem string hem de upload olarak gönderebilsin
      }
      const data = await Pizza.create(req.body);

      // res.status(201).send({
      //     error: false,
      //     data
      // })

      res.redirect("/pizzas/" + data.id);
    } else {
      res.render("pizzaForm", {
        pizza: null,
        user: req.user,
      });
    }
  },

  read: async (req, res) => {
    const data = await Pizza.findOne({ _id: req.params.id }).populate(
      "toppingIds"
    );

    // res.status(200).send({
    //     error: false,
    //     data
    // })

    res.render("pizzaRead", {
      pizza: data,
      user: req.user,
    });
  },

  update: async (req, res) => {
    if (req.method == "POST") {
      const images = [];
      if (req.files) {
        req.files.forEach(
          (image) => images.push("/uploads/" + image.filename) //* önceki resimlerin üzerine ekledik.
        );
        if (req.body.images || images.length > 0) {
          req.body.images = req.body.images
            ? Array.isArray(req.body.images)
              ? [...req.body.images, ...images]
              : [req.body.images, ...images]
            : images;
        }
        // req.body.images = req.body.images
        //   ? Array.isArray(req.body.images)
        //     ? [...req.body.images, ...pizza.images]
        //     : [req.body.images, ...pizza.images]
        //   : pizza.images;
      }
      const data = await Pizza.updateOne({ _id: req.params.id }, req.body, {
        runValidators: true,
      });

      // res.status(202).send({
      //     error: false,
      //     data,
      //     new: await Pizza.findOne({ _id: req.params.id })
      // })

      res.redirect("/pizzas/" + req.params.id);
    } else {
      res.render("pizzaForm", {
        pizza: await Pizza.findOne({ _id: req.params.id }).populate(
          "toppingIds"
        ),
        user: req.user,
      });
    }
  },

  delete: async (req, res) => {
    const data = await Pizza.deleteOne({ _id: req.params.id });
    //* silinen pizzanın resmininde durmasına gerek yok diyerek o resmi kayıtlarımızdan sildik.
    if (data?.images) {
      data?.images.forEach((image) => {
        if (!image.startsWith("http")) {
          fs.unlink(`.${image}`, (err) => console.log(err));
        }
      });
    }
    // Go to home:
    res.redirect("/pizzas");
  },
};