export default function FirstPractice() {
  let helloStr = "hello,first exercise";
  function click() {
    alert("클릭됨!");
  }
  return (
    <div
      // onClick={()=>alert("clicked!")}
      onClick={click}
      style={{ marginTop: "32px", backgroundColor: "skyblue" }}
    >
      {helloStr}
    </div>
  );
}
