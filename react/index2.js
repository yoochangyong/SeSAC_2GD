function HelloWorldButton() {
  const [isClick, setIsClick] = React.useState(false);

  const text = isClick ? "클릭이 되었군요!" : "hello, react world!";

  // JSX 문법
  return (
    <button onClick={() => setIsClick(!isClick)}>
      <div>
        <span>{text}</span>
      </div>
    </button>
  );
}

const DOMContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(DOMContainer);
root.render(<HelloWorldButton />);
