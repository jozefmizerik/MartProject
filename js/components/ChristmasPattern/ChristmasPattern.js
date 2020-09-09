class ChristmasPattern extends HTMLElement {
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
      href = "./js/components/ChristmasPattern/ChristmasPattern.css"
      /><div class="ChristmasPattern"><h1>Vianočný pomocník</h1></div>`;
  }
}

customElements.define("christmas-pattern", ChristmasPattern);
