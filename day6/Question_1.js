const mapAsync = (arr, callback) => {
  return new Promise((resolve, reject) => {
    if (arr) {
      resolve(arr.map((item) => callback(item)));
    } else {
      reject("something went wrong!");
    }
  });
};

mapAsync([1, 2, 3, 4, 5], (item) => item * 2)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
