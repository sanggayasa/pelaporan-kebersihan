/* eslint-disable no-useless-constructor */
import "../laporan-item";

class MasyarakatIndex extends HTMLElement {
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
    this.innerHTML += `<a href="/masyarakat/add" id="btnAddLaporan" class="btn btn-success btn-circle float-end" data-navigo>
            <i class="bi-plus"></i>
        </a>`;
  }
}

customElements.define("masyarakat-index", MasyarakatIndex);
