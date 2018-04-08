class BMH {
  static makeTable(pattern) {
    const a = [
      "й",
      "ц",
      "у",
      "к",
      "е",
      "н",
      "г",
      "ш",
      "щ",
      "з",
      "х",
      "ъ",
      "ф",
      "ы",
      "в",
      "а",
      "п",
      "р",
      "о",
      "л",
      "д",
      "ж",
      "э",
      "ё",
      "я",
      "ч",
      "с",
      "м",
      "и",
      "т",
      "ь",
      "б",
      "ю",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      " ",
    ];
    const table = new Map();
    const m = pattern.length;
    a.forEach(l => table.set(l, m));
    for (let i = 0; i <= m - 2; i += 1) {
      table.set(pattern[i], m - 1 - i);
    }
    return table;
  }

  static bmh(haystack, needle, table, all) {
    const n = haystack.length;
    const m = needle.length;
    const indexes = [];
    for (let i = 0; i <= n - m + 1; i += 1) {
      let shift = m;
      let found = false;
      if (haystack[i + m - 1] === needle[m - 1]) {
        found = true;
        for (let j = m - 2; j >= 0; j -= 1) {
          if (haystack[i + j] !== needle[j]) {
            found = false;
            shift = table.get(needle[j]);
            break;
          }
        }
        if (found) {
          indexes.push(i);
          if (!all) {
            break;
          }
        }
        i += shift;
      }
    }
    return indexes;
  }
}

const bmh = (streets, pattern) => {
  const table = BMH.makeTable(pattern);
  const found = streets.reduce((acc, street, i) => {
    const indexes = BMH.bmh(street, pattern, table, false);
    if (indexes.length > 0) {
      return [...acc, [street, indexes[0]]];
      // return acc;
    }
    return acc;
  }, []);
  return found;
};

export default bmh;
