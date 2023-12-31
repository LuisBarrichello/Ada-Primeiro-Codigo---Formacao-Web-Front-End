const apiUrl = "https://api.thedogapi.com/v1/images/search"; // API de imagens de cachorro
const apiKey =
  "live_xeu3x3YTMqE9kJJvIMxMwkw59gYlOM8sOxrchxs7du0rXsIMlCc198DGysN4T2gb"; // Substitua pelo seu próprio API Key da The Dog API
const getImageButton = document.getElementById("getImageButton");
const nextImageButton = document.getElementById("nextImageButton");
const imageDisplay = document.getElementById("imageDisplay");
const favoriteImages = document.getElementById("favoriteImages");

// Função para buscar uma imagem de cachorro da API
async function getImage() {
  try {
    const response = await fetch(`${apiUrl}?api_key=${apiKey}`);
    const data = await response.json();
    return data[0].url;
  } catch (error) {
    throw new Error("Não foi possível obter a imagem de cachorro.");
  }
}

// Função para exibir uma imagem na página
function displayImage(imageUrl) {
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  imageElement.classList.add("dog-image");
  imageDisplay.innerHTML = "";
  imageElement.addEventListener("click", () => {
    const saveOnFavorites = confirm("Salvar nos favoritos?");
    if (saveOnFavorites) {
      saveFavoriteImage(imageUrl);
    }
  });
  imageDisplay.appendChild(imageElement);
}

// Função para salvar uma imagem de cachorro curtida no localStorage
function saveFavoriteImage(imageUrl) {
  const favoriteImagesList =
    JSON.parse(localStorage.getItem("favoriteImages")) || [];
  favoriteImagesList.push(imageUrl);
  localStorage.setItem("favoriteImages", JSON.stringify(favoriteImagesList));
}

// Função para exibir a lista de imagens de cachorro curtidas
function displayFavoriteImages() {
  const favoriteImagesList =
    JSON.parse(localStorage.getItem("favoriteImages")) || [];
  favoriteImages.innerHTML = "<h3>Imagens de Cachorro Curtidas</h3>";

  for (const imageUrl of favoriteImagesList) {
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.classList.add("dog-image");
    favoriteImages.appendChild(imageElement);
  }
}

// Evento de clique no botão "Obter Imagem"
getImageButton.addEventListener("click", async () => {
  try {
    getImageButton.disabled = true;
    nextImageButton.disabled = true;
    const imageUrl = await getImage();
    displayImage(imageUrl);
    nextImageButton.style.display = "inline-block";
  } catch (error) {
    alert(error.message);
  } finally {
    getImageButton.disabled = false;
    nextImageButton.disabled = false;
  }
});

// Evento de clique no botão "Próxima Imagem"
nextImageButton.addEventListener("click", async () => {
  getImageButton.click(); // Simular um clique no botão "Obter Imagem" para buscar outra imagem
});

// Inicialização: Exibir imagens de cachorro curtidas salvas
displayFavoriteImages();
