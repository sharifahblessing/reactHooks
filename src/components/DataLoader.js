import React from "react";
import useFetch from "./useFetchHook";

const DataLoaderImproved = () => {
  const data = useFetch("https://swapi.co/api/films/");
  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataLoaderImproved;
