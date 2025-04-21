const mongoose = require('mongoose');
const URI = "mongodb://localhost:27017/"
const mongoDB = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("✅ Connected to MongoDB");
      } catch (error) {
        console.error("❌ Failed to connect to MongoDB:", error);
      }
}
// merafood123
// module.exports = mongoDB;
mongoDB()




// const mongoose = require("mongoose");
// const connectionString =
//   "mongodb+srv://muheedk999:merafood123@cluster0.wbnvmu4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose
//   .connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// module.exports = mongoose.co