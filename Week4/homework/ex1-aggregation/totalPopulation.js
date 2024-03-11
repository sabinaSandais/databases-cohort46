async function getTotalPopulationByCountry(db, country) {
  const pipeline = [
    {
      $match: {
        Country: country,
      },
    },
    {
      $group: {
        _id: "$Year",
        countPopulation: {
          $sum: { $add: ["$M", "$F"] },
        },
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
  ];
  const result = await db
    .collection("Data_Aggregate")
    .aggregate(pipeline)
    .toArray();
  return result;
}
export { getTotalPopulationByCountry };
