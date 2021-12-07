/* eslint-disable no-useless-constructor */
class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="assets/image/pic-1.png" class="d-block w-100" alt="Gambar 1">
                        <div class="carousel-caption">
                            <h5>Cinta Kebersihan Lingkungan</h5>
                            <p>Kebersihan lingkungan sekitar merupakan tanggung jawab</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="assets/image/pic-3.jpeg" class="d-block w-100" alt="Gambar 1">
                        <div class="carousel-caption">
                            <h5>Menjaga Kebersihan Lingkungan Bersama</h5>
                            <p>Lingkungan yang sehat memberikan manfaat banyak manfaat.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="assets/image/pic-2.png" class="d-block w-100" alt="Gambar 1">
                        <div class="carousel-caption">
                            <h5>Dampak Lingkungan Kotor dan Polusi Sampah</h5>
                            <p>Lingkungan kotor serta polusi sampah bisa membawa dampak buruk baik itu terhadap manusia maupun terhadap lingkungan.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="container mt-3 text-center">
                <div class="card p-4" id="location-check">
                    <div class="card-body">
                        <p class="card-text text-muted" style="font-size:3rem;"><i class="bi-geo-alt"></i></p>
                        <h5 class="card-title text-dark">Cek Lokasi Bank Sampah</h5>
                        <p class="card-text text-muted">Sebaran lokasi bank sampah di jakarta</p>
                        <button type="button" class="btn btn-success">Cek disini</button>
                    </div>
                </div>
            </div>`;
  }
}

customElements.define("home-page", HomePage);
