import React, { Component } from "react";
import { View, Text, StyleSheet, ListView, FlatList, StatusBar } from "react-native";
import { connect } from "react-redux";
import Header from "./header/MainHeaders"
import Item from "./items/CompanyItem";
import { BACKGROUND_COLOR } from "../const/Const";
import {fetchCompany} from "../redux/actions/actionCreators";

class ListCompany extends Component {
  static navigationOptions = ({navigation})=>({
    header: <Header navigation={navigation}/>
  });
  constructor(props) {
    super(props);
  }
  render() {
    const { container, wrapperItem } = styles;
    const { navigation, companys } = this.props;
    console.log('ListCompany ');
    console.log(companys);
    
    
    return (
      <View style={container}>
        <FlatList
          data={companys}
          renderItem={({item}) => <Item navigation={navigation} itemProps={item}/>}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
        />
      </View>
    );
  }
  componentDidMount(){
    this.props.fetchCompany('http://api.hifapp.com/api/ncc');
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
    companys: state.companys.arrCo,
  };
}
export default connect(mapStateToProps , {fetchCompany})(ListCompany);
