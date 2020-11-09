import React, { useState } from "react";
import "./App.css";

// have an input component where we enter github usernames, and just return the avatar

const App = () => {
  const [followers, updateFollowers] = useState([]);
  const [input, updateInput] = useState("");
  return (
    <div className="container">
      <UserInput
        input={input}
        updateInput={updateInput}
        updateFollowers={updateFollowers}
      />
      <ListOfFollowers
        followers={followers}
        updateFollowers={updateFollowers}
      />
    </div>
  );
};

const UserInput = ({ input, updateInput, updateFollowers }) => {
  // async function that will
  async function getFollowers() {
    let githubResponse = await fetch(
      `https://api.github.com/users/${input}/followers`
    );
    let newFollowers = await githubResponse.json();
    updateFollowers(newFollowers);
  }
  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)}></input>
      <button onClick={() => getFollowers()}>Fetch</button>
    </div>
  );
};

const ListOfFollowers = ({ followers, updateFollowers }) => {
  const followersArray = followers.map((follower, i) => {
    return <div key={i}>{follower.login}</div>;
  });
  return (
    <div>
      <h1>List</h1>
      {followersArray}
    </div>
  );
};

export default App;
