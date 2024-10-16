const apiUrl = 'https://hp-api.onrender.com/api/characters';
const charactersContainer = document.getElementById('characters-container');
const houseImages = document.querySelectorAll('.houses img');

let charactersData = [];

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    charactersData = data.slice(0, 12).map(character => {
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

houseImages.forEach(image => {
  image.addEventListener('click', event => {
    const house = event.target.id;
    filterCharactersByHouse(house);
  });
});

function renderCharacters(characters) {
    charactersContainer.innerHTML = '';
    characters.forEach(character => {
      const houseClass = character.house.toLowerCase();
      const characterHTML = `
        <a class="character-link ${houseClass}" href="?character=${character.name}">
          <img src="${character.image}" alt="${character.name}" />
          <figcaption>${character.name}</figcaption>
        </a>
      `;
      charactersContainer.innerHTML += characterHTML;
    });
  }

function filterCharactersByHouse(house) {
  const filteredCharacters = charactersData.filter(character => character.house === house);
  renderCharacters(filteredCharacters);
}

// fonctionne 

const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('characterId');

fetch(`https://hp-api.onrender.com/api/characters/${characterId}`)
  .then(response => response.json())
  .then(characterData => {
    // ne pas toucher à ça
    const characterDetailsHTML = `
      <h1>${characterData.name}</h1>
      <p>House: ${characterData.house}</p>
      <p>Age: ${characterData.age}</p>
      <!-- Add more details here -->
    `;
    document.getElementById('character-details').innerHTML = characterDetailsHTML;
  })