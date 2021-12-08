/* eslint-disable eqeqeq */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-use-before-define */
/* eslint-disable import/order */
import "./components/main-content";
import "./components/card-element";
import "./components/masyarakat/index";
import "./components/masyarakat/form";
import "./components/petugas/index";
import "./components/petugas/form";
import "./components/pemerintah/index";
import "./components/pemerintah/detail";
import "./components/home-page";
import loadData from "./load-data";
import Navigo from "navigo";

const router = new Navigo("/", { hash: true });

const mainContent = document.querySelector("main-content");
const card = document.createElement("card-element");

const defaultPage = {
  name: "home",
  content: (match) => {
    setUpNewContent(match);
    const Home = document.createElement("home-page");
    mainContent.setContent(Home, true);
  },
};

const setUpNewContent = (match) => {
  document.documentElement.scrollTop = 0;
  // Set active menu
  document.querySelectorAll(".nav-link").forEach((el) => {
    el.classList.remove("active");
    const elHref = el.href.replace(window.location.origin, "").split("/")[1];
    const matchUrl = match.url.split("/")[0];
    if (elHref == matchUrl || (matchUrl == "" && elHref == defaultPage.name)) {
      el.classList.add("active");
    }
  });
};

router.on(defaultPage.content);

router.on({
  "/home": defaultPage.content,
  "/masyarakat": (match) => {
    setUpNewContent(match);
    const masyarakatIndex = document.createElement("masyarakat-index");
    loadData("Masyarakat", masyarakatIndex);
  },
  "/masyarakat/add": (match) => {
    setUpNewContent(match);
    const element = document.createElement("masyarakat-form");
    card.setContent("Tambah Laporan (Masyarakat)", element.outerHTML);
    mainContent.setContent(card);
    document
      .querySelector("#formLaporan")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        router.navigate("/masyarakat");
      });
  },
  "/petugas": (match) => {
    setUpNewContent(match);
    const element = document.createElement("petugas-index");
    loadData("Petugas", element);
  },
  "/petugas/detail": (match) => {
    setUpNewContent(match);
    const element = document.createElement("petugas-form");
    card.setContent("Proses Laporan (Petugas)", element.outerHTML);
    mainContent.setContent(card);
    document
      .querySelector("#formLaporan")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        router.navigate("/petugas");
      });
  },
  "/pemerintah": (match) => {
    setUpNewContent(match);
    const element = document.createElement("pemerintah-index");
    mainContent.setContent(card);
    card.setContent("Pemerintah", element.outerHTML);
  },
  "/pemerintah/detail": (match) => {
    setUpNewContent(match);
    const element = document.createElement("pemerintah-detail");
    loadData("Laporan (Pemerintah)", element);
  },
});

router.notFound(() => {
  document.documentElement.scrollTop = 0;
  return card.setContent(
    "",
    '<p class="text-muted text-center my-5">Page Not Found</p>'
  );
});

export default router;
