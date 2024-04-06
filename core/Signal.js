export default function Signal(init) {
  let value = init;
  const listeners = [];
  return {
    get value() {
      return value;
    },
    set value(newValue) {
      value = newValue;
      listeners.forEach((listener) => listener(value));
    },
    subscribe(listener) {
      listeners.push(listener);
    },
  };
}
