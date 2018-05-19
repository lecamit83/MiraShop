//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import {connect} from "react-redux";
import { BACKGROUND_COLOR , BACKGROUND_COLOR_INPUT, BACKGROUND_COLOR_HEADER } from "../const/Const";

// create a component
class SearchScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state={
      textSearch : "",  
    }
  }
  render() {
    const {
      container,
      logoApp,
      image,
      searchIcon,
      wrapperSearch,
      iconSearch,
      inputText,
      welcomeText,
      line,
      welcomeWrapper
    } = styles;

    return (
      <View style={container}>
        <View style={logoApp}>
          <Image style={image} source={require("../images/logo.png")} />
        </View>
        <View style={searchIcon}>
          <View style={wrapperSearch}>
            <TextInput
              style={inputText}
              underlineColorAndroid="transparent"
              placeholder="Nhập tên sản phẩm bạn muốn tìm"
              onChangeText={(textSearch)=>this.setState({textSearch})}
            />
            <View style={line} />
            <TouchableOpacity
              onPress={() => {
                this.props.dispatch({
                  type: "SEARCH",
                  textSearch : this.state.textSearch,
                });
                this.props.navigation.navigate("MainStack");
                console.log("SEARCH IN SCREENSEARCH: " + this.state.textSearch);
              }}
            >
              <Image
                source={require("../images/search_black.png")}
                style={iconSearch}
              />
            </TouchableOpacity>
          </View>
          <View style={welcomeWrapper}>
            <Text style={welcomeText}>Chào mừng bạn đến với MiraShop</Text>
          </View>
        </View>
      </View>
    );
  }
}

const { width ,height } = Dimensions.get("window");

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR_HEADER,
    padding: 10,
  },
  logoApp: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  searchIcon: {
    flex: 5,
  },
  wrapperSearch: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    padding: 5,
    backgroundColor: BACKGROUND_COLOR_INPUT,
    borderRadius: 25,
    //backgroundColor: 'rgba(0,0,0,0)', 
  },
  image: {
    height: (width - 10) * 66 / 144,
    width: width - 10,
    resizeMode: "contain"
  },

  iconSearch: {
    height: 30,
    width: 30,
    marginLeft: 5,
    marginRight: 5,
  },

  inputText: { 
    flex: 1, 
    height: 40,
    fontSize: 20, 
    marginLeft: 5,
    marginRight: 5,
  },

  welcomeText: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
    opacity: 0.6
  },

  line: { 
    backgroundColor: BACKGROUND_COLOR_HEADER,
    width: 1, 
    height: 30, 
  },

  welcomeWrapper: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    margin: 16
  }
});

//make this component available to the app
export default connect()(SearchScreen);
