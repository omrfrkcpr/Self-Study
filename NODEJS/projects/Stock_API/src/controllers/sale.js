"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Sale Controller

/* 
    Stokta 100 ürün
    müşteri 10 ader aldı kalan ürün 90
    10 ürün müşteri 5 ni geri ver iade etti kalan 95
    diğer müşteri 5 ürün aldı kalan 90
    bu müşteri yanlışlık olmuş bu satışı sildik kalan 95
*/ 
const Sale = require('../models/sale')
const Product = require('../models/product')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "List Sales"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */
        const data = await res.getModelList(Sale, {}, [
            { path: 'userId', select: 'username email' },
            'brandId',
            { path: 'productId', select: 'productId name categoryId' }
        ])

        res.status(200).send({
            error: false,
            details: await res.getModelsListDetails(Sale),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Create Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Sale 1"
                }
            }
        */

        // userId verisini req.user'dan al
        req.body.userId = req.user._id

        const productData = await Product.findOne({ _id: req.body.productId });
        // mevcut stok miktarı gelen satım isteği miktarından büyük veya eşitse işlem yapılabilir
        if(productData.quantity >= req.body.quantity){
          // Create

          const data = await Sale.create(req.body);

          // Satınalma sonrası quantity bilgisini göncelle yani artış olmalı
          await Product.updateOne(
            { _id: data.productId },
            { $inc: { quantity: -data.quantity } }
          );

          res.status(201).send({
            error: false,
            data,
          });
        }else{
             res.errorStatusCode = 422;
             throw new Error(
               `There is not enough product-quantity for this sale. This product's stock is ${productData.quantity}!`
             );
        }        
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Get Single Sale"
        */

        console.log('read run');

        if (req.params.id) {
            // Single

            const data = await Sale.findOne({ _id: req.params.id })
                .populate([
                    { path: 'userId', select: 'username email' },
                    'brandId',
                    { path: 'productId', select: 'productId name categoryId' }
                ])

            res.status(200).send({
                error: false,
                data
            })
        } else {
            // All

            const data = await res.getModelList(Sale, {}, [
                { path: 'userId', select: 'username email' },
                'brandId',
                { path: 'productId', select: 'productId name categoryId' }
            ])

            res.status(200).send({
                error: false,
                details: await res.getModelListDetails(Sale),
                data
            })
        }
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Update Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Sale 1"
                }
            }
        */

        if (req.body?.quantity) {
            // mevcut adet bilgisini al:
            const currentSale = await Sale.findOne({ _id: req.params.id })
            // farkı bul:
            const difference = req.body.quantity - currentSale.quantity
            // farkı Product'a güncelle
            const updateProduct = await Product.updateOne({ _id: currentSale.productId }, { $inc: { quantity: -difference } })

            // Update işlemi olmamışsai hata verdir. hata verince sistem devam etmeyecektir.
            if(updateProduct.modifiedCount == 0){
                res.errorStatusCode = 422
                throw new Error('There is not enough product-quantity for this sale.')
            }
        }

        // Update
        const data = await Sale.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Sale.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Delete Sale"
        */

        // mevcut adet bilgisini al:
        const currentSale = await Sale.findOne({ _id: req.params.id })

        // Delete
        const data = await Sale.deleteOne({ _id: req.params.id})

        // Adedi Product'dan eksilt:
        const updateProduct = await Product.updateOne(
            {_id: currentSale.productId}, 
            {$inc: {quantity: +currentSale.quantity}}
        )

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}