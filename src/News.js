import React from "react";

export const News = (props) => {
  return (
    <div className="news">
      <div className="news-img">
        <img src={props.article.urlToImage} alt="news-image" />
      </div>

      <h1>{props.article.title?.substring(0, 70)}</h1>

      <p>
        {props.article.description?.substring(0, 140).concat("....")}{" "}
        <a href={props.article.url} target="_blank">Read More</a>
      </p>

      <div className="sources">
        <p>Author: {props.article.author}</p>
        <p>{props.article.source.name}</p>
      </div>
    </div>
  );
};
