import React, { useState, useRef } from "react";

const Input = () => {
  const [num, setNum] = useState("");
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEmpty(false);
    setNum(event.target.value);
    const regex: RegExp = /[^0-9+]/g;

    if (regex.test(event.target.value)) {
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
    }

    let splitNum: number[] = [];

    for (let i = 0; i < num.length; i += 1) {
      splitNum.push(+num.charAt(i));
    }
    if (splitNum[0] === 0 && splitNum[1] === 0) {
      splitNum.splice(0, 2);
    }
    let newNum = splitNum.join("");
    newNum.replace("+", "");

    let url = `https://api.whatsapp.com/send/?phone=${newNum}&app_absent=0`;

    // window.location.href = url;
    window.open(url, "_blank")?.focus();
    setNum("");
    setIsEmpty(false);
  };

  return (
    <form className="input" onSubmit={submitHandler}>
      <label htmlFor="text">WhatsApp chat without saving number</label>
      {isError && <p>Enter a valid number</p>}
      {isEmpty && <p>Field cannot be blank</p>}

      <input
        type="text"
        id="text"
        value={num}
        placeholder="+919999999999"
        onChange={inputHandler}
        className={isEmpty ? "error" : ""}
        ref={inputRef}
      />
      <button disabled={isError ? true : false}>Chat</button>
    </form>
  );
};

export default Input;
