import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import RandomRecipe from "./SearchComponents/RandomRecipe";
import SearchFirstLetter from "./SearchComponents/SearchFirstLetter";
import SearchByName from "./SearchComponents/SearchName";
import SearchCategory from "./SearchComponents/SearchCategory";
import '@fortawesome/fontawesome-free/css/all.min.css';
import SearchByCategory from "./SearchComponents/SearchByCategories";
import "../src/app.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="name" element={<SearchByName />} />
        <Route path="firstLetter" element={<SearchFirstLetter />} />
        <Route path="category" element={<SearchCategory />} />
        <Route path="randomMeal" element={<RandomRecipe />} />
        <Route path="categories" element={<SearchByCategory/>} />
      </Route>
    </Routes>
  );
}

export default App;
