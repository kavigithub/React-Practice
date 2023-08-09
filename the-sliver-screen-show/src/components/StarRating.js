import React, { useState } from "react";
import Star from "./Star";
import PropType from 'prop-types';

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

/* const textStyle = {
  lineHeight: "1",
  margin: "0",
}; */

/* StarRating.propType = {
  maxLength : PropType.number,
  color : PropType.string,
  size : PropType.number,
  className : PropType.string,
  message : PropType.array,
  defaltRating : PropType.number,
  onSetRatingHandler : PropType.object
} */

const StarRating = ({
  maxLength = 3,
  color = "#fcc419",
  size = 30,
  className = "",
  message = [],
  defaltRating= 0,
  onSetRatingHandler
}) => {
  const [rate, setRate] = useState(defaltRating);
  const [temRating, setTemRating] = useState(0);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  const handelRating = (rating) => {
    setRate(rating);
    if(onSetRatingHandler) onSetRatingHandler(rating);
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxLength }, (_, index) => (
          /* (<p>S{index + 1}</p>) */
          <Star
            key={index}
            onChangeRate={() => handelRating(index + 1)}
            full={temRating ? temRating >= index + 1 : rate >= index + 1} //actually grap value from setRate(index + 1) so set current rate
            handelMouseOver={() => setTemRating(index + 1)}
            handelMouseLeave={() => setTemRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {message.length === maxLength
          ? message[temRating ? temRating - 1 : rate - 1]
          : temRating || rate || ""}
      </p>
    </div>
  );
};

export default StarRating;
