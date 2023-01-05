import React from "react";
import { useState } from "react";
import "./Tours.css";

function Tour({ id, image, info, price, name, removeTours }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="genCon">
      <div className="photo">
        <img src={image} alt="name" />
      </div>
      <div className="namePrice">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div>
        <div className="decription">
          {readMore ? info : `${info.substring(0, 170)}...`}
          <span className="show">
            {" "}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "...Show less" : "...Show more"}
            </button>
          </span>
          <div className="removeTour">
            <button onClick={() => removeTours(id)}>Not Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour;
