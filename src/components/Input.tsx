import React, { useState, useRef } from "react";

const Input: React.FC = () => {
  const [num, setNum] = useState("");
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const num = event.target.value.replace(/ /g, "");
    setNum(num);
    setIsEmpty(false);
    setIsShort(false);
    const regex: RegExp = /[^0-9+]/g;

    if (regex.test(num)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (num.trim().length === 0) {
      setIsEmpty(true);
      inputRef.current?.focus();
      return;
    } else if (num.trim().length <= 6) {
      setIsShort(true);
      inputRef.current?.focus();
      return;
    }

    let splitNum: number[] = [];

    for (let i = 0; i < num.length; i += 1) {
      splitNum.push(+num.charAt(i));
    }
    if (splitNum[0] === 0 && splitNum[1] === 0) {
      splitNum.splice(0, 2);
    } else if (isNaN(splitNum[0])) {
      splitNum.splice(0, 1);
    }
    let newNum = splitNum.join("").replace(/ /g, "");

    let url = `https://api.whatsapp.com/send/?phone=${newNum}&app_absent=0`;

    window.open(url, "_self")?.focus();
    setNum("");
    setIsEmpty(false);
    setIsError(false);
    setIsShort(false);
  };

  return (
    <form className="input" onSubmit={submitHandler}>
      <label htmlFor="text">WhatsApp chat without saving number</label>
      {isError && <p>Enter a valid number</p>}
      {isEmpty && <p>Field cannot be blank</p>}
      {isShort && <p>Field value is too short</p>}
      <input
        type="tel"
        id="text"
        value={num}
        placeholder="Enter number with country code"
        onChange={inputHandler}
        className={isEmpty ? "error" : ""}
        ref={inputRef}
      />
      <button disabled={isError || isEmpty || isShort ? true : false}>
        Chat
      </button>
    </form>
  );
};

export default Input;
