import React, { Component } from "react";
import { YellowBox } from "react-native";
import { Provider } from "react-redux";
import Route from "./src/components/route/Route";
import store from "./src/redux/store/store";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
