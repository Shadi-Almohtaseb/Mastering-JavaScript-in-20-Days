let data;

const getData = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const myData = await response.json();
    data = myData.results;
    displayCharacters(data);
  } catch (error) {
    console.log("Error:", error);
  }
};

const displayCharacters = (data) => {
  const list = document.getElementById("characterList");
  let charactersHTML = "";

  //   if (data.length === 0) {
  //     charactersHTML = "There is no character match!";
  //   }

  const filterByCategory = (category) => {
    if (category) {
      charactersHTML = "";
      data
        .filter((character) => character.status === category)
        .forEach((character) => {
          charactersHTML += `
            <li class="card">
              <img class="wikiImage" src="${character.image}" alt="image" />
              <div class="content">
                <div class="liftContent">
                  <span>${character.name}</span>
                  <h3>Last Location:</h3>
                  <h4>${character.location.name}</h4>
                </div>
                <div class="rightContent">
                  <span>${character.status}</span>
                  <span>${character.species}</span>
                  <span>${character.gender}</span>
                  </div>
                  </div>
                  </li>
                  `;
        });
    } else if (data.length === 0) {
      charactersHTML = `
        <h1 class="message">
         There is no character match!
         </h1>
         `;
    } else {
      charactersHTML = "";
      data.forEach((character) => {
        charactersHTML += `
                <li class="card">
                <img class="wikiImage" src="${character.image}" alt="image" />
                <div class="content">
                <div class="liftContent">
                <span>${character.name}</span>
                <h3>Last Location:</h3>
                <h4>${character.location.name}</h4>
                </div>
                <div class="rightContent">
                <span>${character.status}</span>
                <span>${character.species}</span>
                <span>${character.gender}</span>
                </div>
                  </div>
                </li>
              `;
      });
    }

    list.innerHTML = charactersHTML;
  };

  // Filter by category buttons
  const filterButtons = document.querySelectorAll(".filter-button");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      filterByCategory(category);
    });
  });

  // Display all characters initially
  filterByCategory("");
};

const handleSearch = () => {
  const searchInput = document.getElementById("searchInput");
  const searchText = searchInput.value.toLowerCase();

  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(searchText)
  );

  displayCharacters(filteredData);
};

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", handleSearch);

getData();
