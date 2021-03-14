import React from "react";
import "../../style/style.css";
import { Card } from "react-bootstrap";

function PortofolioPage() {
  return (
    <div>
      <h3 className="center">Portofolio</h3>
      <div className="container">
        <div className="row center" style={{ width: "100%" }}>
          <Card className="col-3">
            <Card.Title>
              <h6>Title</h6>
            </Card.Title>
            <Card.Img src="#" />
            <Card.Body>
              <Card.Text>
                <p>Text</p>
                <p>
                  Github: <a href="">Link</a>
                  <br />
                  Deployed: <a href="">Link</a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-3">
            <Card.Title>
              <h6>Title</h6>
            </Card.Title>
            <Card.Img src="#" />
            <Card.Body>
              <Card.Text>
                <p>Text</p>
                <p>
                  Github: <a href="">Link</a>
                  <br />
                  Deployed: <a href="">Link</a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-3">
            <Card.Title>
              <h6>Title</h6>
            </Card.Title>
            <Card.Img src="#" />
            <Card.Body>
              <Card.Text>
                <p>Text</p>
                <p>
                  Github: <a href="">Link</a>
                  <br />
                  Deployed: <a href="">Link</a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default PortofolioPage;
