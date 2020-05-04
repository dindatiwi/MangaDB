class headFirst extends HTMLElement {
 connectedCallback(){
    this.innerHTML = `
    <h1>Find Your Favorite Manga Here !</h1>
    <form autocomplete="off" class="search">
        <input type="text" id="manga" placeholder="Search Your Manga Here">
        <button id="button" type="submit">Search</button>
    </form>`
 }
}
 
customElements.define("head-first", headFirst);