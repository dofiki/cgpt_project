import React from "react";
import Card from "./Card";
import cardData from "@/data/cardData";

const CardSection = () => {
  return (
    <div className="w-340 mt-8 grid grid-cols-4 gap-6">
      {cardData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          imageAlt={card.imageAlt}
          title={card.title}
          description={card.description}
          tag={card.tag}
          readTime={card.readTime}
          highlight={card.highlight}
        />
      ))}
    </div>
  );
};
export default CardSection;
