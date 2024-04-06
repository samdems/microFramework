import Component from "../core/Component.js";

export default new Component("button", ({ html, Signal, Action, Props }) => {

  new Action("addPersent", Props.addPersent);

  return html`<button onclick="_.addPersent(10)">+10</button>`;
});
