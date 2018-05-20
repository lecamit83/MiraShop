import React, { Component } from "react";
import { View, Text, StyleSheet, ListView, FlatList, StatusBar } from "react-native";
import { connect } from "react-redux";
import Header from "./header/CompanyHeader"
import Item from "./items/CompanyItem";
import { BACKGROUND_COLOR } from "../const/Const";

class ListCompany extends Component {

    constructor(props) {
      super(props);
    }
    render() {
      const { container, wrapperItem } = styles;
      const { navigation, products } = this.props;
      return (
        <View style={container}>
          <Header navigation={navigation} title="Danh Sach Cong Ty" />
          <FlatList
            data={products}
            renderItem={({item}) => <Item/>}
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
  export default connect(mapStateToProps)(ListCompany);
  