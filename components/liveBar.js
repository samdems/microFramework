import Component from "../core/Component.js";
import button from "./button.js";

export default new Component(
  "live-bar",
  ({ html, Signal, Action, withProps }) => {
    const persent = new Signal(10);

    persent.subscribe((value) => console.log(value));

    const addPersent = new Action("addPersent", (count) => {
      persent.value += count;
    });

    return html`
      <div class="flex content-center gap-1">
        <button onclick="_.addPersent(-10)">-10</button>
        <p>HP:${persent}</p>
        <div class="w-full h-2 bg-green-200 self-center">
          <div style="width: ${persent}%" class="h-2 bg-blue-200"></div>
        </div>
        ${withProps(button, { addPersent })}
      </div>
    `;
  },
);

