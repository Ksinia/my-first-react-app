import React from "react";
import logo from "./logo.svg";
import Title from "./components/Title";
import LikeCounter from "./components/LikeCounter";
import Animals from "./components/Animals";
import ArticleList from "./components/ArticleList";
import TodoList from "./components/TodoList";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        {/* <Title content="Some Simple Title" /> */}
        {/* <LikeCounter />
        <Animals />
        <ArticleList />
        <TodoList /> */}
        <Scoreboard />
      </main>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Codaisseur!
        </a>
      </header> */}
    </div>
  );
}

export default App;
