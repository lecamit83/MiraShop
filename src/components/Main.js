//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ListView, FlatList, StatusBar, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { MenuProvider } from "react-native-popup-menu";

import MainHeader from "./header/MainHeaders";
import Item from "./items/ProductItem";
import { BACKGROUND_COLOR } from "../const/Const";
import {fetchData} from "../redux/actions/actionCreators";
var urls = ["http://api.hifapp.com/api/thuoc?page=", "http://api.hifapp.com/api/tpcn?page=", "http://api.hifapp.com/api/vttb?page=", "http://api.hifapp.com/api/mypham?page="];
// create a component
class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <MainHeader navigation={navigation} />
  });
  constructor(props) { 
    super(props);
  }

  render() {
    const { container, wrapperItem } = styles; 
    const { navigation, products, pages } = this.props;
    const { key } = this.props.navigation.state;
    var id = this.props.navigation.state.key.split('-')[2];
    return (
      <View style={container}>
        <FlatList
          data={products[id]}
          renderItem={({item}) => <Item navigation={navigation} items={item}/>}
          keyExtractor={(item, index) => {
            return (item.product_id + '#'+ index);
          }}  
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            this.props.fetchData(id, pages[id]);
          }}
        />
      </View>
    );
  }
  componentDidMount(){
    var id = this.props.navigation.state.key.split('-')[2];
    this.props.fetchData(id, this.props.pages[id]);
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
    pages :  state.products.pages,
  };
}
export default connect(mapStateToProps , {fetchData})(Main);
