import './App.css'
import { Routes, Route } from "react-router-dom";
import HomeScreen from './components/HomeScreen';

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  )
}

export default App
