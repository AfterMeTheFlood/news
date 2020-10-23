import React, { Component } from "react";
import _ from "lodash";
import Table from "./Table";
import Form from "./Form";
import getCnBeta from "./cnbeta";

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  };

  componentDidMount() {
    getCnBeta().then((data) => {
      this.setState({
        cnBeta: data,
      });
      console.log(data);
    });
  }

  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character],
    });
  };

  render() {
    const cnBeta = this.state && this.state.cnBeta ? this.state.cnBeta : {};
    return (
      <div className="App">
        <h1>{_.join(["Hello", "Web"], " ")}</h1>
        <div className="container">
          <Table
            characterData={cnBeta}
            removeCharacter={this.removeCharacter}
          />
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
