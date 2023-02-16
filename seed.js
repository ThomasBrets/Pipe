const Product = require("./api/models/Products");
const Users = require("./api/models/Users");
const History = require("./api/models/History");
const data = require("./seed.json");
const dotenv = require("dotenv");
dotenv.config();
const { connection } = require("./api/config/db");


const seedDB = async () => {
  try {
    const promisesArray = []

    promisesArray.push(Product.deleteMany({}))
    promisesArray.push(Product.insertMany(data))
    promisesArray.push(History.deleteMany({}))
    promisesArray.push(Users.deleteMany({}))
    promisesArray.push(Users.create({
      name: "PipeAdmin",
      password: "Pipe123",
      email: "pipe@gmail.com",
      admin: true,
    }))
    await Promise.all(promisesArray)
    console.log("seed complete");
    process.exit(0); 
  } catch (error) {
    console.log(error);
  }
};

connection.once("open", () => {
  seedDB();
});



// const seedDB = async () => {
//   try {
//     await Product.deleteMany({});
//     await Product.insertMany(data);
//     await History.deleteMany({});
//     await Users.deleteMany({});
//     await Users.create({
//       name: "PipeAdmin",
//       password: "Pipe123",
//       email: "pipe@gmail.com",
//       admin: true,
//     });
//     console.log("seed complete");
//   } catch (error) {
//     console.log(error);
//   }
// };

