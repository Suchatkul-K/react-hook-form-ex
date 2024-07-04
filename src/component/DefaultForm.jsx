import React from "react";
import { useState } from "react";
import validateRegister from "./validate/validate-register";

function DefaultForm() {
  const [input, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState({});

  const doSubmit = (e) => {
    e.preventDefault();

    const errObj = validateRegister(input);
      if (errObj) {
        return setError(errObj);
      }

    // if (input.username.trim() == "") {
    //   setError({ ...error, username: "username required" });
    // } else if (input.password.trim() == "") {
    //   setError({ ...error, password: "password required" });
    // } else {
    //   console.log("No error");
    // }
    console.log(input);
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({})
  };

//   console.log(error)
  return (
    <form id="defaultForm" className="flex flex-col" onSubmit={doSubmit}>
      <div className="flex gap-4">
        <label>Name</label>
        <input name="username" value={input.username} onChange={handleChange} />
        {error.username && (
          <span className="text-red-600">{error.username}</span>
        )}
      </div>
      <div className="flex gap-4">
        <label>Password</label>
        <input name="password" type="password" onChange={handleChange} />
        {error.password && (
          <span className="text-red-600">{error.password}</span>
        )}
      </div>

      <button className="p-4 rounded-md bg-amber-300" form="defaultForm">
        Submit
      </button>
    </form>
  );
}

export default DefaultForm;
