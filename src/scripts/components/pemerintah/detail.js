/* eslint-disable no-useless-constructor */
import "../laporan-item";

class PemerintahDetail extends HTMLElement {
  constructor() {
    super();
  }

  set laporan(value) {
    this._laporan = value;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._laporan.forEach((laporan) => {
      const laporanItemElement = document.createElement("laporan-item");
      laporanItemElement.laporan = laporan;
      this.appendChild(laporanItemElement);
    });
  }
}

customElements.define("pemerintah-detail", PemerintahDetail);
