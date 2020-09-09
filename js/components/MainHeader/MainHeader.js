class MainHeader extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `        <link
      rel="stylesheet"
      href="https://mrtns.eu/assets/martinus/lb/styles/main.css"
    />
    <link
      rel="stylesheet"
      href="assets/icons/fontawesome-free-5.10.1-web/css/all.css"
    />
    <header class="header">
            <div class="header__wrapper">
                <div class="wrapper-main position-relative">
                    <div class="bar header__bar">
                        <div class="bar__item header__logo">
                            <a href="/">
                                <img
                                    src="//mrtns.eu/assets/martinus/lb/images/content/logo.svg"
                                />
                            </a>
                        </div>
                        <div class="bar__item header__nav book-detail-hide">
                            <div class="btn-layout btn-layout--horizontal">
                                <div class="btn-dropdown no-mrg show-l">
                                    <button
                                        class="btn btn--clean header-btn"
                                        data-mega-menu-trigger="#mega-menu-knihy"
                                        data-toggle="self"
                                        data-toggle-icon="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-chevron-up"
                                        data-toggle-expand=""
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Knihy
                    <svg
                                            class="icon icon-chevron-down icon-dropdown icon--small"
                                            role="img"
                                            aria-hidden="true"
                                            style=""
                                        >
                                            <use
                                                xlink:href="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-chevron-down"
                      ></use>
                    </svg>
                  </button>
                            </div>
                            <div class="btn-dropdown no-mrg show-l">
                                <button
                                    class="btn btn--clean header-btn"
                                    data-toggle="self"
                                    data-mega-menu-trigger="#mega-menu-eknihy"
                                    data-toggle-icon="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-chevron-up"
                                    data-toggle-expand=""
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    E-knihy
                    <svg
                                        class="icon icon-chevron-down icon-dropdown icon--small"
                                        role="img"
                                        aria-hidden="true"
                                        style=""
                                    >
                                        <use
                                            xlink:href="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-chevron-down"
                      ></use>
                    </svg>
                  </button>
                        </div>
                        <div class="btn-dropdown no-mrg show-l">
                            <button
                                class="btn btn--clean header-btn"
                                data-toggle="self"
                                data-mega-menu-trigger="#mega-menu-filmy"
                                data-toggle-icon="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-chevron-up"
                                data-toggle-expand=""
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Filmy
                    <svg
                                    class="icon icon-chevron-down icon-dropdown icon--small"
                                    role="img"
                                    aria-hidden="true"
                                    style=""
                                >
                                    <use
                                        xlink:href="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-chevron-down"
                      ></use>
                    </svg>
                  </button>
                    </div>
                    <div class="btn-dropdown no-mrg show-l">
                        <button
                            class="btn btn--clean header-btn"
                            data-toggle="self"
                            data-mega-menu-trigger="#mega-menu-hry"
                            data-toggle-icon="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-chevron-up"
                            data-toggle-expand=""
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Hry
                    <svg
                                class="icon icon-chevron-down icon-dropdown icon--small"
                                role="img"
                                aria-hidden="true"
                                style=""
                            >
                                <use
                                    xlink:href="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-chevron-down"
                      ></use>
                    </svg>
                  </button>
                </div>
                <div class="btn-dropdown no-mrg btn-dropdown--no-icon show-l">
                    <button
                        class="btn btn--clean header-btn"
                        data-mega-menu-trigger="#mega-menu-other"
                        data-toggle="self, next"
                        data-toggle-expand=""
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                    <i class="fas fa-ellipsis-h"></i>
                  </button>
            </div>
            <div class="btn-dropdown no-mrg btn-dropdown--no-icon hide-l">
                <button
                    class="btn btn--clean header-btn"
                    data-mega-menu-trigger=""
                    data-toggle="self"
                    data-toggle-icon="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-close"
                    data-toggle-expand=""
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <svg
                        class="icon icon-menu icon--medium"
                        role="img"
                        aria-hidden="true"
                        style=""
                    >
                        <use
                            xlink:href="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-menu"
                      ></use>
                    </svg>
                  </button>
                </div>
              </div >
            </div >
            <div
                id="beacon_11fa66f15f"
                style="
                position: absolute;
                left: 0px;
                top: 0px;
                visibility: hidden;
              "
            >
                <img
                    src="https://rs3.martinus.sk/delivery/lg.php?bannerid=0&amp;campaignid=0&amp;zoneid=84&amp;loc=&amp;cb=11fa66f15f"
                    width="0"
                    height="0"
                    alt=""
                    style="width: 0px; height: 0px; display: none !important"
                />
            </div>
            <form
                method="get"
                accept-charset="utf-8"
                class="bar__item bar__item--fill header__search header-search"
                novalidate="novalidate"
                action="//www.martinus.sk"
            >
                <input type="hidden" name="uMod" value="list" /><input
                    type="hidden"
                    name="uTyp"
                    value="search"
                /><input type="hidden" name="c" value="čšťď" />
                <div class="hide-m header-search__toggle no-mrg">
                    <a
                        class="btn btn--clean header-btn no-mrg-bottom"
                        data-toggle=".header"
                        data-toggle-class-target="is-search-active"
                    >
                        <svg
                            class="icon icon-search icon--medium"
                            role="img"
                            aria-hidden="true"
                            style=""
                        >
                            <use
                                xlink:href="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-search"
                    ></use>
                  </svg>
                </a>
              </div>
            <div class="hide-m header-search__back">
                <a
                    class="btn btn--clean header-btn no-mrg-bottom"
                    data-toggle=".header"
                    data-toggle-class-target="is-search-active"
                >
                    <svg
                        class="icon icon-arrow-left icon--medium"
                        role="img"
                        aria-hidden="true"
                        style=""
                    >
                        <use
                            xlink:href="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-arrow-left"
                    ></use>
                  </svg>
                </a>
              </div >
            <div class="header-search__search" style="position: relative">
                <div class="form-control form-control--input no-mrg-bottom">
                    <div class="input-addons">
                        <input
                            type="text"
                            name="uQ"
                            id="search-in-header"
                            class="input input--dark"
                            placeholder="Titul, kategória alebo autor"
                            data-input=""
                            data-toggle-focus=""
                            value=""
                            autocomplete="off"
                        />

                <div
                    class="input-addons__item header-search__empty input-addons__item--dark"
                >
                    <i class="fas fa-search"></i>
            </div>
                  </div >
                </div >
              </div >
            </form >
            <div class="bar__item header__user book-detail-hide">
                <div class="btn-dropdown btn-dropdown--no-icon header-user">
                    <a
                        href="/login"
                        rel="nofollow"
                        class="btn btn--clean header-btn header-btn--no-arrow btn--lowercase"
                    >
                        <svg
                            class="icon icon-user icon--medium icon--left header-user__icon"
                            role="img"
                            aria-hidden="true"
                            style=""
                        >
                            <use
                                xlink:href="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-user"
                    >
                      <svg id="icon-user" viewBox="0 0 24 24">
                                <path
                                    d="M7.987 21.162A9.966 9.966 0 0 0 12 22a9.966 9.966 0 0 0 4.013-.838A1.007 1.007 0 0 1 16 21a4 4 0 1 0-8 0c0 .055-.004.11-.013.162zm-1.913-1.106a6.002 6.002 0 0 1 11.852 0A9.986 9.986 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.986 9.986 0 0 0 4.074 8.056zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                ></path>
                            </svg>
                    </use>
                  </svg>
                    <span class="header-user__name"> Prihlásiť </span>
                </a>
            </div>
            </div >
            <div
                class="bar__item header__cart mj-header__cart book-detail-hide"
            >
                <a class="btn btn--clean header-btn" href="/cart">
                    <svg
                        class="icon icon-cart icon--medium"
                        role="img"
                        aria-hidden="true"
                        style=""
                    >
                        <use
                            xlink:href="/data/assets/martinus/lb/icons_/app.svg?v=1#icon-cart"
                  ></use>
                </svg>
              </a>
            </div >
          </div >
        </div >
      </div >
    </header >`;
  }
}

customElements.define("main-header", MainHeader);
