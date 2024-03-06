const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");
});

function executeQuery(query, callback) {
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    callback(results);
  });
}

// Query 1: Select countries with a population greater than 8 million
executeQuery(
  `SELECT Name FROM country WHERE Population > 8000000`,
  (results) => {
    console.log("Countries with population more than 8M selected!");
    console.log(results.map((country) => country.Name));
  }
);

// Query 2: Select countries with "land" in their names
executeQuery(`SELECT Name FROM country WHERE Name LIKE '%land%'`, (results) => {
  console.log("Countries selected which have land in their names!");
  console.log(results.map((country) => country.Name));
});

// Query 3: Select cities with a population between 500K and 1M
executeQuery(
  `SELECT Name FROM city WHERE Population BETWEEN 500000 AND 1000000`,
  (results) => {
    console.log("Cities selected where population is between 500K and 1M!");
    console.log(results.map((city) => city.Name));
  }
);

// Query 4: Select countries located in Europe
executeQuery(
  `SELECT Name FROM country WHERE continent = 'Europe'`,
  (results) => {
    console.log("Countries located in Europe selected!");
    console.log(results.map((country) => country.Name));
  }
);

// Query 5: Select all countries ordered by surface area in descending order
executeQuery(
  `SELECT Name FROM country ORDER BY SurfaceArea DESC`,
  (results) => {
    console.log(
      "All the countries listed in the descending order of their surface areas."
    );
    console.log(results.map((country) => country.Name));
  }
);

// Query 6: Select cities in the Netherlands (country code 'NLD')
executeQuery(`SELECT Name FROM city WHERE CountryCode = 'NLD'`, (results) => {
  console.log("Names of all the cities in the Netherlands listed!");
  console.log(results.map((city) => city.Name));
});

// Query 7: Select population of the city Rotterdam
executeQuery(
  `SELECT Population FROM city WHERE Name ='Rotterdam'`,
  (results) => {
    console.log("Population of Rotterdam selected!");
    console.log(results[0].Population);
  }
);

// Query 8: Select top 10 countries by surface area
executeQuery(
  `SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10`,
  (results) => {
    console.log("The top 10 countries listed by their Surface Area.");
    console.log(results.map((country) => country.Name));
  }
);

// Query 9: Select top 10 most populated cities
executeQuery(
  `SELECT Name FROM city ORDER BY Population DESC LIMIT 10`,
  (results) => {
    console.log("The top 10 most populated cities listed.");
    console.log(results.map((city) => city.Name));
  }
);

// Query 10: Calculate the total population of the world
executeQuery(
  `SELECT SUM(Population) as totalPopulation FROM country`,
  (results) => {
    console.log("The population of the world is calculated!");
    console.log(results[0].totalPopulation);
  }
);

connection.end();
