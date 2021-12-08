/* eslint-disable prefer-template */
/* eslint-disable prefer-destructuring */
import router from "./routes";

const main = () => {
  if (window.location.hash.length < 2) {
    window.location.replace("#/");
  }

  const inputImageListener = () => {
    const customInputFile = document.querySelectorAll(".custom-input-file");
    customInputFile.forEach((el) => {
      el.addEventListener("click", (event) => {
        const targetId = event.currentTarget.dataset.targetId;
        document.querySelector("#" + targetId).click();
      });
    });

    const inputPreviewImage = document.querySelectorAll(".input-image-preview");
    inputPreviewImage.forEach((element) => {
      element.addEventListener("change", (event) => {
        const el = event.currentTarget;
        const image = el.parentElement.querySelector("img");
        const customInput = el.parentElement.querySelector(".hide-on-preview");
        const [file] = el.files;
        if (file) {
          image.src = URL.createObjectURL(file);
          image.classList.remove("d-none");
          customInput.classList.add("d-none");
        } else {
          image.src = "#";
          image.classList.add("d-none");
          customInput.classList.remove("d-none");
        }
      });
    });
  };

  router.addAfterHook("/masyarakat/add", inputImageListener);
  router.addAfterHook("/petugas/detail", inputImageListener);

  router.resolve();
};

export default main;
