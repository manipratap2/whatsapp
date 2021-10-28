import React, { useState } from "react";

const Input = () => {
  const [num, setNum] = useState("");
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

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
      return;
    }
    window.location.href = `https://api.whatsapp.com/send/?phone=${num}&app_absent=0`;
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
      />
      <button disabled={isError ? true : false}>Chat</button>
    </form>
  );
};

export default Input;
