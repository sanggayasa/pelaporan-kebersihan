/* eslint-disable no-param-reassign */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/* eslint-disable global-require */
const loadData = (title, el) => {
  const card = document.createElement("card-element");
  const main = document.querySelector("main-content");
  let content = "";

  try {
    let data = require("../data.json");
    if (data.data_laporan && data.data_laporan.length > 0) {
      el.laporan = data.data_laporan;
      content = el.outerHTML;
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    content = `<p class="text-center text-muted">Failed to get data!</p>`;
  } finally {
    card.setContent(title, content);
    main.setContent(card);
  }
};

export default loadData;
