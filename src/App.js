import "./reset.css";
import "./App.css";
import UserCard from "./Components/UserCard";
import Display from "./Components/Display";

function App() {
  return (
    <div className="App">
      <header className="App-header">Usando Action + Alterando State</header>
      <main>
        <Display />
        <UserCard />
      </main>
    </div>
  );
}

export default App;
