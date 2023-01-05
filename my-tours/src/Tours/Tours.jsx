import React from "react";
import Tour from "./Tour";
import "./Tours.css";
const Tours = ({ Tours, removeTours }) => {
  return (
    <section>
      <div className="title">
        <h2>My Adventurous Tour</h2>
        <div className="underline"></div>
      </div>
      <div>
        {Tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTours={removeTours} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
