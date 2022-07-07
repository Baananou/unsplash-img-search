import "./index.css";
import React from "react";
import GetImages from "./GetImages";
function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <button>Search</button>
    </form>
  );
}
const App = () => {
  return (
    <>
      <GetImages />
    </>
  );
};

export default App;
