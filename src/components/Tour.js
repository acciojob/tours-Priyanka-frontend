import React, { useState } from "react";

const Tour = ({
  id,
  name,
  info,
  image,
  price,
  removeTour,
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p id={`tour-item-para-${id}`}>
          {readMore ? info : `${info.substring(0, 200)}...`}

          {info.length > 200 && (
            <button
              id={`see-more-${id}`}
              className="info-btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "See less" : "Read more"}
            </button>
          )}
        </p>

        <button
          id={`delete-btn-${id}`}
          className="delete-btn"
          onClick={() => removeTour(id)}
        >
          Remove
        </button>
      </footer>
    </article>
  );
};

export default Tour;
