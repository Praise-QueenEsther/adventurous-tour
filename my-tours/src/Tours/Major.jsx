import React from "react";
import { useState, useEffect } from "react";
import Tours from "./Tours";
import Load from "./Loading";

const url = "https://course-api.com/react-tours-project";

function Major() {
  const [Loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  };
  const fetchData = async () => {
    setLoading(false);
    try {
      const response = await fetch(url);
      const resp = await response.json();
      setLoading(false);
      setTours(resp);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (Loading) {
    return (
      <main>
        <Load />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>Return Tours</h2>
        <button onClick={fetchData}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      <Tours Tours={tours} removeTours={removeTours} />
    </div>
  );
}

export default Major;
