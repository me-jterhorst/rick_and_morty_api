/* Create Card */

function createCard(obj) {
  const main = document.querySelector("main");

  // OUTER CARD
  const card = document.createElement("div");
  card.classList.add("card");

  //CARD IMG
  const card_img = document.createElement("div");
  card_img.classList.add("card__img");

  // IMG
  const img = document.createElement("img");
  img.src = obj.link;
  img.src = obj.name;

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
