import React from "react";

const NewsItem = (props) => {
  return (
    <div className="card">
      <img
        src={props.imageURL}
        className="p-3 card-img-top "
        alt={props.title}
        style={{ objectFit: "cover" }}
      />
      <div className="card-body">
        <h4 className="card-title my-4">{props.title}</h4>
        <strong>
          <h6 className="card-text my-4">{props.header}</h6>
        </strong>
        <a href={props.url} target="black" className="btn btn-primary my-1 bg-dark">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
