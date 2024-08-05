"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Pizza = require("../../models/pizza");
const fs = require("node:fs");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Pizzas"]
            #swagger.summary = "List Pizzas"
            #swagger.description = `
                You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const data = await res.getModelList(Pizza);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails,
      data,
    });
  },
  //! CRUD(Create-Read-Update-Delete)
  create: async (req, res) => {
    /*
            #swagger.tags = ["Pizzas"]
            #swagger.summary = "Create Pizza"
        */

    // console.log(req.file) //* single file
    console.log(req.files);
    console.log(req.body);
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
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Pizzas"]
            #swagger.summary = "Get Single Pizza"
        */
    const data = await Pizza.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Pizzas"]
            #swagger.summary = "Update Pizza"
        */

    // const pizza = await Pizza.findOne(
    //   { _id: req.params.id },
    //   { _id: 0, images: 1 }
    // );
    const images = [];
    // console.log(pizzaImages)
    //! db deki önceki resimleri silmesin onların üzerine eklesin
    // if (req.files) {
    //   req.files.forEach(
    //     (image) => pizza.images.push("/uploads/" + image.filename) //* önceki resimlerin üzerine ekledik.
    // );
    if (req.files) {
      req.files.forEach(
        (image) => images.push("/uploads/" + image.filename) //* önceki resimlerin üzerine ekledik.
      );
      // req.body.images = req.body.images
      //   ? Array.isArray(req.body.images)
      //     ? [...req.body.images, ...pizza.images]
      //     : [req.body.images, ...pizza.images]
      //   : pizza.images;
    }
    // else if(req.body.images) {//* kullanıcı upload etmeden string olarak da resim url i gönderebilir.
    //   if(Array.isArray(req.body.images)) {
    //     req.body.images = [...req.body.images, ...pizza.images];
    //   }else {
    //     req.body.images = [req.body.images, ...pizza.images];
    //   }
    // }
    //* yukarıdaki örnekte update edilecekler arasına yeni resim yoksa resimleri eklemedik.
    // req.body.images = req.body.images
    //   ? Array.isArray(req.body.images)
    //     ? [...req.body.images, ...pizza.images]
    //     : [req.body.images, ...pizza.images]
    //   : pizza.images;
    //* resim upload edildiyse veya string olarak resim yollandıysa
    if (req.body.images || images.length > 0) {
      req.body.images = req.body.images
        ? Array.isArray(req.body.images)
          ? [...req.body.images, ...images]
          : [req.body.images, ...images]
        : images;
    }
    //! önceki pizzaya ait resim dosyaları kaldırılabilir.

    const data = await Pizza.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      data,
      newData: await Pizza.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Pizzas"]
            #swagger.summary = "Delete Pizza"
        */
    // const data = await Pizza.deleteOne({ _id: req.params.id });
    const data = await Pizza.findOneAndDelete({ _id: req.params.id });
    // console.log(data);
    //* silinen pizzanın resmininde durmasına gerek yok diyerek o resmi kayıtlarımızdan sildik.
    if (data?.images) {
      data?.images.forEach((image) => {
        if (!image.startsWith("http")) {
          fs.unlink(`.${image}`, (err) => console.log(err));
        }
      });
    }

    res.status(data ? 204 : 404).send({
      error: !data,
      data,
      message: "Pizza not found!",
    });
  },
};
