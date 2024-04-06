export default function getHtml(componentName) {
  return function html(strings, ...values) {
    const render = (dom) =>
      (dom.innerHTML =
        `<div data-component="${componentName}">` +
        strings.reduce((prev, current, i) => {
          const value = values[i]?.value || values[i] || "";
          return `${prev}${current}${value}`;
        })) + "</div>";

    return (dom) => {
      render(dom);
      values.forEach((value) => {
        value.subscribe && value.subscribe(() => render(dom));
      });
    };
  };
}
