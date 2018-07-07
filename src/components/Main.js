//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ListView, FlatList, StatusBar, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { MenuProvider } from "react-native-popup-menu";

import MainHeader from "./header/MainHeaders";
import Item from "./items/ProductItem";
import { BACKGROUND_COLOR } from "../const/Const";
import {fetchData} from "../redux/actions/actionCreators";

// create a component
class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <MainHeader navigation={navigation} />
  });
  constructor(props) { 
    super(props);
    this.state={
      query: "",
    }
  }

  render() {
    const { container, wrapperItem } = styles; 
    const { navigation, products } = this.props;
    const { query } = this.state;
    return (
      <View style={container}>
        <FlatList
          data={products}
          renderItem={({item}) => <Item navigation={navigation} items={item}/>}
          keyExtractor={(item, index) => index.toString()}  
          numColumns={2}
        />
      </View>
    );
  }
  componentDidMount(){
    this.props.fetchData();
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
    products : state.products.posts,
    textSearch : state.textSearch,
  };
}
export default connect(mapStateToProps , {fetchData})(Main);
