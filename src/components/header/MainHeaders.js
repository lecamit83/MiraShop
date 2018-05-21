//import liraries
import React, { Component } from "react";
import {
  View,
  // Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform
} from "react-native";
import { connect } from "react-redux";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';

import * as CONST from "../../const/Const.js";
// import * as STYLES from "../../const/Styles.js";

// create a component
class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: this.props.textSearch
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
      inputText,
      line,
      index,
      wrapImage,
      wrapText,
      icon,
      text,
      item,
      containerAll,
    } = styles;
    const MENUJSX = (
      <Menu>
        <MenuTrigger>
          <Image
            style={iconSettings}
            source={require("../../images/news_add_white.png")}
          />
        </MenuTrigger>
        <MenuOptions 
          customStyles={optionsStyles}
        >
          {/* <View>
            <MenuOption onSelect={() => alert(`Save`)}>
              <View style={index}>
                <View style={wrapImage}>
                  <Image
                    style={icon}
                    source={require("../../images/medicine.png")}
                  />
                </View>
                <View style={wrapText}>
                  <Text style={text}>{CONST.THUOC}</Text>
                </View>
              </View>
            </MenuOption>
            <View style={line} />
            <MenuOption onSelect={() => alert(`Delete`)} style={item}>
              <View style={index}>
                <View style={wrapImage}>
                  <Image
                    style={icon}
                    source={require("../../images/medical_supplies.png")}
                  />
                </View>
                <View style={wrapText}>
                  <Text style={text}>{CONST.VT_YT}</Text>
                </View>
              </View>
            </MenuOption>
            <View style={line} />
            <MenuOption onSelect={() => alert(`Delete`)} style={item}>
              <View style={index}>
                <View style={wrapImage}>
                  <Image
                    style={icon}
                    source={require("../../images/medical_supplies.png")}
                  />
                </View>
                <View style={wrapText}>
                  <Text style={text}>{CONST.MY_PHAM}</Text>
                </View>
              </View>
            </MenuOption>
            <View style={line} />
            <MenuOption>
              <View style={index}>
                <View style={wrapImage}>
                  <Image
                    style={icon}
                    source={require("../../images/healthy_foods.png")}
                  />
                </View>
                <View style={wrapText}>
                  <Text style={text}>{CONST.TP_CN}</Text>
                </View>
              </View>
            </MenuOption>
          </View> */}
          
          <Card>
            <CardItem header style={{ backgroundColor: CONST.BACKGROUND_COLOR_HEADER }}>
              <Text style={{ fontSize: 17, color: '#FFF' }}>Thêm Mới</Text>
            </CardItem>
            <MenuOption onSelect={() => { navigation.navigate("CompanyStack") }} >
              <CardItem bordered>
                <Icon active name="logo-googleplus" />
                <Text>Thuốc</Text>
              </CardItem>
            </MenuOption>
            <MenuOption onSelect={() => alert(`TPCN`)} style={item} >
              <CardItem bordered>
                <Icon active name="logo-googleplus" />
                <Text>Thực Phẩm Chức Năng</Text>
              </CardItem>
            </MenuOption>
            <MenuOption onSelect={() => alert(`TBYT`)} style={item} >
              <CardItem bordered>
                <Icon active name="logo-googleplus" />
                <Text>Vật Tư & Thiết Bị Y Tế</Text>
              </CardItem>
            </MenuOption>
            <MenuOption onSelect={() => alert(`MP`)} style={item} >
              <CardItem bordered>
                <Icon active name="logo-googleplus" />
                <Text>Mỹ Phẩm</Text>
              </CardItem>
            </MenuOption>
          </Card>
        </MenuOptions>
      </Menu>
    );
    return (
      <View style={containerAll}>
        <StatusBar
          style={{
            height: Platform.OS === "ios" ? 20 : 0,
            backgroundColor: CONST.BACKGROUND_COLOR_HEADER
          }}
        />
        <View style={container}>

          <View style={wrapMenu}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DrawerOpen");
              }}
            >
              <Image source={require("../../images/menu_white.png")} style={iconMenu} />
            </TouchableOpacity>
          </View>
          <View style={wrapperSearch}>
            <TextInput
              style={inputText}
              value={this.state.ip}
              underlineColorAndroid="transparent" //ios khong ho tro
              placeholder="Tên sản phẩm"
              onChangeText={text => this.setState({ ip: text })}
            />
            <TouchableOpacity
              onPress={() => {
                console.log("SEARCH IN HEADER: " + this.props.textSearch);
              }}
            >
              <Image
                source={require("../../images/search_black.png")}
                style={iconSearch}
              />
            </TouchableOpacity>
          </View>
          <View style={wrapSettings}>
            <TouchableOpacity>{MENUJSX}</TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const optionsStyles = {
  optionsContainer: {
    borderColor: CONST.BORDER_COLOR,
    borderWidth: 1,
    width: 300,
  }
};

const { height, width } = Dimensions.get("window");

// define your styles
const styles = StyleSheet.create({
  containerAll: {
    backgroundColor: CONST.BACKGROUND_COLOR_HEADER,
  },

  container: {
    height: CONST.HEADER_HEIGHT,
    backgroundColor: CONST.BACKGROUND_COLOR_HEADER,
    flexDirection: "row",
    alignItems: "center",
  },

  iconSearch: {
    height: 30,
    width: 30,
  },

  inputText: {
    fontSize: 18,
    width: width - 124,
    height: 40
  },

  item: {
    padding: 0,
  },

  wrapperSearch: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 3,
    height: 40,
    backgroundColor: CONST.BACKGROUND_COLOR_INPUT,
    borderColor: CONST.BORDER_COLOR
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
    width: 40
  },

  iconSettings: {
    height: 30,
    width: 30,
    marginLeft: 4
  },

  line: { backgroundColor: CONST.LINE, height: 1, opacity: 0.6 },

  index: { flexDirection: "row" },

  wrapImage: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center"
  },

  icon: { height: 20, width: 20, resizeMode: "contain", opacity: 0.6 },
  wrapText: { marginLeft: 16, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 16 }
});

function mapStateToProps(state) {
  return {
    textSearch: state.textSearch
  };
}
//make this component available to the app
export default connect(mapStateToProps)(MainHeader);
