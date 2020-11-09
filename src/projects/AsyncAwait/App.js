import React, { useState } from "react";
import "./App.css";

// have an input component where we enter github usernames, and just return the avatar

const App = () => {
  const [followers, updateFollowers] = useState([]);
  return (
    <div className="container">
      <UserInput updateFollowers={updateFollowers} />
      <ListOfFollowers
        followers={followers}
        updateFollowers={updateFollowers}
      />
    </div>
  );
};

// async Section
const UserInput = ({ updateFollowers }) => {
  const [input, updateInput] = useState("");
  async function getFollowers() {
    let githubResponse = await fetch(
      `https://api.github.com/users/${input}/followers`
    );
    let newFollowers = await githubResponse.json();
    if (githubResponse.status === 200) {
      updateFollowers(newFollowers);
    } else {
      console.error("this is an error");
      updateFollowers([{ login: "not a valid user" }]);
    }
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
      <h1>Followers</h1>
      {followersArray}
    </div>
  );
};

export default App;
