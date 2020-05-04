class mangaItem extends HTMLElement {
    set manga(manga) {
        this._manga = manga;
        this.render();
   }

    render() {
        this.innerHTML = `
        <div class="cover">
            <img src="${this._manga.image_url}" alt="" >
        </div>
        <div class="item-summary">
            <h3>${this._manga.title}</h3>
            <p>Chapter : ${this._manga.chapters}</p>
            <p>Volume : ${this._manga.volumes}</p>
            <p>Score : ${this._manga.score}</p>
            <p class="sinopsis">Synopsis : ${this._manga.synopsis}</p>
        </div>`
    }
}

customElements.define("manga-item", mangaItem);