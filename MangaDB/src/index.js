import "./styles/style.css";
import "../script/head-first.js";
import "../script/manga-card.js";
//API info
const url = "https://api.jikan.moe/v3/search/manga?q=";

//Button
const searchButton = document.querySelector('#button');
const searchBar = document.querySelector('#manga');
const mangaItemElement = document.querySelector('manga-card');


//AJAX funct
const getManga = () =>{
    const input = searchBar.value;
    const urlToFetch = `${url}${input}&limit=8`;
    fetch(urlToFetch)
    .then(response =>
        {
        if(response.ok){
            return response.json()
        }throw new Error('Req Failed !')
    },networkError => console.log(networkError.message))
    .then(jsonResponse=>{
        const mangaList = jsonResponse.results
        const contents = mangaList.map(result => card(result)).join('');
        mangaItemElement.innerHTML = contents
    })
};

const card = (result) => {
    return `        <div class="card">
    <div class="cover">
        <img src="${result.image_url}" alt="" >
    </div>
    <div class="item-summary">
        <h3>${result.title}</h3>
        <p>Chapter : ${result.chapters}</p>
        <p>Volume : ${result.volumes}</p>
        <p>Score : ${result.score}</p>
        <p class="sinopsis">Synopsis : ${result.synopsis}</p>
    </div>
</div>`
}

//Displaying
const displayManga = (event) => {
    event.preventDefault();
    getManga();
  };

  //Event
  searchButton.addEventListener('click', displayManga);