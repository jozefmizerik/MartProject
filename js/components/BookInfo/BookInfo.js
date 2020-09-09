class BookInfo extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.booksFromServer = [
      {
        id: "731719",
        name: "Kráľovstvo",
        author: "Jo Nesbo",
        link: "https://www.martinus.sk/?uItem=731719",
        review: {
          text:
            "Jo Nesbø tentoraz prekvapuje a opäť dokazuje svoje majstrovstvo. Hrdinom jeho najnovšieho románu nie je fenomenálny vyšetrovateľ Harry Hole, ale mechanik Roy Opgard, ktorý žije na rodinnom statku hlboko v nórskych horách. Jeho mladší brat Carl sa po rokoch vracia domov z Ameriky s plánom postaviť luxusný hotel, ktorý by upadajúcej oblasti opäť vdýchol život. Royova lojalita voči rodine však prechádza skúškou, keď zistí, že za Carlovými veľkolepými plánmi sa skrývajú nenásytnosť a zrada. Z minulosti sa vynárajú šokujúce tajomstvá a v hre sú zrazu nielen doterajšie istoty a pokoj, ale aj ľudské životy. Z idyly uprostred prírody sa stáva temné miesto a Roy sa musí rozhodnúť, čo všetko je kvôli bratovi a láske k jeho manželke Shannon ochotný obetovať.",
          reviewer: "Martina Stranská",
          reviewerImg: "../../assets/img/reviewer.png",
        },
        imgUrl: "../../assets/img/kralovstvo.png",
      },
      {
        id: "730153",
        name: "Imaginárny priateľ",
        author: "Stephen Chbosky",
        link: "https://www.martinus.sk/?uItem=730153",
        review: {
          text:
            "Na šesť dní sa pod ním zľahla zem. Potom sa vynoril uprostred noci... Slobodná matka Kate Reesová uteká z násilného vzťahu, aby si zachránila život. So synom Christopherom zakotvia v malom mestečku v Pensylvánii, ďaleko od všetkého. Spočiatku sa Mill Grove javí ako dokonalý úkryt. Jedného dňa však sedemročný Christopher zmizne. Šesť dní ho nik nevie nájsť. Napokon vyjde uprostred noci z lesa na okraji mesta bez viditeľných poranení. Tvrdí, že mu nik neublížil, no nie je schopný opísať, čo sa mu prihodilo. Spomenie len akéhosi dobrého pána, ktorý ho vyviedol na cestu a vzápätí utiekol. Christopher odvtedy počuje hlasy, trpí ukrutnými bolesťami hlavy a je posadnutý úlohou, akú môže splniť len on - postaviť do Vianoc v lese domček na strome, inak jeho mama a všetci v meste už nikdy nebudú ako predtým.",
          reviewer: "Dominik Pukalovič",
          reviewerImg: "../../assets/img/reviewer2.png",
        },
        imgUrl: "../../assets/img/imaginarnyPriatel.png",
      },
      {
        id: "112374",
        name: "Žiadne výhovorky!",
        author: "Brian Tracy",
        link: "https://www.martinus.sk/?uItem=112374",
        review: {
          text:
            "Nedokončil strednú školu a po niekoľkých rokoch manuálnej práce si uvedomil, že jeho možnosti ďalšieho postupu a vyhliadky do budúcnosti sú obmedzené. Svoj život však dokázal zmeniť a nasmerovať ho k vytúženému cieľu. Vedel sa „zdisciplinovať“, naučil sa kontrolovať svoj čas, emócie, koncentráciu a vďaka tomuto umeniu sebadisciplíny dosiahol úspech v obchode, marketingu, investičnej a realitnej oblasti, ako aj vo sfére poradenstva pri vedení ľudí. Odborné rady poskytol viac ako tisícke spoločností, prednášal viac ako štyrom miliónom ľudí a napísal 45 kníh.",
          reviewer: "Martina Stranská",
          reviewerImg: "../../assets/img/reviewer.png",
        },
        imgUrl: "../../assets/img/ziadneVyhovorky.png",
      },
    ];
  } // this is data simulation from server, array can have random length

  connectedCallback() {
    this.render();
  }

  render() {
    const booksContainer = document.createElement("div");
    booksContainer.classList.add("book-info-container");
    booksContainer.insertAdjacentHTML(
      "beforeend",
      `<link
      rel = "stylesheet"
      href = "https://mrtns.eu/assets/martinus/lb/styles/main.css"
      />  <link
      rel = "stylesheet"
      type="text/css"
      href = "./js/components/BookInfo/BookInfo.css"
      />
      <h1>Náš poradca pre vás vybral:</h1>`
    );
    this.booksFromServer.forEach((book) => {
      const elem = `<div class="book-info">
      <div class="book-basic mb-large">
      <img src="${book.imgUrl}" alt="Img error" />
      <article class="book-basic-data">
      <h1 class="product-detail__title mb-small">${book.name}<h2>
      <h4 class="h4 product-detail__subtitle mb-small">${book.author}</h4>
      <a href=${book.link} class="text-color-blue" target="_blank">Zistiť viac</a>
      </article>
      </div>
      <div class="review">
        <div>
          <h4>Recenzuje ${book.review.reviewer}</h4>
          <img src="${book.review.reviewerImg}" alt="Img error" class="reviewerImg" />
        </div>
        <p>${book.review.text}</p>
        </div>
      </div>`;
      booksContainer.insertAdjacentHTML("beforeend", elem);
    });
    console.log(booksContainer);
    this.shadow.innerHTML = booksContainer.innerHTML;
  }
}

customElements.define("book-info", BookInfo);
