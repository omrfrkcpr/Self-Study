"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sync():

module.exports = async function () {
  return null;

  /* REMOVE DATABASE *
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('- Database and all data DELETED!')
    /* REMOVE DATABASE */

  /* User */
  const User = require("../models/user");
  await User.deleteMany(); // !!! Clear collection.
  await User.create({
    _id: process.env.ADMIN_ID,
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
    email: process.env.ADMIN_EMAIL,
    firstName: process.env.ADMIN_FIRSTNAME,
    lastName: process.env.ADMIN_LASTNAME,
    isActive: true,
    isStaff: true,
    isAdmin: true,
  });
  await User.create({
    _id: process.env.STAFF_ID,
    username: process.env.STAFF_USERNAME,
    password: process.env.STAFF_PASSWORD,
    email: process.env.STAFF_EMAIL,
    firstName: process.env.STAFF_FIRSTNAME,
    lastName: process.env.STAFF_LASTNAME,
    isActive: true,
    isStaff: true,
    isAdmin: false,
  });
  await User.create({
    _id: process.env.USER_ID,
    username: process.env.USER_USERNAME,
    password: process.env.USER_PASSWORD,
    email: process.env.USER_EMAIL,
    firstName: process.env.USER_FIRSTNAME,
    lastName: process.env.USER_LASTNAME,
    isActive: true,
    isStaff: false,
    isAdmin: false,
  });

  /* Brand */
  const Brand = require("../models/brand");
  await Brand.deleteMany(); // !!! Clear collection.
  await Brand.create({
    _id: "65343222b67e9681f937f104",
    name: "Adidas",
    image:
      "https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg",
  });
  await Brand.create({
    _id: "65343222b67e9681f937f105",
    name: "Nike",
    image:
      "https://i.pinimg.com/736x/33/e6/3d/33e63d5adb0da6b303a83901c8e8463a.jpg",
  });
  await Brand.create({
    _id: "65343222b67e9681f937f107",
    name: "Puma",
    image:
      "https://staticg.sportskeeda.com/editor/2023/03/bda84-16779522739911-1920.jpg",
  });
  await Brand.create({
    _id: "65343222b67e9681f937f108",
    name: "Under Armour",
    image:
      "https://1000logos.net/wp-content/uploads/2017/08/Under-Armour-Logo.png",
  });
  await Brand.create({
    _id: "65343222b67e9681f937f109",
    name: "Reebok",
    image:
      "https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/1920x1080/551064.png",
  });
  await Brand.create({
    _id: "65343222b67e9681f937f110",
    name: "Samsung",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
  });
  await Brand.create({
    _id: "65343222b67e9681f937f111",
    name: "Apple",
    image:
      "https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg",
  });
  await Brand.create({
    _id: "65343222b67e9681f937f112",
    name: "Sony",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Sony_logo.png",
  });
  await Brand.create({
    _id: "65343222b67e9681f937f113",
    name: "LG",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/640px-LG_symbol.svg.png",
  });
  await Brand.create({
    _id: "65343222b67e9681f937f114",
    name: "Panasonic",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Panasonic_logo.png",
  });

  /* Category */
  const Category = require("../models/category");
  await Category.deleteMany(); // !!! Clear collection.
  await Category.create({
    _id: "65343222b67e9681f937f201",
    name: "Food",
  });
  await Category.create({
    _id: "65343222b67e9681f937f202",
    name: "Beverages",
  });
  await Category.create({
    _id: "65343222b67e9681f937f203",
    name: "Jewelry",
  });
  await Category.create({
    _id: "65343222b67e9681f937f204",
    name: "Electronics",
  });
  await Category.create({
    _id: "65343222b67e9681f937f205",
    name: "Clothing",
  });

  /* Firm */
  const Firm = require("../models/firm");
  await Firm.deleteMany(); // !!! Clear collection.
  await Firm.create({
    _id: "65343222b67e9681f937f301",
    name: "Amazon",
    phone: "1-888-280-4331",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    address: "410 Terry Ave N, Seattle, WA 98109, USA",
  });
  await Firm.create({
    _id: "65343222b67e9681f937f302",
    name: "Walmart",
    phone: "1-800-925-6278",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1200px-Walmart_logo.svg.png",
    address: "702 SW 8th St, Bentonville, AR 72716, USA",
  });
  await Firm.create({
    _id: "65343222b67e9681f937f303",
    name: "Alibaba",
    phone: "+86-571-8502-2088",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alibaba_logo.svg",
    address: "969 West Wen Yi Road, Yu Hang District, Hangzhou, China",
  });
  await Firm.create({
    _id: "65343222b67e9681f937f304",
    name: "eBay",
    phone: "1-866-540-3229",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ebay_logo.svg",
    address: "2025 Hamilton Ave, San Jose, CA 95125, USA",
  });
  await Firm.create({
    _id: "65343222b67e9681f937f305",
    name: "Best Buy",
    phone: "1-888-237-8289",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Best_Buy_Logo.svg",
    address: "7601 Penn Ave S, Richfield, MN 55423, USA",
  });
  await Firm.create({
    _id: "65343222b67e9681f937f306",
    name: "Target",
    phone: "1-800-440-0680",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Target_logo.svg",
    address: "1000 Nicollet Mall, Minneapolis, MN 55403, USA",
  });
  await Firm.create({
    _id: "65343222b67e9681f937f307",
    name: "Costco",
    phone: "1-800-774-2678",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Costco_Wholesale_logo_2010-10-26.svg",
    address: "999 Lake Dr, Issaquah, WA 98027, USA",
  });

  /* Product */
  const Product = require("../models/product");
  await Product.deleteMany(); // !!! Clear collection.
  await Product.create({
    _id: "65343222b67e9681f937f401",
    name: "iPhone 14 Pro",
    categoryId: "65343222b67e9681f937f204",
    brandId: "65343222b67e9681f937f111",
    price: 999.99,
    quantity: 100,
  });
  await Product.create({
    _id: "65343222b67e9681f937f402",
    name: "Samsung Galaxy S21",
    categoryId: "65343222b67e9681f937f204",
    brandId: "65343222b67e9681f937f110",
    price: 799.99,
    quantity: 150,
  });
  await Product.create({
    _id: "65343222b67e9681f937f403",
    name: "Sony WH-1000XM4",
    categoryId: "65343222b67e9681f937f204",
    brandId: "65343222b67e9681f937f112",
    price: 349.99,
    quantity: 200,
  });
  await Product.create({
    _id: "65343222b67e9681f937f404",
    name: "Adidas Ultraboost",
    categoryId: "65343222b67e9681f937f205",
    brandId: "65343222b67e9681f937f104",
    price: 180.0,
    quantity: 250,
  });
  await Product.create({
    _id: "65343222b67e9681f937f405",
    name: "Nike Air Max 270",
    categoryId: "65343222b67e9681f937f205",
    brandId: "65343222b67e9681f937f105",
    price: 150.0,
    quantity: 300,
  });

  /* Purchase */
  await Purchase.deleteMany(); // !!! Clear collection.
  await Purchase.create({
    _id: "65343222b67e9681f937f513",
    userId: process.env.USER_ID,
    firmId: "65343222b67e9681f937f301",
    brandId: "65343222b67e9681f937f123",
    productId: "65343222b67e9681f937f401",
    quantity: 2000,
    price: 20,
    createdAt: new Date("2023-01-15T12:00:00Z"),
    updatedAt: new Date("2023-01-15T12:00:00Z"),
  });
  await Purchase.create({
    _id: "65343222b67e9681f937f514",
    userId: process.env.USER_ID,
    firmId: "65343222b67e9681f937f302",
    brandId: "65343222b67e9681f937f101",
    productId: "65343222b67e9681f937f402",
    quantity: 5000,
    price: 50,
    createdAt: new Date("2023-02-20T14:30:00Z"),
    updatedAt: new Date("2023-02-20T14:30:00Z"),
  });
  await Purchase.create({
    _id: "65343222b67e9681f937f515",
    userId: process.env.USER_ID,
    firmId: "65343222b67e9681f937f303",
    brandId: "65343222b67e9681f937f102",
    productId: "65343222b67e9681f937f403",
    quantity: 1000,
    price: 100,
    createdAt: new Date("2023-03-05T16:45:00Z"),
    updatedAt: new Date("2023-03-05T16:45:00Z"),
  });
  await Purchase.create({
    _id: "65343222b67e9681f937f516",
    userId: process.env.USER_ID,
    firmId: "65343222b67e9681f937f304",
    brandId: "65343222b67e9681f937f103",
    productId: "65343222b67e9681f937f404",
    quantity: 2000,
    price: 200,
    createdAt: new Date("2023-04-10T10:00:00Z"),
    updatedAt: new Date("2023-04-10T10:00:00Z"),
  });
  await Purchase.create({
    _id: "65343222b67e9681f937f517",
    userId: process.env.USER_ID,
    firmId: "65343222b67e9681f937f305",
    brandId: "65343222b67e9681f937f104",
    productId: "65343222b67e9681f937f405",
    quantity: 5000,
    price: 500,
    createdAt: new Date("2023-05-25T18:20:00Z"),
  });

  /* Sale */
  await Sale.deleteMany(); // !!! Clear collection.
  await Sale.create({
    _id: "65343222b67e9681f937f614",
    userId: process.env.USER_ID,
    brandId: "65343222b67e9681f937f123",
    productId: "65343222b67e9681f937f401",
    quantity: 200,
    price: 30,
    createdAt: new Date("2023-06-01T09:30:00Z"),
    updatedAt: new Date("2023-06-01T09:30:00Z"),
  });
  await Sale.create({
    _id: "65343222b67e9681f937f615",
    userId: process.env.USER_ID,
    brandId: "65343222b67e9681f937f101",
    productId: "65343222b67e9681f937f402",
    quantity: 500,
    price: 75,
    createdAt: new Date("2023-07-15T11:15:00Z"),
    updatedAt: new Date("2023-07-15T11:15:00Z"),
  });
  await Sale.create({
    _id: "65343222b67e9681f937f616",
    userId: process.env.USER_ID,
    brandId: "65343222b67e9681f937f102",
    productId: "65343222b67e9681f937f403",
    quantity: 350,
    price: 150,
    createdAt: new Date("2023-08-10T14:50:00Z"),
    updatedAt: new Date("2023-08-10T14:50:00Z"),
  });
  await Sale.create({
    _id: "65343222b67e9681f937f617",
    userId: process.env.USER_ID,
    brandId: "65343222b67e9681f937f103",
    productId: "65343222b67e9681f937f404",
    quantity: 460,
    price: 300,
    createdAt: new Date("2023-09-20T16:00:00Z"),
    updatedAt: new Date("2023-09-20T16:00:00Z"),
  });
  await Sale.create({
    _id: "65343222b67e9681f937f618",
    userId: process.env.USER_ID,
    brandId: "65343222b67e9681f937f104",
    productId: "65343222b67e9681f937f405",
    quantity: 750,
    price: 750,
    createdAt: new Date("2023-10-01T10:00:00Z"),
    updatedAt: new Date("2023-10-01T10:00:00Z"),
  });

  /* Finished */
  console.log("* Synchronized.");
};
