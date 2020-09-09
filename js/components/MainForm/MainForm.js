class MainForm extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  sendForm(e) {
    e.preventDefault();
    console.log("form sent");
  }

  render() {
    const element = `<link
      rel="stylesheet"
      href="https://mrtns.eu/assets/martinus/lb/styles/main.css"
    />  <link
      rel = "stylesheet"
      href = "./js/components/MainForm/MainForm.css"
      />
    
    <main class="main-form bg-secondary m-large">
      <h2>Potrebujete pomoc s výberom tej správnej knihy?</h2><h3>Vyplňte prosím údaje</h3>
      <div class="form-control">
        <form onSubmit={this.sendForm} class="form-preference">
        <p>Preferované žánre</p>
        <div class="genre-container">
          <div class="checkbox-label"><input type="checkbox" id="checkbox-detective" /> <div><label class="form-label" for="checkbox-detective">Detektívny román</label></div></div>
          <div class="checkbox-label"><input type="checkbox" id="checkbox-foreign" /> <div><label class="form-label" for="checkbox-foreign">Cudzojazyčná literatúra</label></div></div>
          <div class="checkbox-label"><input type="checkbox" id="checkbox-adventure"/> <div><label class="form-label" for="checkbox-adventure">Dobrodružný román</label></div></div>
          <div class="checkbox-label"><input type="checkbox" id="checkbox-sci-fi"/> <div><label class="form-label" for="checkbox-sci-fi">Sci-fi</label></div></div>
          <div class="checkbox-label"><input type="checkbox" id="checkbox-humour"/> <div><label class="form-label" for="checkbox-humour">Humor</label></div></div>
          <div class="checkbox-label"><input type="checkbox" id="checkbox-poetry"/> <div><label class="form-label" for="checkbox-poetry">Poézia</label></div></div>
          <div class="checkbox-label"><input type="checkbox" id="checkbox-scientific"/> <div><label class="form-label" for="checkbox-scientific">Náučná literatúra</label></div></div>
          <div class="checkbox-label"><input type="checkbox" id="checkbox-hobby"/> <div><label class="form-label" for="checkbox-hobby">Hobby</label></div></div>
          </div>
        <p><label for="select-spread">Rozsah</label></p>
        <select id="select-spread" class="js-select select--large">
            <option>Nezáleží</option>
            <option>Krátky: do 100 strán</option>
            <option>Stredný: 100-250 strán</option>
            <option>Dlhý: nad 250 strán</option>
        </select>

        <p>Pohlavie</p>
        <input required type="radio" name="radio-gender" id="radio-gender-man" /> <label for="radio-gender-man">Muž</label> 
        <input type="radio" name="radio-gender" id="radio-gender-woman" /> <label for="radio-gender-woman">Žena</label> <br/>
        <button class="btn btn--large mt-small">Odoslať</button>
      </form></div></main>`;
    this.shadow.innerHTML = element;
    const form = this.shadow.querySelector(".form-preference");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector(".main-form").classList.add("hidden");
      document.querySelector(".main-loader").classList.add("show");
      setTimeout(() => {
        document.querySelector(".main-loader").classList.remove("show");
        document.querySelector(".backdrop").classList.remove("hidden");
        document.querySelector(".chosen-titles").classList.remove("hidden");
      }, 2500);
      //setTimout simulates asynchronous operation from server
    });
  }
}

customElements.define("main-form", MainForm);
