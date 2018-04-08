const logger = (f, output) => (...args) => {
  const start = +new Date();
  const res = f(...args);
  const duration = new Date() - start;
  output.innerHTML = duration;
  return res;
};

export const formatStreets = (streets, pattern) => {
  const formated = streets.map(([street, index]) =>
    `${street.substr(0, index)}<b>${pattern}</b>${street.substr(
      index + pattern.length,
      street.length,
    )}`);
  return formated.join("<br>");
};

export default logger;
