import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import ServerScreen from './components/ServerScreen';
import AppScreen from './components/AppScreen';

function App() {

  return (
    <>
    <Header />
    <div className="App">
      <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/server" element={<ServerScreen />} />
          <Route path="/application" element={<AppScreen />} />
      </Routes>
    </div>
    </>
  )
}

export default App
