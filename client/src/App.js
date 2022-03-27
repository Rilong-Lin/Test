import Home from './pages/Home';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" caseSensitive={false} element={<Landing/>} />
          <Route path="/home" caseSensitive={false} element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
