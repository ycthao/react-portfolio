import React from "react";
import "../../style/style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>{props.description}</strong>
          </li>
          <li>
            <strong>{props.technology}:</strong>
          </li>
          <li>
            Github:{" "}
            <a href={props.github} target="_blank" rel="noreferrer">
              {props.github}
            </a>{" "}
            <br />
            {/* Deployed: <a href={props.deployed} target="_blank" rel="noreferrer">{props.deployed}</a> */}
            {props.deployed != null ? props.deployed : "no link"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
