import './App.css';
import {Route, Routes, HashRouter} from "react-router-dom";
import Home from "./Home";
import TopSellers from "./best_sellers";
import FavoriteBooks from "./my_favorites";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/#/best_sellers" element={<TopSellers />} />
          <Route exact path="/my_favorites" element={<FavoriteBooks />} />
        </Routes>
      </HashRouter>
    </div>
  );
}


let test = [{"name": 1, "two": 3}, {"name": 2, "two": 4}, {"name": 4, "two": 6}];
console.log(test);

export default App;
