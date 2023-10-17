const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?type=single';
const getJokeButton = document.getElementById("getJokeButton");
const nextJokeButton = document.getElementById("nextJokeButton");
const jokeDisplay = document.getElementById("jokeDisplay");
const favoriteJokes = document.getElementById("favoriteJokes");
const loader = document.getElementById("loader");
const likeJokeButton = document.getElementById("likeJokeButton");


async function getJoke() {

    loader.style.display = "block";

    try {
        jokeDisplay.style.display = "none";
        const response = await fetch(apiUrl);
        const data = await response.json();
        const jokeText = data.joke;
        loader.style.display = "none";
        return jokeText
    } catch (error) {
        throw new Error("Não foi possível obter a piada.");
    }
}


function displayJoke(jokeText) {
    const jokeElement = document.createElement('p');
    jokeDisplay.style.display = "inline-block";
    jokeDisplay.innerHTML = "";
    jokeElement.textContent = jokeText;
    jokeDisplay.appendChild(jokeElement)
}

getJokeButton.addEventListener("click", async () => {
    try {
        getJokeButton.style.display  = 'none';
        nextJokeButton.disabled = true;

        const jokeText = await getJoke();

        displayJoke(jokeText)

        nextJokeButton.style.display = "inline-block";
        likeJokeButton.style.display = "inline-block";
    } catch (error) {
        alert(error.message);
    } finally {
        getJokeButton.disabled = false;
        nextJokeButton.disabled = false;
    }
})

function saveFavoriteJokes(jokeText) {
    const favoriteJokesList = JSON.parse(localStorage.getItem('favoriteJokes')) || [];

    favoriteJokesList.push(jokeText)

    localStorage.setItem(
        'favoriteJokes', JSON.stringify(favoriteJokesList)
    )
}

function displayFavoriteJokes() {
    const favoriteJokesList = JSON.parse(localStorage.getItem('favoriteJokes')) || [];

    favoriteJokes.style.display = 'flex';
    favoriteJokes.innerHTML = '';
    
    const titleFavoriteJokes = document.querySelector('.title-favoriteJokes');
    titleFavoriteJokes.style.display = 'inline-block';


    for (const joke of favoriteJokesList) {
        const jokeElement = document.createElement("p");
        jokeElement.textContent = joke;
        favoriteJokes.appendChild(jokeElement);
    }
}

nextJokeButton.addEventListener("click", async () => {
    getJokeButton.click(); // Simular um clique no botão "Obter Joke" para buscar outra imagem
});

likeJokeButton.addEventListener('click', () => {
    const jokeText = document.querySelector('#jokeDisplay > p').textContent;
    saveFavoriteJokes(jokeText);
    displayFavoriteJokes();
})

displayFavoriteJokes();