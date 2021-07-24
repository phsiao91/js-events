const pokeContainer = document.getElementById("poke-container");
const pokeFormContainer = document.getElementById("poke-form-container");

function renderPoke(mon) {
    const pokeCard = document.createElement("div");
    pokeCard.id = `poke-${mon.id}`;
    pokeCard.className = "poke-card";

    const pokeImg = document.createElement("img");
    pokeImg.src = mon.img;
    pokeImg.alt = `${mon.name} image`;
    
    const pokeName = document.createElement("h3");
    pokeName.textContent = mon.name;
    
    const pokeLikes = document.createElement("h3");
    pokeLikes.textContent = 'Likes: ';
    
    const likesNum = document.createElement("h5");
    likesNum.id = "like-num"
    likesNum.textContent = mon.likes

    pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum);
    pokeContainer.appendChild(pokeCard);
}

function init() {
  pokemons.forEach(renderPoke);
}

init();

    const newHeader = document.createElement('h6');
    newHeader.innerText = "put this here"
    document.body.append(newHeader);
    
    const newTitle = document.querySelector("h1")
    newTitle.innerText = "Ray's pokemen"
    