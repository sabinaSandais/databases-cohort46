const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "recipes",
//   multipleStatements: true,
});
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL server:", err.message);
    return;
  }
  console.log("Connected to MySQL server");
});
const createTablesQuery = ` 

CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );

CREATE TABLE Recipes (
    recipe_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
   
);

  CREATE TABLE Ingredients (
    ingredient_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );

  CREATE TABLE RecipeIngredients (
    recipe_id INT,
    ingredient_id INT,
    quantity VARCHAR(255),
    FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id),
    FOREIGN KEY (ingredient_id) REFERENCES Ingredients(ingredient_id)
  );

  CREATE TABLE Steps (
    step_id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT
  );

  CREATE TABLE RecipeSteps (
    recipe_id INT,
    step_id INT,
    sequence_number INT,
    FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id),
    FOREIGN KEY (step_id) REFERENCES Steps(step_id)
  );

`;
connection.query(createTablesQuery, (err) => {
  if (err) {
    console.error("Error creating tables:", err.message);
    connection.end(); // Close connection
    return;
  }
  console.log("Tables created successfully");
});
