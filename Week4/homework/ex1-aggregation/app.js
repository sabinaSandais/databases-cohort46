const { MongoClient } = require("mongodb");
const fs = require("fs");
const csv = require("csv-parser");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
  const uri = process.env.MONGODB_URL;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to the server");

    const database = client.db("databaseWeek4");
    const collectionName = "Data_Aggregate"; // Choose a name for your collection

    const filePath = "./population_pyramid_1950-2022.csv";

    // Read CSV and import data into MongoDB
    await importCSVDataToMongoDB(database, collectionName, filePath, client);

    console.log("Data import completed");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

async function importCSVDataToMongoDB(db, collectionName, filePath, client) {
  const documents = [];

  // Read the CSV file
  await new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        // Convert CSV row to MongoDB document
        const document = {
          Country: row.Country,
          Year: parseInt(row.Year),
          Age: row.Age,
          M: parseInt(row.M),
          F: parseInt(row.F),
        };
        documents.push(document);
      })
      .on("end", () => {
        resolve();
      })
      .on("error", (error) => {
        reject(error);
      });
  });

  try {
    // Insert all documents into the MongoDB collection
    await db.collection(collectionName).insertMany(documents);
    console.log("CSV file successfully imported into MongoDB");
  } catch (error) {
    console.error("Error inserting documents:", error);
  }
}

main().catch(console.error);
