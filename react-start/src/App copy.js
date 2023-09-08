import UseJsX from "./components/UseJSX";
import FirstPractice from "./components/practice/FirstPractice";
import ClassCom from "./components/ClassCom";
import FunctionState from "./components/FunctionState";
import ClassState from "./components/ClassState";
import PracticeState from "./components/practice/PracticeState";

import PracticeProps from "./components/practice/PracitceProps";
import { ClassProps, ClassProps2 } from "./components/practice/ClassProps";
// import Handler_ex from "./ex/Handler_ex";
// import Handler_ex2 from "./ex/Handler_ex2";
// import PropsMap from "./components/PropsMap";
import FunctionProps from "./components/FunctionProps";
import MapChild from "./components/practice/MapChild";
import PracticeMap from "./components/practice/PracticeMap";
import PororoObj from "./components/practice/PororoObj";
import BasicCss from "./components/BasicCss";

// function App() {
//   return <UseJsX></UseJsX>;
// }

function App() {
  // const [show, setShow] = useState(true);
  // const dataArr = [
  //   { name: "peach", krPrice: 10000, count: 5 },
  //   { name: "strawberry", krPrice: 14000, count: 1 },
  //   { name: "pear", krPrice: 5000, count: 6 },
  //   { name: "apple", krPrice: 10000, count: 10 },
  // ];

  return (
    // <div>
    //   <UseJsX></UseJsX>
    //   <FirstPractice></FirstPractice>
    //   <ClassCom></ClassCom>
    //   <FunctionState></FunctionState>
    //   <ClassState></ClassState>
    //   <PracticeState></PracticeState>
    //   <FunctionProps name="apple" krW={5000} number={10}></FunctionProps>
    //   <FunctionProps name="mango" krW={35000} number={5}></FunctionProps>
    //   <FunctionProps name="peach" />
    //   <FunctionProps>here is "Children"</FunctionProps>
    //   <PracticeProps></PracticeProps>
    //   <ClassProps name="Luffy" nickname="Pirate King" color="red"></ClassProps>
    //   <ClassProps2
    //     name="Elsa"
    //     nickname="Winter Princess"
    //     bgColor="blue"
    //   ></ClassProps2>
    // </div>
    <div>
      {/* <Handler_ex></Handler_ex>
      <Handler_ex2 /> */}
      {/* <PropsMap arr={dataArr} /> */}
      <PracticeMap />
      <PororoObj />
      <BasicCss color={"blue"} />
    </div>
  );
}

export default App;
