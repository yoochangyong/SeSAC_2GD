const flowers = ["rose", "sunflower", "tulip"];

function getFlowers(idx) {
  if (idx >= flowers.length || idx < 0) return "wrong index!";
  return flowers[idx];
}

// es6에서 module을 내보내는 방법
// export { flowers, getFlowers };

// as이용 별칭
export { flowers as flrs, getFlowers as getFlrs };
