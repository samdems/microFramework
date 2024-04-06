const actions = {};
export default function getAction(componentName) {
  return function Action(name, action) {
    actions[`${componentName}.${name}`] = action;
    return action;
  };
}

window._ = new Proxy(
  {},
  {
    get(target, prop) {
      const id = event.target.closest("[data-component]").dataset.component;
      return actions[`${id}.${prop}`];
    },
  },
);
