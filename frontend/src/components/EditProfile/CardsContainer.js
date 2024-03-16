import React from "react";
import CardCard from "./CardCard";

const CardsContainer = ({cards}) => {

    return (
        <>
        <div className="container">
            <div className="row">
                {cards.map((card) => (
                <div className="col-md-4" key={card.id}>
                    <CardCard card={card} />
                </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default CardsContainer;