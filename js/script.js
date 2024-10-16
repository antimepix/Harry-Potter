const apiUrl = 'https://hp-api.onrender.com/api/characters';
const charactersContainer = document.getElementById('characters-container');
const houseImages = document.querySelectorAll('.houses img');

houseImages.forEach(image => {
  image.addEventListener('click', event => {
    const house = event.target.id;
    filterCharactersByHouse(house);
  });
});

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const characters = data.slice(0, 12);
    characters.forEach(character => {
      const characterHTML = `
        <a class="character-link" href="${character.wikiUrl}">
          <img src="${character.image}" alt="${character.name}" />
          <figcaption>${character.name}</figcaption>
        </a>
      `;
      charactersContainer.innerHTML += characterHTML;
    });
  })
  .catch(error => console.error('Error fetching data:', error));

function filterCharactersByHouse(house) {
  const characters = Array.from(charactersContainer.children);
  characters.forEach(character => {
    const characterHouse = character.querySelector('figcaption').textContent;
    if (characterHouse.includes(house)) {
      character.style.display = 'block';
    } else {
      character.style.display = 'none';
    }
  });
}