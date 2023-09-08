// function FunctionProps(props) {
// 1. props 객체로 받아서, props.key로 접근해서 사용하는 방법
//   props = { name: "", krW: number, number: number };

//   return (
//     <div>
//       <h5>{props.name}</h5>
//       <p>
//         costs {props.krW} won(${props.krW / 1000}) per {props.number} fruit
//       </p>
//       <hr />
//     </div>
//   );

//   // 2. props 객체로 받고 구조분해할당이용
//   const { name, krW, number } = props;

//   return (
//     <div>
//       <h5>{name}</h5>
//       <p>
//         costs {krW} won (${krW / 1000}) per {number} fruit
//       </p>
//       <hr />
//     </div>
//   );
// }

// // 3. props 매개변수로 받는 것이 아닌 바로 받는 방법
// function FunctionProps({ name, krW, number }) {
//   return (
//     <div>
//       <h5>{name}</h5>
//       <p>
//         costs {krW} won (${krW / 1000}) per {number} fruit
//       </p>
//       <hr />
//     </div>
//   );
// }

// 4. children과 defaultProps 사용
function FunctionProps(props) {
  const { name, krW, number } = props;

  return (
    <div>
      <h5>{name}</h5>
      <p>
        costs {krW} won (${krW / 1000}) per {number} fruit
      </p>
      <p>{props.children}!</p>
      <hr />
    </div>
  );
}

FunctionProps.defaultProps = {
  name: "fruit",
  krW: 10000,
  number: 5,
};
export default FunctionProps;
