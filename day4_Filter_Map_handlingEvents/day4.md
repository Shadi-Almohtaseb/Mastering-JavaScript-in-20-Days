# Day 4: Filter, Map, Arrays, handling events

Practicing more about filtering and mapping arrays and multiple conditional operators, and more importantly handling events.

## Lesson Summary

- Filter array list and mapping over it's items.
- Use multiple conditional operators.
- Switch Case statement.
- ```javascript
  document.addEventListener("click", () => {
    console.log("clicked");
  });
  ```
- `"dblclick" "mouseover" "mouseout" is also some other events.`

## Coding Example

```javascript
const numbersList = document.getElementById("numbersList");
const filterButton = document.getElementById("filterButton");
const mapButton = document.getElementById("mapButton");

// Array of numbers
let numbers = [1, 2, 3, 4, 5];

function renderNumbersList() {
  numbersList.innerHTML = numbers
    .map((number) => `<li>${number}</li>`)
    .join("");
}

filterButton.addEventListener("click", function () {
  // Filter odd numbers from the array
  numbers = numbers.filter((number) => number % 2 === 1);
  renderNumbersList();
});

mapButton.addEventListener("click", function () {
  // Double each number in the array
  numbers = numbers.map((number) => number * 2);
  renderNumbersList();
});

renderNumbersList();
```

## My Solutions

1. ### [Use Multiple Conditional (Ternary) Operators](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators)

```javascript
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
checkSign(10);
```

2. ### [Golf Code](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)

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

3. ### [Use the map Method to Extract Data from an Array](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)

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

4. ### [Use the filter Method to Extract Data from an Array](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array)

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
