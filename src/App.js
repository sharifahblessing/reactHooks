import React from "react";
import Button from "./components/Button";
import DataLoader from "./components/useFetch";
import DataLoaderImproved from "./components/DataLoader";

function App() {
  return (
    <div className="App">
      <Button />
      <DataLoader />
      <h1>This is data Loader Improved</h1>
      <DataLoaderImproved />
      <h1>This uses Async await</h1>
    </div>
  );
}

export default App;
