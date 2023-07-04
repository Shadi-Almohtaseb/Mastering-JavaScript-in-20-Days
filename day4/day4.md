# Day 4: Filter, Map, Arrays, handling events

Practicing more about filtering and mapping arrays and multiple conditional operators, and more importantly handling events.

## Lesson Summary

- Filter array list and mapping over it's items.
- Use multiple conditional operators.
- Switch Case statement.
- ```javascript
  document.addEventListener("click", () => {
    console.log("clicked")
  });
  ```

## Coding Exercises

1.

### [Use Multiple Conditional (Ternary) Operators](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators)

```javascript
function checkSign(num) {}
checkSign(10);
```

2.

### [Golf Code](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)

```javascript
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  // Only change code below this line
  return "Change Me";
  // Only change code above this line
}
golfScore(5, 4);
```

3.

### [Use the map Method to Extract Data from an Array](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)

```javascript
// The global variable
// Only change code below this line
const ratings = [];
for (let i = 0; i < watchList.length; i++) {
  ratings.push({
    title: watchList[i]["Title"],
    rating: watchList[i]["imdbRating"],
  });
}

// Only change code above this line

console.log(JSON.stringify(ratings));
```

4.

### [Use the filter Method to Extract Data from an Array](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array)

```javascript
// Only change code below this line
const filteredList = "";
// Only change code above this line
console.log(filteredList);
```

## My Solutions

1.

```javascript
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
checkSign(10);
```

2.

```javascript
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  switch (true) {
    case strokes === 1:
      return names[0];
    case strokes <= par - 2:
      return names[1];
    case strokes === par - 1:
      return names[2];
    case strokes === par:
      return names[3];
    case strokes === par + 1:
      return names[4];
    case strokes === par + 2:
      return names[5];
    default:
      return names[6];
  }
  // Only change code above this line
}
golfScore(4, 1);
```

3.

```javascript
// Only change code below this line
let ratings = [];
ratings = watchList.map((item, index) => ({
  title: item.Title,
  rating: item.imdbRating,
}));
// Only change code above this line
console.log(JSON.stringify(ratings));
```

4.

```javascript
// Only change code below this line
const filteredList1 = watchList.filter(
  (item) => Number(item.imdbRating) >= 8.0
);
const filteredList = filteredList1.map((item) => ({
  title: item.Title,
  rating: item.imdbRating,
}));
// Only change code above this line
console.log(filteredList);
```
