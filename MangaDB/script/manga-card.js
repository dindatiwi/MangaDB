import './manga-item.js';
class mangaCard extends HTMLElement {
    set mangas(mangas) {
        this._mangas = mangas;
        this.render();
   }
   
   render() {
    this.innerHTML = "";
    this._mangas.forEach(manga => {
        const cardElement = document.createElement("manga-item");
        cardElement.manga = manga
        this.appendChild(cardElement);
    })
}
}
 
customElements.define("manga-card", mangaCard);