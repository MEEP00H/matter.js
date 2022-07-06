const manageType = (i) => {
  if (i >= 1 && i <= 3) {
    return 1;
  }
  if (i > 3 && i <= 10) {
    return 2;
  }
  if (i > 10 && i <= 20) {
    return 3;
  }
  if (i > 20 && i <= 36) {
    return 4;
  }
  if (i > 36 && i <= 70) {
    return 5;
  }
  if (i > 70 && i <= 75) {
    return 6;
  }
  if (i > 75 && i <= 77) {
    return 7;
  }
};

export const mockData = () => {
  const d = [...Array(142)].map((_, i) => {
    return { index: i, type: manageType(i) };
  });
  return d;
};

export const setColor = (type) => {
  if (type === 0) return "#ff0066";
  if (type === 1) return "#009933";
  if (type === 2) return "#ff9966";
  if (type === 3) return "#6666ff";
  if (type === 4) return "#cc0066";
  if (type === 5) return "#cc3300";
  if (type === 6) return "#66ffcc";
  if (type === 7) return "#cc6699";
};
