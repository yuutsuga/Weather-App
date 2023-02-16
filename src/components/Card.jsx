import React from "react";
import propTypes from "prop-types";

function Card({ data }) {
  const { location, current } = data;

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-lg shadow-purple-700 min-w-[240px]">
      <div className="text-center">
        <span className="block text-lx font-bold text-gray-800">
          {`${location.name}, ${location.region}`}
        </span>
        <span className="text-gray-700 text-sm font-medium">
          {location.country}
        </span>
      </div>

      <div className="font-bold text-gray-900 flex justify-center mt-4 mb-2">
        <span className="text-8xl">{current.temp_c}</span>
        <span className="text-3xl mt-2">°C</span>
      </div>

      <div className="text-center justify-center flex flex-col items-center">
        <img src={current.condition.icon} alt="weather icon" />
        <span className="text-gray-700 font-medium">
          {current.condition.text}
        </span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;