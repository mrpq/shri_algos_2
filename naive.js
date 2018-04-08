const naiveSearch = (text, pat, all = true) => {
  const indexes = [];
  for (let i = 0; i < text.length - pat.length + 1; i += 1) {
    const l = text[i];
    const pfl = pat[0];
    let found = false;
    let candidateIndex;
    if (l === pfl) {
      candidateIndex = i;
      found = true;
      for (let j = 1; j < pat.length; j += 1) {
        if (text[i + j] !== pat[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        indexes.push(candidateIndex);
        i += pat.length;
        if (!all) {
          break;
        }
      }
    }
  }
  return indexes;
};

const naive = (streets, pattern) => {
  const found = streets.reduce((acc, street, i) => {
    const indexes = naiveSearch(street, pattern, false);
    if (indexes.length > 0) {
      return [...acc, [street, indexes[0]]];
      // return acc;
    }
    return acc;
  }, []);
  return found;
};

export default naive;
