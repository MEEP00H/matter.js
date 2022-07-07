const manageType = (i) => {
  if (i >= 0 && i <= 2) {
    return 0x0001;
  }
  if (i > 2 && i <= 6) {
    return 0x002;
  }
  if (i > 6 && i <= 11) {
    return 0x0003;
  }
  if (i > 11 && i <= 19) {
    return 0x0004;
  }
  if (i > 19 && i <= 36) {
    return 0x0005;
  }
  if (i > 36 && i <= 38) {
    return 0x0006;
  }
  if (i > 38 && i <= 39) {
    return 0x0008;
  }
  if (i > 39 && i <= 57) {
    return 0x0009;
  }
  if (i > 57 && i <= 61) {
    return 0x0010;
  }
  if (i > 61 && i <= 64) {
    return 0x0011;
  }
  if (i > 64 && i <= 65) {
    return 0x0012;
  }
  if (i > 65 && i <= 70) {
    return 0x0013;
  }
};

export const mockData = () => {
  const d = [...Array(71)].map((_, i) => {
    return { index: i, type: manageType(i) };
  });
  return d;
};

export const setColor = (type) => {
  if (type === 0x0000) return "#ff0066";
  if (type === 0x0001) return "#595e66";
  if (type === 0x0002) return "#a2ff00";
  if (type === 0x0003) return "#6666ff";
  if (type === 0x0004) return "#cc0066";
  if (type === 0x0005) return "#cc3300";
  if (type === 0x0006) return "#66ffcc";
  if (type === 0x0007) return "#cc6699";
  if (type === 0x0008) return "#32a86b";
  if (type === 0x0009) return "#a632a8";
  if (type === 0x0010) return "#a8325c";
  if (type === 0x0011) return "#a86832";
  if (type === 0x0012) return "#a2a832";
  if (type === 0x0013) return "#32a891";
};

export const calPercent = (p, max) => {
  return (p / 100) * max;
};
