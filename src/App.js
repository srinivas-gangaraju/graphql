import "./App.css";
import CharactersList from "./pages/CharactersList";
import { Route, Routes } from "react-router";
import Character from "./pages/Character";
import Search from "./pages/Search";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharactersList />} />
        <Route strict exact path="/:id" element={<Character />} />
        <Route strict exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
