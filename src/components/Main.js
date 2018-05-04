//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {connect} from "react-redux";

import MainHeader from "./header/MainHeaders";
import ProductItem from "./items/ProductItem";
import {BACKGROUND_COLOR} from '../const/Const'

// create a component
class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <MainHeader navigation={navigation} />
  });
  render() {
    const { container, wrapperItem } = styles;
    const { navigation } = this.props;
    return (
      <ScrollView style={container}>
        <View style={wrapperItem}>
          <ProductItem navigation={navigation} />
          <ProductItem navigation={navigation} />
          <ProductItem navigation={navigation} />
          <ProductItem navigation={navigation} />
          <ProductItem navigation={navigation} />
        </View>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  wrapperItem: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

function mapStateToProps(state) {
  return {
    textSearch,
  }
}
//make this component available to the app
export default connect()(Main);
