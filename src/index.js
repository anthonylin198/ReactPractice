import React from "react";
import ReactDOM from "react-dom";
// todo: TODOLIST
// import App from "./projects/TodoReact/2_Class";
// import App from "./projects/TodoReact/3_Hooks";
// import App from "./projects/TodoReact/7_ReduxToolkit";
// import App from "./projects/TodoReact/8_Redux/App";

// todo: TASKLIST
// import App from "./projects/TasksList/3_Props";
// import App from "./projects/TasksList/4_Redux";
// import App from "./projects/TasksList/5_ReduxToolkit";
// import App from "./projects/TasksList/6_ReduxToolkitSelector";
// import App from "./projects/TasksList/7_Practice";

// todo: ASYNC APP
// import App from "./projects/AsyncAwait/App";
// import App from "./projects/AsyncAwait/8_Redux/App";

// todo: GRAPHQL 00 look at the config
import App from "./projects/SpaceXGraphQL/SpaceX";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

// const client = ...

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  })
  .then((result) => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
