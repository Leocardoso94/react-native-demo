import React, { Fragment } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MyComponent from "./src/components/MyComponent";
import AppProvider, { AppContext } from "./AppProvider";

export default () => (
  <AppProvider>
    <View style={styles.container}>
      <AppContext.Consumer>
        {({ title, githubData }) => (
          <Fragment>
            <Text>{title}</Text>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={{
                uri: githubData.avatar_url
              }}
            />
          </Fragment>
        )}
      </AppContext.Consumer>

      <MyComponent />
    </View>
  </AppProvider>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
