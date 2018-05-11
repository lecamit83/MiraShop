//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {connect} from "react-redux";
import * as CONST from "../../const/Const";
// create a component
class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: this.props.textSearch,
    };
  }

  render() {
    const { navigation } = this.props;
    const {
      wrapMenu,
      iconMenu,
      wrapSettings,
      iconSettings,
      container,
      wrapperSearch,
      iconSearch,
      inputText
    } = styles;
    return (
      <View style={container}>
        <View style={wrapMenu}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DrawerOpen");
            }}
          >
            <Image source={require("../../images/menu.png")} style={iconMenu} />
          </TouchableOpacity>
        </View>
        <View style={wrapperSearch}>
          <TextInput
            style={inputText}
            value={this.state.ip}
            underlineColorAndroid="transparent"//ios khong ho tro
            placeholder="Nhập tên sản phẩm..."
            onChangeText={(text) => this.setState({ ip: text })}
          />
          <TouchableOpacity
            onPress={() => {
              console.log("SEARCH IN HEADER: " + this.props.textSearch);
            }}
          >
            <Image
              source={require("../../images/searchIcon.png")}
              style={iconSearch}
            />
          </TouchableOpacity>
        </View>
        <View style={wrapSettings}>
          <TouchableOpacity
            onPress={() => {
              alert("SETTINGS");
            }}
          >
            <Image
              source={require("../../images/settings.png")}
              style={iconSettings}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const { height, width } = Dimensions.get("window");
// define your styles
const styles = StyleSheet.create({
  container: {
    height: height / 10.5,
    backgroundColor: CONST.BACKGROUND_COLOR_HEADER,
    flexDirection: "row",
    alignItems: "center"
  },
  iconSearch: {
    height: 30,
    width: 30,
    marginRight: 8
  },
  inputText: {
    fontSize: 20,
    marginLeft: 10,
    width: width - 128,
    height: 40,
  },
  wrapperSearch: {
    flexDirection: "row",
    alignItems: "center",
    margin: 4,
    borderRadius: 5,
    backgroundColor: CONST.BACKGROUND_COLOR_INPUT,
    borderColor: CONST.BORDER_COLOR,
  },
  wrapMenu: {
    height: 30,
    width: 46
  },
  iconMenu: {
    height: 30,
    width: 30,
    marginLeft: 8,
    marginRight: 8
  },
  wrapSettings: {
    height: 30,
    width: 26
  },
  iconSettings: {
    height: 30,
    width: 10,
    marginLeft: 8
  }
});


function mapStateToProps(state) {
  return {
    textSearch : state.textSearch,
  };
}
//make this component available to the app
export default connect(mapStateToProps)(MainHeader);
