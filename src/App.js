import React, { useState } from "react";
import "./App.css";
import UserInfoComponent from "./UserInfoComponent";

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [displayInfo, setDisplayInfo] = useState(false);
  const [userRepos, setUserRepos] = useState({});
  const [userOrgs, setUserOrgs] = useState({});
  const [userData, setUserData] = useState({});

  async function fetchUserData() {
    await fetch(`https://api.github.com/users/${username}`).then(response => {
      if (response.ok) {
        response.json().then(json => setUserData(json));
      } else {
        setLoading(false);
        setError(true);
      }
    });

    await fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(json => setUserRepos(json))
      .catch(err => setError(!!err));

    await fetch(`https://api.github.com/users/${username}/orgs`)
      .then(res => res.json())
      .then(json => setUserOrgs(json))
      .catch(err => setError(!!err));
  }

  const handleSubmit = event => {
    event.preventDefault();
    setError(false);
    setLoading(true);

    fetchUserData().then(() => {
      if (!error) {
        setDisplayInfo(true);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  };
  return (
    <div className="App">
      <div className="headerContainer">
        <h1>GitHub Search</h1>
      </div>
      {error ? (
        <div className="errorMsg">
          Something has gone wrong... Try a different username
        </div>
      ) : loading ? (
        <div className="loadingMsg">Loading...</div>
      ) : (
        <UserInfoComponent
          userData={userData}
          userOrgs={userOrgs}
          userRepos={userRepos}
          displayInfo={displayInfo}
        />
      )}
      <div className="userInputForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="GitHub Username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <button disabled={loading} type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
