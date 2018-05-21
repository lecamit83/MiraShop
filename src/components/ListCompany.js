import React, { Component } from "react";
import { View, Text, StyleSheet, ListView, FlatList, StatusBar } from "react-native";
import { connect } from "react-redux";
import Header from "./header/MainHeaders"
import Item from "./items/CompanyItem";
import { BACKGROUND_COLOR } from "../const/Const";

class ListCompany extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { container, wrapperItem } = styles;
    const { navigation, companys } = this.props;
    return (
      <View style={container}>
        <Header navigation={navigation} />
        <FlatList
          data={companys}
          renderItem={({item}) => <Item navigation={navigation} name={item.name} address={item.address}/>}
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
    companys: state.companys,
  };
}
export default connect(mapStateToProps)(ListCompany);
