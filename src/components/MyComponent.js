import React, { Component, Fragment } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { AppContext } from "../../AppProvider";

export default class MyComponent extends Component {
  state = {
    value: 0,
    repos: []
  };

  getData = async () => {
    const uri = "https://api.github.com/users/Leocardoso94/repos";

    const repos = await (await fetch(uri)).json();
    this.setState({ repos });
  };

  render() {
    return (
      <View style={styles.container}>
        <AppContext.Consumer>
          {({ showButton, toggleButton }) => (
            <Fragment>
              {showButton && (
                <Button
                  title="Press here to see my repos"
                  onPress={async () => {
                    await this.getData();
                    toggleButton();
                  }}
                />
              )}
              <FlatList
                data={this.state.repos}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id.toString()}
              />
            </Fragment>
          )}
        </AppContext.Consumer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20
  }
});
