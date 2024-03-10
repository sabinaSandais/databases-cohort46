const MongoClient = require("mongodb").MongoClient;
require("dotenv").config(); // Load environment variables from .env file

// MongoDB connection URI from .env file
const uri = process.env.MONGODB_URL;
console.log("MongoDB URI:", uri);

// Create a MongoDB client
const client = new MongoClient(uri);

// Connect to MongoDB
client.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Connected to MongoDB");
});
