import getHtml from "./Html.js";
import Signal from "./Signal.js";
import getAction from "./Actions.js";
import withProps from "./withProps.js";

export default function Component(name, component) {
  const events = {};
  const Action = getAction(name);
  const html = getHtml(name);
  const Props = {};
  return {
    addProp: (name, value) => {
      Props[name] = value;
    },
    get value() {
      const dom = document.createElement("div");
      component({ html, Signal, Action, Props })(dom);
      return dom.innerHTML;
    },
    render: (dom) => component({ html, Signal, Action, withProps })(dom),
    subscribe: (event, callback) => {},
  };
}
