import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/style.css";
import { Card } from "react-bootstrap";

function FriendCard(props) {
  return (
    <Card className="col-4 bgc">
      <Card.Title>
        <h6>{props.name}</h6>
      </Card.Title>
      <Card.Img alt={props.name} src={props.image} />
      <Card.Body>
        <Card.Text>
          <p>{props.description}</p>
          <p>{props.technology}</p>
          <p>
            Github: <a href={props.github}>{props.github}</a>
            <br />
            Deployed: <a href={props.deployed}>{props.deployed}</a>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>

    // <div className="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Name:</strong> {props.name}
    //       </li>
    //       <li>
    //         <strong>{props.description}</strong>
    //       </li>
    //       <li>
    //         <strong>{props.technology}:</strong>
    //       </li>
    //       <li>
    //         Github:{" "}
    //         <a href={props.github} target="_blank" rel="noreferrer">
    //           {props.github}
    //         </a>{" "}
    //         <br />
    //         {/* Deployed: <a href={props.deployed} target="_blank" rel="noreferrer">{props.deployed}</a> */}
    //         {props.deployed != null ? props.deployed : "no link"}
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default FriendCard;
