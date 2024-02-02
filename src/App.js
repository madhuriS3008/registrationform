import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="field">
            <label htmlFor="firstName">
              First Name<sup>*</sup>
            </label>
            <input type="text" placeholder="First Name" id="firstName" />
          </div>
          <div className="field">
            <label htmlFor="lastName">Last Name </label>
            <input type="text" placeholder="Last Name" id="lastName" />
          </div>
          <div className="field">
            <label htmlFor="email">
              Email Address<sup>*</sup>
            </label>
            <input type="email" placeholder="Email Address" id="email" />
          </div>
          <div className="field">
            <label htmlFor="password">
              Password<sup>*</sup>
            </label>
            <input type="password" placeholder="Password" id="password" />
          </div>
          <div className="field">
            <label htmlFor="firstName">
              First Name <sup>*</sup>
            </label>
            <select>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
