import React from "react";
import { Card } from "react-bootstrap";
import "../../style/style.css";

function Homepage() {
  return (
    <div className="container">
      <h2 className="center">About Me</h2>
      <div className="row center">
        <Card className="col">
          <Card.Title>
            <h6>Yeem Chij Thao</h6>
          </Card.Title>
          <Card.Img src="#" />
          <Card.Body>
            <Card.Text>
              <p>Text</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Homepage;
