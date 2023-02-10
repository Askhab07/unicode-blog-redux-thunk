import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Link, Route } from "react-router-dom";
import { uploadCategories } from "./store/reducer/categoriesReducer";
import { Audio } from "react-loader-spinner";
import Unicode from "./Components/Unicode/Unicode";
import Category from "./Components/Category/Category";
import './App.css';
import Description from "./Components/Description/Description";

function App() {
  const { isLoading, categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uploadCategories());
  }, []);

  if (isLoading) {
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    );
  }

  return (
    <div className="App">
      <header>
      <Link to='/' className="logo_papa">
      <div className="the">The</div>
      <div className="logo">Unicode</div>
      </Link>
      <div className="links">
      {categories.map(item => <Link className="link" to={`/category/${item._id}`}>{item.title}</Link>)}
      </div>
      </header>
      <Routes>
        <Route path="/" element={<Unicode />}/>
        <Route path="/category/:id"  element={<Category />}/>
        <Route path="/post/:id" element={<Description />}/>
      </Routes>
    </div>
  );
}

export default App;
