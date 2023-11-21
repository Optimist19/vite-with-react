import { useState } from "react";

function Form2() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: ""
  });

  function submitForm(e) {
    e.preventDefault();
    console.log(userDetails)
    // console.log(userDetails.name, userDetails.email, userDetails.password)
  }

  function inputChange(e) {
    setUserDetails((prev) => {
      return {
        prev,
        [e.target.value]: e.target.value
      };
    });
  }

  return (
    <div className="form2-con">
      <div>Form2</div>
      <form onSubmit={submitForm}>
        <h1>Multiple Inputs</h1>
        <label htmlFor="name">
        </label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            onChange={inputChange}
            value={userDetails.name}
            name="name"
          />

        <label htmlFor="email">
        </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={inputChange}
            value={userDetails.email}
            name="email"
          />

        <label htmlFor="password">
        </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={inputChange}
            value={userDetails.password}
            name="password"
          />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form2;

