/* eslint-disable no-useless-constructor */
class MasyarakatForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <form id="formLaporan">
                <div class="mb-3">
                    <label for="inputFoto" class="form-label">Foto</label>
                    <div class="col-12 custom-input-file image-preview mb-2 p-1" data-target-id="inputFoto">
                        <input type="file" name="foto" class="form-control input-image-preview" id="inputFoto" aria-describedby="fotoHelp" accept="image/*">
                        <img src="#" class="mx-auto d-block rounded d-none"></img>
                        <div class="text-muted text-center my-1 my-lg-3 hide-on-preview">
                            <i class="bi-image" style="font-size:4rem;"></i>
                            <div class="small">Click here to upload your image</div>
                        </div>
                    </div>
                    <div id="fotoHelp" class="form-text">Ukuran foto maksimal 10MB.</div>  
                </div>
                <div class="mb-3">
                    <label for="inputLokasi" class="form-label">Lokasi</label>
                    <input type="text" name="lokasi" class="form-control" id="inputLokasi" placeholder="Lokasi">
                </div>
                <div class="mb-3">
                    <label for="inputDeskripsi" class="form-label">Deskripsi</label>
                    <textarea name="deskripsi" class="form-control" id="inputDeskripsi" rows="3" placeholder="Deskripsi"></textarea>
                </div>
                <div class="mb-3 mt-5 col-md-2 offset-md-10">
                    <button type="submit" class="btn btn-success w-100">Simpan</button>
                </div>
            </form>`;
  }
}

customElements.define("masyarakat-form", MasyarakatForm);
