const apiUrl = 'https://hp-api.onrender.com/api/characters';
const charactersContainer = document.getElementById('characters-container');
const houseImages = document.querySelectorAll('.houses img');

let charactersData = [];

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    charactersData = data.slice(0, 12).map(character => {
      // Ajouter la propriété house à chaque personnage
      if (character.name === 'Harry Potter') {
        character.house = 'gryffindor';
      } else if (character.name === 'Draco Malfoy') {
        character.house = 'slytherin';
      } else if (character.name === 'Luna Lovegood') {
        character.house = 'ravenclaw';
      } else if (character.name === 'Cedric Diggory') {
        character.house = 'hufflepuff';
      } else if (character.name === 'Ron Weasley') {
        character.house = 'gryffindor';
      } else if (character.name === 'Hermione Granger') {
        character.house = 'gryffindor';
      } else if (character.name === 'Minerva McGonagall') {
        character.house = 'gryffindor';
      } else if (character.name === 'Severus Snape') {
        character.house = 'slytherin';
      } else if (character.name === 'Rubeus Hagrid') {
        character.house = 'gryffindor';
      } else if (character.name === 'Neville Longbottom') {
        character.house = 'gryffindor';
      } else if (character.name === 'Ginny Weasley') {
        character.house = 'gryffindor';
      } else if (character.name === 'Cho Chang') {
        character.house = 'ravenclaw';
      } else if (character.name === 'Fred Weasley') {
        character.house = 'gryffindor';
      } else if (character.name === 'George Weasley') {
        character.house = 'gryffindor';
      }
      return character;
    });
    renderCharacters(charactersData);
  })
  .catch(error => console.error('Error fetching data:', error));

houseImages.forEach(image => {
  image.addEventListener('click', event => {
    const house = event.target.id;
    filterCharactersByHouse(house);
  });
});


function filterCharactersByHouse(house) {
  const filteredCharacters = charactersData.filter(character => character.house === house);
  renderCharacters(filteredCharacters);
}

function renderCharacters(characters) {
    charactersContainer.innerHTML = ''; // Vider le conteneur
    characters.forEach(character => {
      const houseClass = character.house.toLowerCase(); // Convertir le nom de la maison en minuscules pour utiliser comme classe
      const characterHTML = `
        <a class="character-link ${houseClass}" href="?character=${character.name}">
          <img src="${character.image}" alt="${character.name}" />
          <figcaption>${character.name}</figcaption>
        </a>
      `;
      charactersContainer.innerHTML += characterHTML;
    });
  }