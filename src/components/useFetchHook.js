import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data.results));
  }, []);
  return data;
};

export default useFetch;
