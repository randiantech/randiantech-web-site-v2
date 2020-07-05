import React, { useState, SyntheticEvent } from "react";
import ReactCardFlip from "react-card-flip";
import { Styleable } from "../../utils";

interface FlipCardProps extends Styleable {
  front: any;
  back: any;
}

export const FlipCard = (props: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { front, back } = props;

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const renderSide = (component: any) => {
    return <div onClick={handleClick}>{component}</div>;
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      {renderSide(front)}
      {renderSide(back)}
    </ReactCardFlip>
  );
};
