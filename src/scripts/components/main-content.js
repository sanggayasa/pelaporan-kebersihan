class MainContent extends HTMLElement {
  constructor() {
    super();
    this._containerFluid = false;
  }

  connectedCallback() {
    this.render();
  }

  setContent(content, containerFluid = false) {
    this._content = content;
    this._containerFluid = containerFluid;
    this.render();
  }

  render() {
    this.innerHTML = "";
    const main = document.createElement("main");
    let classes = ["container"];
    if (this._containerFluid) {
      classes = ["container-fluid", "g-0"];
    }
    main.classList.add(classes);

    if (this._content) {
      main.appendChild(this._content);
    }

    this.appendChild(main);
  }
}

customElements.define("main-content", MainContent);
