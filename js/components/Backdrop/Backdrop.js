class Backdrop extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  closeBackdrop() {
    document.querySelector(".main-form").classList.remove("hidden");
    document.querySelector(".backdrop").classList.add("hidden");
    document.querySelector(".chosen-titles").classList.add("hidden");
  }

  render = () => {
    this.shadow.innerHTML = `<link
      rel = "stylesheet"
    type="text/css"
      href = "./js/components/Backdrop/Backdrop.css"
      /><div class="backdrop"></div>`;
    const backdrop = this.shadow.querySelector(".backdrop");
    backdrop.addEventListener("click", () => {
      this.closeBackdrop();
    });
  };
}

customElements.define("main-backdrop", Backdrop);
