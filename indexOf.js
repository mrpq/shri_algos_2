const indexOf = (streets, pattern) => {
  const found = streets.reduce((acc, street, i) => {
    const index = street.indexOf(pattern.toLowerCase());
    if (index >= 0) {
      return [...acc, [street, index]];
      // return acc;
    }
    return acc;
  }, []);
  return found;
};

export default indexOf;
