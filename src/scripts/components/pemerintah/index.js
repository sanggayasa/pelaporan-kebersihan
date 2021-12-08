/* eslint-disable no-useless-constructor */
class PemerintahIndex extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="row my-4">
                <div class="col-sm-4 mb-3">
                    <div class="card text-center border-success">
                        <div class="card-body">
                            <p class="card-text text-success" style="font-size:4rem;">8</p>
                        </div>
                        <div class="card-footer bg-white border-success">
                            <a href="/pemerintah/detail" class="card-text stretched-link text-decoration-none text-success" data-navigo>
                                Pekerjaan yang selesai bulan ini
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 mb-3">
                    <div class="card text-center border-danger">
                        <div class="card-body">
                            <p class="card-text text-danger" style="font-size:4rem;">5</p>
                        </div>
                        <div class="card-footer bg-white border-danger">
                            <a href="/pemerintah/detail" class="card-text stretched-link text-decoration-none text-danger" data-navigo>
                                Pekerjaan yang pending bulan ini
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card text-center border-dark">
                        <div class="card-body">
                            <p class="card-text text-dark" style="font-size:4rem;">13</p>
                        </div>
                        <div class="card-footer bg-white border-dark">
                            <a href="/pemerintah/detail" class="card-text stretched-link text-decoration-none text-dark" data-navigo>
                                Total
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
  }
}

customElements.define("pemerintah-index", PemerintahIndex);
