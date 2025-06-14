import React from "react";

const Card = ({ title, text, img }) => {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  );
};

export default Card;
