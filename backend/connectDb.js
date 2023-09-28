const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://spandanmozumderprof:spandanmozumderprof@cluster0.igadoy1.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(mongoURI);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
    const foodCollection = await mongoose.connection.db.collection(
      "food_items"
    );
    foodCollection.find({}).toArray(async function (err, data) {
      const categoryCollection = await mongoose.connection.db.collection(
        "food_category"
      );
      categoryCollection.find({}).toArray(async function (err, Catdata) {
        callback(err, data, Catdata);
      });
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  // listCollections({name: 'food_items'}).toArray(function (err, database) {
  // });
  //     module.exports.Collection = database;
  // });
};

module.exports = connectDb;
