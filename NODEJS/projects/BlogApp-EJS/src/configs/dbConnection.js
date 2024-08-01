//* MongoDb connection

const mongoose = require("mongoose");

// main().then(()=> console.log("DB Connection")).catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect(process.env.MONGODB);
// }

mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("DB Connection"))
    .catch((err) => console.log(err));
