const url = `https://rickandmortyapi.com/api/character`;
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // RESET MAIN
  const main_element = document.querySelector("main");
  main_element.textContent = "";

  const selection = document.querySelector("select").value.toLowerCase();
  const input = document.querySelector("input").value;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const api_data = [...data.results];

      if (input) {
        inputCard(api_data, input);
      } else {
        if (selection === "all") {
          api_data.forEach((character) => {
            createCard(character, "all");
          });
        } else {
          filterCard(api_data, selection);
        }
      }
      form.reset();
    });
});

/* Create Card */
function createCard(obj, status) {
  const main = document.querySelector("main");
  // OUTER CARD
  const card = document.createElement("div");
  card.classList.add("card", status);
  card.id = obj.id;

  //CARD IMG
  const card_img = document.createElement("div");
  card_img.classList.add("card__img");

  // IMG
  const img = document.createElement("img");
  img.src = obj.image;
  img.alt = obj.name;

  // CARD TXT
  const card_txt = document.createElement("div");
  card_txt.classList.add("card__txt");

  // TXT
  const txt = document.createElement("p");
  txt.textContent = obj.name;

  // APPEND SLIDE
  card_img.append(img);
  card_txt.append(txt);
  card.append(card_img);
  card.append(card_txt);
  main.append(card);
}

function filterCard(data, selection) {
  const filtered_array = data.filter(
    (person) => person.status.toLowerCase() === selection
  );
  filtered_array.forEach((filtered_character) => {
    return createCard(filtered_character, selection);
  });
}
function inputCard(data, input) {
  const filtered_array = data.filter(
    (person) => person.name.toLowerCase() === input.toLowerCase()
  );
  filtered_array.forEach((filtered_character) => {
    return createCard(filtered_character, "person");
  });
}
