import React from "react";
import Card from "./Card";

const CardGroup = () => {
  const cardData = Array(4).fill({
    title: "Card title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    
  });

  return (
    <div className="row text-center">
      {cardData.map((card, index) => (
        <div key={index} className="col-lg-3 col-md-6 mb-4">
          <Card title={card.title} text={card.text} img={card.img} />
        </div>
      ))}
    </div>
  );
};

export default CardGroup;
