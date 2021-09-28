import "./reset.css";
import "./App.css";
import UserCard from "./Components/UserCard";
import Display from "./Components/Display";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Display />
        <UserCard />
      </body>
    </div>
  );
}

export default App;
