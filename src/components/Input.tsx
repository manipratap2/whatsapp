import React, { useState } from "react";

const Input = () => {
  const [num, setNum] = useState("");
  const [isError, setIsError] = useState(false);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum(event.target.value);
    const regex: RegExp = /[^0-9+]/g;

    if (regex.test(event.target.value)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setNum("");
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (num.trim().length === 0) {
      return;
    }
    window.location.href = `https://api.whatsapp.com/send/?phone=${num}&app_absent=0`;
  };

  return (
    <form className="input" onSubmit={submitHandler}>
      <label htmlFor="text">WhatsApp chat without saving number</label>
      {isError && <p>Enter a valid number</p>}
      <input
        type="text"
        id="text"
        value={num}
        placeholder="Enter number with country code"
        onChange={inputHandler}
      />
      <button disabled={isError ? true : false}>Chat</button>
    </form>
  );
};

export default Input;
