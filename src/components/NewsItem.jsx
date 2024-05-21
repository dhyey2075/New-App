import React from "react";

const NewsItem = (props) => {
  return (
    <div className="card" style = {{'overflow':'hidden'}}>
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
        <small class="text-muted">By {props.author} at {(props.time)}</small><br />
        <a href={props.url} target="black" className="btn btn-primary bg-dark">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
