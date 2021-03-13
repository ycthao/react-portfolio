import React from "react";
import portofolio from "../../portofolio.json";
import "../../style/style.css";

function PortofolioPage(props) {
  state = { portofolio };

  removePortofolio = (id) => {
    const portolio = this.state.portofolio.filter((portofolio) => portofolio.id !== id);
    this.setState({ portofolio });
  };

  return (
    <div>
      <h2>Portofolio</h2>
      {this.state.portofolio.map((portolio) => (
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
                <strong>Occupation:</strong> {props.description}
              </li>
              <li>
                <strong>Location:</strong> {props.github}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PortofolioPage;
