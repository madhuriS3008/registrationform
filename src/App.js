import { useState } from "react";
import "./App.css";
import { validateEmail } from "./utils";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });
  const [role, setRole] = useState("role");

  const formValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="field">
            <label htmlFor="firstName">
              First Name<sup>*</sup>
            </label>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="lastName">Last Name </label>
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="email">
              Email Address<sup>*</sup>
            </label>
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">
              Password<sup>*</sup>
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password.value}
              onChange={(e) =>
                setPassword((prevState) => ({
                  ...prevState,
                  value: e.target.value,
                  isTouched: true,
                }))
              }
            />
            {password.isTouched && password.value.length < 8 ? (
              <p className="fieldError">
                Password should have atleast 8 characters.
              </p>
            ) : null}
          </div>
          <div className="field">
            <label htmlFor="firstName">
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!formValid()}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
