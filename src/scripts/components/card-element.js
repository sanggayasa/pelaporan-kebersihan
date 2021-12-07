/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
class CardElement extends HTMLElement {
  constructor() {
    super();
    this._content = {
      title: "",
      content: "",
    };
  }

  connectedCallback() {
    this.render();
  }

  setContent(title, content) {
    this._content = {
      title: title,
      content: content,
    };
    this.render();
  }

  render() {
    const card = document.createElement("div");
    card.classList.add("card");

    const card_header = document.createElement("div");
    card_header.classList.add("card-header");
    if (this._content.title) {
      card_header.innerHTML = this._content.title;
      card.appendChild(card_header);
    }

    const card_body = document.createElement("div");
    card_body.classList.add("card-body");
    card_body.innerHTML = this._content.content;
    card.appendChild(card_body);

    this.innerHTML = "";
    this.appendChild(card);
  }
}

customElements.define("card-element", CardElement);
