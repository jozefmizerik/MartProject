class Loader extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `<link
      rel = "stylesheet"
    type="text/css"
      href = "./js/components/Loader/Loader.css"
      /><div class="loader-container"><div class="loader"></div><h3>Vyberám vhodné knihy...</h3></div>`;
  }
}

customElements.define("main-loader", Loader);
