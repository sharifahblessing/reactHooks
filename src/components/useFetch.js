import React, { useState, useEffect } from "react";

const DataLoader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.co/api/films/")
      .then(response => response.json())
      .then(data => setData(data.results));
  }, []);
  return (
    <div>
      <h1>How to fetch data with hooks</h1>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataLoader;
