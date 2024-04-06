export default function withProps(Component, props) {
  for (const key in props) {
    Component.addProp(key, props[key]);
  }
  return Component;
}
