db.createCollection("recipes");

db.recipes.insertMany([
  {
    _id: 1,
    recipe_name: "No-Bake Cheesecake",
    preparation_time: 40,
    categories: [1, 2, 3],
    ingredients: [
      {
        ingredient_id: 1,
        ingredient_name: "Condensed milk",
      },
      {
        ingredient_id: 2,
        ingredient_name: "Cream Cheese",
      },
      {
        ingredient_id: 3,
        ingredient_name: "Lemon Juice",
      },
      {
        ingredient_id: 4,
        ingredient_name: "Pie Crust",
      },
      {
        ingredient_id: 5,
        ingredient_name: "Cherry Jam",
      },
    ],
    steps: [
      {
        step_id: 1,
        step_description: "Beat Cream Cheese",
      },
      {
        step_id: 2,
        step_description: "Add condensed Milk and blend",
      },
      {
        step_id: 3,
        step_description: "Add Lemon Juice and blend",
      },
      {
        step_id: 4,
        step_description: "Add the mix to the pie crust",
      },
      {
        step_id: 5,
        step_description: "Spread the Cherry Jam",
      },
      {
        step_id: 6,
        step_description: "Place in refrigerator for 3h.",
      },
    ],
  },
  {
    _id: 2,
    recipe_name: "Roasted Brussels Sprouts",
    preparation_time: 30,
    categories: [3, 4, 5],
    ingredients: [
      {
        ingredient_id: 6,
        ingredient_name: "Brussels Sprouts",
      },
      {
        ingredient_id: 7,
        ingredient_name: "Lemon Juice",
      },
      {
        ingredient_id: 8,
        ingredient_name: "Sesame seeds",
      },
      {
        ingredient_id: 9,
        ingredient_name: "Pepper",
      },
      {
        ingredient_id: 10,
        ingredient_name: "Salt",
      },
      {
        ingredient_id: 11,
        ingredient_name: "Olive oil",
      },
    ],
    steps: [
      {
        step_id: 7,
        step_description: "Preheat the oven",
      },
      {
        step_id: 8,
        step_description: "Mix the ingredients in a bowl",
      },
      {
        step_id: 9,
        step_description: "Spread the mix on a baking sheet",
      },
      {
        step_id: 10,
        step_description: "Bake for 30 minutes",
      },
    ],
  },
  {
    _id: 3,
    recipe_name: "Mac & Cheese",
    preparation_time: 20,
    categories: [3],
    ingredients: [
      {
        ingredient_id: 12,
        ingredient_name: "Macaroni",
      },
      {
        ingredient_id: 13,
        ingredient_name: "Butter",
      },
      {
        ingredient_id: 14,
        ingredient_name: "Flour",
      },
      {
        ingredient_id: 10,
        ingredient_name: "Salt",
      },
      {
        ingredient_id: 9,
        ingredient_name: "Pepper",
      },
      {
        ingredient_id: 15,
        ingredient_name: "Milk",
      },
      {
        ingredient_id: 16,
        ingredient_name: "Shredded Cheddar cheese",
      },
      {
        ingredient_id: 17,
        ingredient_name: "Eggs",
      },
    ],
    steps: [
      {
        step_id: 11,
        step_description: "Cook Macaroni for 8 minutes",
      },
      {
        step_id: 12,
        step_description: "Melt butter in a saucepan",
      },
      {
        step_id: 13,
        step_description: "Add flour, salt, pepper and mix",
      },
      {
        step_id: 14,
        step_description: "Add Milk and mix",
      },
      {
        step_id: 15,
        step_description: "Cook until mix is smooth",
      },
      {
        step_id: 16,
        step_description: "Add cheddar cheese",
      },
      {
        step_id: 17,
        step_description: "Add the macaroni",
      },
    ],
  },
]);

db.createCollection("categories");

db.categories.insertMany([
  {
    _id: 1,
    category_name: "Cake",
  },
  {
    _id: 2,
    category_name: "No-Bake",
  },
  {
    _id: 3,
    category_name: "Vegetarian",
  },
  {
    _id: 4,
    category_name: "Vegan",
  },
  {
    _id: 5,
    category_name: "Gluten-Free",
  },
  {
    _id: 6,
    category_name: "Japanese",
  },
]);

db.createCollection("ingredients");

db.ingredients.insertMany([
  {
    _id: 1,
    ingredient_name: "Condensed milk",
  },
  {
    _id: 2,
    ingredient_name: "Cream Cheese",
  },
  {
    _id: 3,
    ingredient_name: "Lemon Juice",
  },
  {
    _id: 4,
    ingredient_name: "Pie Crust",
  },
  {
    _id: 5,
    ingredient_name: "Cherry Jam",
  },
  {
    _id: 6,
    ingredient_name: "Brussels Sprouts",
  },
  {
    _id: 7,
    ingredient_name: "Lemon Juice",
  },
  {
    _id: 8,
    ingredient_name: "Sesame seeds",
  },
  {
    _id: 9,
    ingredient_name: "Pepper",
  },
  {
    _id: 10,
    ingredient_name: "Salt",
  },
  {
    _id: 11,
    ingredient_name: "Olive oil",
  },
  {
    _id: 12,
    ingredient_name: "Macaroni",
  },
  {
    _id: 13,
    ingredient_name: "Butter",
  },
  {
    _id: 14,
    ingredient_name: "Flour",
  },
  {
    _id: 15,
    ingredient_name: "Milk",
  },
  {
    _id: 16,
    ingredient_name: "Shredded Cheddar cheese",
  },
  {
    _id: 17,
    ingredient_name: "Eggs",
  },
]);

db.createCollection("steps");

db.steps.insertMany([
  {
    _id: 1,
    step_description: "Beat Cream Cheese",
  },
  {
    _id: 2,
    step_description: "Add condensed Milk and blend",
  },
  {
    _id: 3,
    step_description: "Add Lemon Juice and blend",
  },
  {
    _id: 4,
    step_description: "Add the mix to the pie crust",
  },
  {
    _id: 5,
    step_description: "Spread the Cherry Jam",
  },
  {
    _id: 6,
    step_description: "Place in refrigerator for 3h.",
  },
  {
    _id: 7,
    step_description: "Preheat the oven",
  },
  {
    _id: 8,
    step_description: "Mix the ingredients in a bowl",
  },
  {
    _id: 9,
    step_description: "Spread the mix on a baking sheet",
  },
  {
    _id: 10,
    step_description: "Bake for 30 minutes",
  },
  {
    _id: 11,
    step_description: "Cook Macaroni for 8 minutes",
  },
  {
    _id: 12,
    step_description: "Melt butter in a saucepan",
  },
  {
    _id: 13,
    step_description: "Add flour, salt, pepper and mix",
  },
  {
    _id: 14,
    step_description: "Add Milk and mix",
  },
  {
    _id: 15,
    step_description: "Cook until mix is smooth",
  },
  {
    _id: 16,
    step_description: "Add cheddar cheese",
  },
  {
    _id: 17,
    step_description: "Add the macaroni",
  },
]);

/*

I assumed that the data, such as ingredients, categories, and steps, associated with each recipe, is relatively small and doesn't frequently change.
I assumed that you would often retrieve a recipe along with its associated categories, ingredients, and steps.

If the data structure is well-defined and unlikely to change frequently, MySQL with a relational schema might be a suitable choice. It offers strong data consistency, relationships between tables, and is well-suited for complex queries involving joins.

If the data structure is more flexible, and you want to rapidly develop and iterate on your application, MongoDB might be a better choice. 

*/
