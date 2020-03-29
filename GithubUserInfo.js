import React, { useState, useEffect } from "react";

// This is the useEffectHook code example without requiring a cleanup.
export default () => {
  const [data, setData] = useState("Let's learn how to useEffect Hook works");

  useEffect(() => {
    fetch("https://api.github.com/users/deekshasharma")
      .then(data => {
        return data.json();
      })
      .then(jsonData => {
        setData(jsonData);
      });
  });

  return <h4>{JSON.stringify(data)}</h4>;
};
