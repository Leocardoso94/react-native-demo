import React, { Component } from "react";

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  state = {
    title: "My GitHub Repos",
    showButton: true,
    githubData: {},
    toggleButton: () => {
      this.setState({ showButton: !this.state.showButton });
    }
  };

  componentDidMount = async () => {
    const uri = "https://api.github.com/users/Leocardoso94";

    const githubData = await (await fetch(uri)).json();

    this.setState({ githubData });
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
