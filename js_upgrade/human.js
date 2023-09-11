const human = ["철수", "영희", "순희", "민수"];

// const showName = () => {
//   human.forEach((el) => console.log(el));
// };

function showName(idx) {
  if (idx >= human.length || idx < 0) return "wrong";
  return human[idx];
}

export { human, showName };
