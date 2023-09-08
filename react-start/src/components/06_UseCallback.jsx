import { useCallback, useEffect, useState } from "react";

export default function UseCallback() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const func1 = () => {
    console.log(`number:${number}smile`);
  };

  const func2 = useCallback(() => {
    console.log(`number:${number}frown`);
  }, [number]);

  useEffect(() => {
    console.log("함수1 변경");
  }, [func1]);
  useEffect(() => {
    console.log("함수2 변경");
  }, [func2]);

  return (
    <>
      <h4>useCallback</h4>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          func1();
          func2();
        }}
      >
        call function
      </button>
      <button
        onClick={() => {
          setIsTrue(!isTrue);
        }}
      >
        {isTrue.toString()}
      </button>
    </>
  );
}
