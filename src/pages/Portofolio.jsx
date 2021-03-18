import React, { Component } from "react";
import PortofolioCard from "../components/PortofolioCard/portofolioCard";
import Wrapper from "../components/Wrapper/wrapper"
import plists from "../plist.json";
import '../style/style.css';

class Portofolio extends Component {
  // Setting this.state.plists to the plists json array
  state = {
    plists
  };

  removeFriend = id => {
    // Filter this.state.plists for plists with an id not equal to the id being removed
    const plists = this.state.plists.filter(plist => plist.id !== id);
    // Set this.state.plists equal to the new plists array
    this.setState({ plists });
  };
  
  // Map over this.state.plists and render a PortofolioCard component for each plist object
  render() {
    return (

          <Wrapper>
        {this.state.plists.map(plist => (
          <PortofolioCard
            removeFriend={this.removeFriend}
            id={plist.id}
            key={plist.id}
            name={plist.name}
            image={plist.image}
            description={plist.description}
            technology={plist.technology}
            github={plist.github}
            deployed={plist.deployed}
          />
        ))}
        </Wrapper>

    );
  }
}

export default Portofolio;
