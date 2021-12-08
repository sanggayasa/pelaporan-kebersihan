/* eslint-disable no-useless-constructor */
class PetugasLaporanItem extends HTMLElement {
  constructor() {
    super();
  }

  set laporan(laporan) {
    this._laporan = laporan;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                        <div class="col-9">
                            <div><strong>${this._laporan.lokasi}</strong></div>
                            <div><small class="text-muted">${
                              this._laporan.waktu
                            }</small></div>
                        </div>
                        <div class="col-3 text-end">
                            <span class="badge bg-${
                              this._laporan.status ? "success" : "danger"
                            }">
                                ${this._laporan.status ? "Finish" : "Pending"}
                            </span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-9">
                            <p class="card-text mt-3">${
                              this._laporan.deskripsi
                            }</p>
                        </div>
                        <div class="col-3 text-end mt-3">
                            <a href="/petugas/detail" class="card-link stretched-link" data-navigo>Lihat Detail</a>
                        </div>
                    </div>
                </div>
            </div>`;
  }
}

customElements.define("petugas-laporan-item", PetugasLaporanItem);
