const apiUrl = 'https://hp-api.onrender.com/api/characters';
const charactersContainer = document.getElementById('characters-container');

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