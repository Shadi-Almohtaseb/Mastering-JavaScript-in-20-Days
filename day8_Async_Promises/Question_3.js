const apis = [
  {
    apiName: "products",
    apiUrl: "https://dummyjson.com/products",
  },
  {
    apiName: "users",
    apiUrl: "https://dummyjson.com/users",
  },
  {
    apiName: "posts",
    apiUrl: "https://dummyjson.com/posts",
  },
  {
    apiName: "comments",
    apiUrl: "https://dummyjson.com/comments",
  },
];

const executeInSequenceWithPromises = async (apis) => {
  const results = await Promise.all(
    apis.map(async (api) => {
      const res = await fetch(api.apiUrl);
      const data = await res.json();
      return {
        apiName: api.apiName,
        apiUrl: api.apiUrl,
        apiData: data,
      };
    })
  );
  return results;
};

executeInSequenceWithPromises(apis)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
