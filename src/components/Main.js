//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ListView, FlatList, StatusBar } from "react-native";
import { connect } from "react-redux";
import { MenuProvider } from "react-native-popup-menu";

import MainHeader from "./header/MainHeaders";
import Item from "./items/ProductItem";
import { BACKGROUND_COLOR } from "../const/Const";

// create a component
class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <MainHeader navigation={navigation} />
  });
  constructor() {
    super();
  }
  render() {
    const { container, wrapperItem } = styles;
    const { navigation, products } = this.props;
    return (
      <View style={container}>
        <FlatList
          data={products}
          renderItem={({item}) => <Item navigation={navigation} name={item.name} cost={item.cost}/>}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 5,
    backgroundColor: BACKGROUND_COLOR
  },

  wrapperItem: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

//make this component available to the app
function mapStateToProps(state) {
  return {
    products : state.products,
  };
}
export default connect(mapStateToProps)(Main);
